# Manual money operations

A log of wallet fixes made by hand, plus pending ones still to do. Anything
changed outside the app goes here, so the admin **Wallet check** card and
"Deleted accounts still holding money" can always be explained.

## How to change a wallet balance safely (Supabase SQL Editor)

A plain `UPDATE users SET wallet_balance = …` from the SQL Editor is **silently
ignored**. The `users_guard_privileged_cols` trigger (migration 025) keeps the
old balance for any write that isn't from the app's server key. Any `INSERT`
in the same script still goes through, so the ledger and the balance drift apart.

Always do both inside one transaction, with the `set local` line first:

```sql
begin;
set local request.jwt.claims = '{"role":"service_role"}';
update users set wallet_balance = wallet_balance - <amount> where id = '<user id>';
insert into wallet_transactions (user_id, amount, type, description)
values ('<user id>', <amount>, 'debit', '<why>');   -- 'credit' when adding money
commit;
```

Afterwards, check that the admin Overview **Wallet check** is green (or unchanged).

## Pending

### Naveeta: ₹55 of listener earnings, deleted account (`DELETE919056243499`)

- **Status:** owed to her. Her account was deleted, which cancelled her payout
  and left the ₹55 in a wallet she can't access. That was the bug fixed in commit `0d081b7`.
- **Do this only AFTER you have paid her ₹55 by some other means:**

```sql
begin;
set local request.jwt.claims = '{"role":"service_role"}';
update users set wallet_balance = wallet_balance - 55 where phone = 'DELETE919056243499';
insert into wallet_transactions (user_id, amount, type, description)
select id, 55, 'debit', 'Paid out manually after account deletion'
from users where phone = 'DELETE919056243499';
commit;
```

- If she can't be reached, leave it. It stays listed on the admin page as money owed.

## Done

| Date | Who | What | Why |
|---|---|---|---|
| 2026-09-25 | Naveeta (`DELETE919056243499`) | Ledger: +₹55 credit "Session earnings (recorded retroactively)" | An older app version credited her earnings without a ledger row. Her history now matches her ₹55 balance. |
| 2026-09-25 | Naveeta | Ledger: −₹55 "Balance written off" and +₹55 "Reversal of write-off" | An attempted write-off. The balance change was blocked by the trigger above, the reversal cancels it, and the balance never changed. |
| 2026-09-06 | Shakti | ₹300 of earnings withdrawn through the seeker refund flow and paid manually | Happened before listeners were routed to Request Payout. Nothing owed. |
| 2026-07-07 | Vidya (owner test account) | ₹140 payout hold with no matching earnings row | An older app version didn't log earnings credits. Test account; nothing owed. |
