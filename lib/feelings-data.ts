// Mood-based landing pages for LeanOn.
// Consumed by the dynamic route /feeling/[mood] and the /daily-check-in hub.
// Pure data — no React, no JSX, no side effects.
//
// SAFETY: LeanOn is peer emotional support, not professional mental health
// care. Nothing here diagnoses, treats, or cures anything. The only crisis
// helplines referenced anywhere in this file are NIMHANS (080-46110007) and
// Tele-MANAS (14416).

export type Feeling = {
  slug: string
  emoji: string
  label: string
  h1: string
  metaTitle: string
  metaDescription: string
  keywords: string
  lead: string
  sections: { h: string; p: string }[]
  faqs: { q: string; a: string }[]
  relatedSupport: string[]
}

export const FEELINGS: Feeling[] = [
  {
    slug: "lonely",
    emoji: "🌙",
    label: "Lonely",
    h1: "Feeling lonely today? You are not the only one awake with this.",
    metaTitle: "Feeling Lonely Today? Talk to Someone Now | LeanOn",
    metaDescription:
      "Feeling lonely right now? Talk to a verified LeanOn listener who has felt it too. Anonymous, judgement-free, first 5 minutes free.",
    keywords:
      "feeling lonely, i feel lonely today, lonely in a new city, loneliness india, someone to talk to when lonely, anonymous emotional support india, feeling alone at night",
    lead: `Loneliness is not the same as being by yourself. You can feel it in a full house, in a WhatsApp group with two hundred people, at a wedding where everyone knows your name. What is actually missing is not company — it is the feeling that someone knows what your day was like and cares how it went.`,
    sections: [
      {
        h: "What loneliness actually feels like from the inside",
        p: `Loneliness rarely announces itself. It shows up as a flat, heavy feeling in the chest around evening, or the strange restlessness where you open and close the same three apps for an hour. Many people describe a delay in their own reactions — jokes land late, food tastes like nothing much, the day passes without a single moment worth telling anyone about. Physically it can look like poor sleep, tension in the jaw and shoulders, eating at odd hours or not at all. Mentally, it narrows your world: you start assuming people are busy, so you stop reaching out, which makes the silence more convincing. That is the cruel part — loneliness slowly builds the evidence for its own story about you.`,
      },
      {
        h: "Why so many people in India feel this right now",
        p: `A whole generation moved cities for work. You land in Bengaluru, Pune, Gurgaon or Hyderabad, find a flat, find a desk, and discover that no one there has known you longer than a quarter. Back home the assumption is that you are thriving — you have the job everyone wanted. Meanwhile your closest friendships have quietly become a birthday message once a year. For others it is the opposite shape: living inside a joint family with almost no privacy, surrounded by people all day, yet with nobody you can say the honest thing to. Add "log kya kahenge", the sense that admitting loneliness means admitting failure, and most people simply carry it silently and call it being busy.`,
      },
      {
        h: "Why the usual advice does not help",
        p: `"Just go out and meet people." "Join a gym." "Call your friends, na." This advice assumes loneliness is a logistics problem, when it is almost always a depth problem. You can attend three brunches in a week and come home feeling emptier, because none of it required you to be honest. The other reason it fails is energy: loneliness lowers the exact motivation you would need to fix it, so the advice becomes one more thing you are failing at. And telling a close friend has its own cost — you become the sad one in the group, or the conversation gets redirected into solutions and marriage suggestions within ninety seconds. So people stop mentioning it, and the loop tightens.`,
      },
      {
        h: "What genuinely helps",
        p: `Small and specific beats big and vague. Name it plainly to yourself — "I am lonely right now" is far less corrosive than "nobody cares about me", because the first is a state and the second is a verdict. Get one moment of real contact into your day, even asynchronous: a voice note instead of a text, because hearing a voice does something typing cannot. Put your body somewhere with other humans in it, even without talking — a park, a chai stall, a library. Build one repeating anchor: a Tuesday call, a weekend walk, anything that recurs so you are not starting from zero each time. And have at least one place where you can say the unflattering version of how you feel without managing anyone else's reaction.`,
      },
      {
        h: "Why talking to someone who has felt this helps",
        p: `There is a particular relief in talking to somebody who does not need loneliness explained to them. LeanOn listeners are ordinary people, verified and trained in listening, who have lived through their own stretch of this — the first year in a new city, the marriage where you feel alone at the dinner table, the WFH months where you did not speak aloud until evening. They are not there to fix your life or hand you a five-step plan. They listen with real empathy, they ask the question nobody else asks, and they let the conversation go where it needs to. It is anonymous, so you are not managing your reputation while you talk. Sometimes being properly heard once is what breaks the loop.`,
      },
    ],
    faqs: [
      {
        q: "Is it normal to feel lonely even when I live with family?",
        a: `Yes, and it is far more common than people admit. Loneliness is about being known, not about being near people. Plenty of seekers on LeanOn live in busy homes with parents, siblings, spouses and relatives, and still have nobody they can say the true thing to — because the true thing would worry them, disappoint them, or get repeated. Being surrounded and unseen can actually feel worse than being alone, because it makes you doubt your own reaction. You are not ungrateful for feeling it.`,
      },
      {
        q: "What do I do when loneliness hits hardest at 1 or 2 AM?",
        a: `Late nights are when there is nothing left to distract you, so the feeling gets the whole room. First, do not make decisions or send messages you will re-read at 9 AM. Get out of bed for ten minutes, drink water, and change the input — a podcast with human voices tends to help more than scrolling. If you want to actually talk to someone, LeanOn listeners are often online late precisely because that is when people need them. Talking for fifteen minutes at 2 AM is a completely reasonable thing to do.`,
      },
      {
        q: "How does LeanOn work, and what does it cost?",
        a: `You pick a listener whose lived experience matches what you are carrying, and start a session. The first 5 minutes are free, so you can tell whether the person actually feels right before any money is involved. After that, listeners set their own rate between ₹8 and ₹25 per minute, and LeanOn adds a flat ₹10 platform fee per paid session. A 15-minute session starts around ₹160. There is no subscription, no package, and no obligation to continue past the free 5 minutes.`,
      },
      {
        q: "Will anyone find out that I reached out?",
        a: `No. You talk under a display name, your number is never shown to the listener, and nothing you say is shared with anyone in your life. Many people use LeanOn precisely because the honest version of how they feel is not something they can say to family, a partner, or colleagues without consequences. Anonymity is not a side feature here — for most seekers it is the whole reason the conversation can be honest at all.`,
      },
    ],
    relatedSupport: [
      "/support/loneliness",
      "/support/someone-to-talk-to",
      "/support/sunday-night-loneliness",
      "/support/work-from-home-loneliness",
    ],
  },

  {
    slug: "anxious",
    emoji: "😰",
    label: "Anxious",
    h1: "Feeling anxious right now? Let us slow this down together.",
    metaTitle: "Feeling Anxious Right Now? Talk to Someone | LeanOn",
    metaDescription:
      "Anxious and cannot switch your mind off? Talk to a LeanOn listener who has been there. Anonymous, no judgement, first 5 minutes free.",
    keywords:
      "feeling anxious, anxiety right now, cannot stop overthinking, anxious about work, anxiety help india, someone to talk to about anxiety, racing thoughts at night",
    lead: `Anxiety is not just worrying. It is your body running an emergency drill for something that has not happened, over and over, while you are supposed to sit in a meeting and behave normally. If your chest is tight and your mind will not stop rehearsing, you are not being dramatic — your alarm system is simply stuck on.`,
    sections: [
      {
        h: "What anxiety actually does to your body and mind",
        p: `Anxiety is physical long before it is verbal. A tight band across the chest, shallow breathing high in the ribs, a stomach that will not settle, cold hands, a heart that seems too loud in a quiet room. Some people get it as constant low-grade nausea, some as the need to check things repeatedly, some as an inability to sit still. Mentally it shows up as scanning — your brain quietly running worst-case scenarios in the background of every conversation. You re-read a sent message four times. You draft a reply to a message that has not come. It is exhausting in a way that is hard to explain to people, because from the outside you look like you are just sitting there.`,
      },
      {
        h: "Why it builds up, especially here",
        p: `Anxiety tends to grow where the stakes feel high and the ground feels uncertain. In India that combination is everywhere: appraisal cycles and layoff rumours you cannot ask anyone about, an entire family's expectations resting on one person's job, exam results that get discussed by relatives who never asked how you are. Comparison has also become continuous — you see the promotion, the wedding, the flat purchase and the foreign move on your feed all day, and your brain reads it as a scoreboard. Add "log kya kahenge", where the fear is not just failing but being seen failing, and the mind starts pre-worrying about judgement that has not happened yet. That is anxiety with a very Indian accent.`,
      },
      {
        h: "Why 'just relax' and 'don't overthink' backfire",
        p: `Being told not to overthink adds a second problem on top of the first: now you are anxious, and also failing at not being anxious. The same goes for "be positive" — it asks you to argue with your own nervous system using logic, and logic is not what is driving the car. Distraction can help for twenty minutes, but the thought comes back with interest. And the most common self-treatment, seeking reassurance, actually feeds it: every time you check, re-confirm, or ask someone whether it will be fine, you teach your brain that the danger was real enough to need checking. Anxiety does not respond to being scolded. It responds to being slowed down and heard.`,
      },
      {
        h: "What genuinely helps",
        p: `Start with the body, because that is where the loop is running. Lengthen your exhale until it is longer than your inhale for a couple of minutes — it is the simplest lever you have. Name the specific fear out loud rather than letting it stay a fog; "I am scared my manager is unhappy with my last review" is workable, "everything is going wrong" is not. Write the worry down and note whether it is a problem or a prediction, because they need different responses. Give worry a bounded slot in the day instead of letting it lease the whole day. Move for ten minutes. And say it to another person, because anxiety loses a surprising amount of its size once it has been spoken to someone who does not flinch.`,
      },
      {
        h: "Why talking to someone who has been anxious helps",
        p: `Describing anxiety to somebody who has never had it is its own small stress — you can watch them trying to find the logical flaw in your fear. LeanOn listeners include people who have lived through their own version of this: the interview spirals, the health scare that would not leave, the panic before every family function. They will not tell you your fear is irrational. They will let you say the whole thing, all the branches, without rushing you to a conclusion, and they will bring genuine empathy rather than a checklist. That combination — being taken seriously and not being fixed — is what usually lets the volume drop. LeanOn is peer emotional support, not medical care, and if your anxiety is affecting your ability to work, sleep or eat, a licensed professional is the right next step.`,
      },
    ],
    faqs: [
      {
        q: "How do I calm down in the next five minutes?",
        a: `Change your breathing first, since it is the fastest route in: breathe in for four counts, out for six or seven, for about two minutes, and let the out-breath be the long one. Then get your feet flat on the floor and name five things you can see and two you can hear — it pulls attention out of the future and into the room. Splash cold water on your face if you can. None of this solves the problem you are worried about, but it lowers the alarm enough that you can think again.`,
      },
      {
        q: "Is what I feel anxiety or just normal stress?",
        a: `LeanOn cannot and does not diagnose anything — that is genuinely a job for a licensed professional. What people generally describe as everyday stress has an object and ends when the thing ends. What people describe as anxiety tends to outlive its cause, jumps to a new topic when one is resolved, and shows up in the body even on days with nothing happening. If it is persistent and getting in the way of your work, sleep or relationships, please speak to a qualified professional. India also has two free 24/7 government helplines: NIMHANS on 080-46110007 and Tele-MANAS on 14416.`,
      },
      {
        q: "What if I start a session and cannot explain what is wrong?",
        a: `That is completely fine and very common. You are not expected to arrive with a tidy summary. Plenty of sessions begin with "I do not know, I just feel off today", and the listener takes it from there with questions rather than expecting a briefing. Anxiety is often shapeless until you start talking, and shaping it is part of what the conversation is for.`,
      },
      {
        q: "What does a session cost?",
        a: `The first 5 minutes are free, which is usually enough to know whether the listener feels right for you. After that the rate is set by the listener, between ₹8 and ₹25 per minute, plus a flat ₹10 platform fee per paid session. A 15-minute session starts around ₹160. Nothing is charged automatically and there is no subscription — you choose each time whether to continue.`,
      },
    ],
    relatedSupport: [
      "/support/anxiety",
      "/support/overthinking",
      "/support/social-anxiety",
      "/support/someone-to-talk-to",
    ],
  },

  {
    slug: "overwhelmed",
    emoji: "🌊",
    label: "Overwhelmed",
    h1: "Feeling overwhelmed? You do not have to carry all of it at once.",
    metaTitle: "Feeling Overwhelmed? Talk It Out Today | LeanOn",
    metaDescription:
      "Everything at once and no room to breathe? Talk to a LeanOn listener who has been there. Anonymous, judgement-free, first 5 minutes free.",
    keywords:
      "feeling overwhelmed, too much to handle, overwhelmed with work, cannot cope right now, overwhelmed india, someone to talk to when overwhelmed, mental load",
    lead: `Overwhelm is what happens when the demands stack higher than the capacity, and everything starts feeling equally urgent. It is not weakness and it is not poor time management. It is a signal that you have been running above your limit for long enough that your system has stopped being able to prioritise.`,
    sections: [
      {
        h: "What overwhelm actually looks like",
        p: `The strangest thing about overwhelm is that it often looks like doing nothing. You have eleven urgent things, so you sit and stare at your phone, because choosing between them requires a bandwidth you no longer have. Small decisions become disproportionately hard — what to eat, which reply to send first. Your memory gets slippery; you walk into a room and forget why. Physically it can be a tight jaw, shallow breathing, headaches by evening, a fluttery restlessness that will not let you rest even when you finally have an hour free. Emotionally there is a short fuse and then guilt about the short fuse. And underneath it all, the constant low hum of a list you are certain you are forgetting something from.`,
      },
      {
        h: "Why the load gets this heavy",
        p: `Very few people are overwhelmed by one big thing. It is usually a dozen medium things with no gaps between them: a job with no real boundaries because the team is spread across time zones, parents whose health needs managing over phone from another city, a home that runs on your invisible admin, and a family that expects your presence at every function. In India the load is rarely just yours — you are often the first person in your family in this kind of career, so you are absorbing everyone's expectations along with your own deadlines. Add long commutes, the assumption that you should always be reachable, and the guilt of saying no to relatives, and the calendar stops having any recovery space in it at all.`,
      },
      {
        h: "Why productivity advice makes it worse",
        p: `The standard response to overwhelm is a better system: a new app, an earlier alarm, time blocking, a fresh list. But overwhelm is almost never a systems problem — it is a volume problem. Optimising the way you carry twenty things does not change the fact that twenty is too many. Worse, productivity advice quietly reframes an unsustainable load as a personal failing, so now you are drowning and also behind on your own improvement plan. The other bad advice is "take a break". A weekend off with the same list waiting on Monday just compresses the same work into fewer days. What actually reduces overwhelm is subtraction and support, and both of those are harder than downloading another planner.`,
      },
      {
        h: "What genuinely helps",
        p: `Get it out of your head and onto paper first — overwhelm is amplified enormously by trying to hold everything in working memory at the same time. Then sort ruthlessly into three piles: what actually matters this week, what can slip without real consequence, and what belongs to someone else. Pick one thing and finish it, however small, because completion is what tells your nervous system the tide is going out. Protect one genuinely empty hour, not for chores. Practise a plain sentence for declining — "I cannot take that on this month" needs no elaborate justification. And say the whole list out loud to another person, because hearing it usually reveals how much of it you were holding without ever agreeing to.`,
      },
      {
        h: "Why talking it through actually reduces the load",
        p: `Overwhelm shrinks when it is externalised. Saying the full list to a person who is not going to judge you, add to it, or immediately propose solutions lets you finally see its actual size, which is almost always smaller than it felt. LeanOn listeners include people who have carried their own version of too much — the founder phase, the caregiving year, the semester where everything landed in the same week — and they bring empathy rather than efficiency tips. They will not tell you to wake up at 5 AM. They will let you talk until the pile has a shape, and that alone is often what makes the next step visible. Fifteen honest minutes can do more than another weekend of trying to power through.`,
      },
    ],
    faqs: [
      {
        q: "I have too much to do to spend time talking. Is this not just more time lost?",
        a: `That is the exact logic that keeps overwhelm running. In practice, most of the day lost to overwhelm goes to stalling, re-prioritising and re-reading the same list, not to actual work. Fifteen minutes of saying it all out loud usually returns more usable hours than it costs, because you come out with an order instead of a pile. If fifteen feels impossible, the free first 5 minutes are a real option.`,
      },
      {
        q: "How do I say no to family obligations without a fight?",
        a: `Keep it short and do not over-explain, because every extra sentence invites negotiation. "I cannot come this weekend, I will call on Sunday" holds better than a paragraph of reasons. Offer one small alternative so it does not read as rejection. And expect discomfort rather than approval — the aim is a decision you can sustain, not one everyone applauds. If the guilt afterwards is the hard part, that is worth talking through with someone who is not in your family.`,
      },
      {
        q: "What does it cost to talk to someone here?",
        a: `The first 5 minutes are free. After that the listener's own rate applies, between ₹8 and ₹25 per minute, plus a flat ₹10 platform fee per paid session — so a 15-minute session starts around ₹160. There is no subscription and no minimum commitment, which matters when your budget is already stretched.`,
      },
      {
        q: "What if I just want to vent and not be given advice?",
        a: `Say exactly that at the start and the listener will follow it. Venting without being interrupted by solutions is one of the most common reasons people use LeanOn, and listeners are trained to hold space rather than to problem-solve. You are allowed to use your session purely to put things down.`,
      },
    ],
    relatedSupport: [
      "/support/student-stress",
      "/support/founder-burnout",
      "/support/overthinking",
      "/support/someone-to-talk-to",
    ],
  },

  {
    slug: "numb",
    emoji: "🫥",
    label: "Numb / Empty",
    h1: "Feeling numb or empty? Not feeling anything is still feeling something.",
    metaTitle: "Feeling Numb or Empty? You Are Not Broken | LeanOn",
    metaDescription:
      "Feeling numb, blank or emotionally empty? Talk anonymously to a LeanOn listener who has been through it. First 5 minutes free.",
    keywords:
      "feeling numb, emotionally numb, feeling empty inside, why do i feel nothing, no motivation feeling blank, emotional numbness india, someone to talk to",
    lead: `Numbness is harder to describe than sadness, which is partly why people carry it silently for so long. Things that used to matter register as beige. You function, you reply, you show up — and none of it reaches you. This is not you becoming a cold person. It is usually what a mind does after carrying too much for too long.`,
    sections: [
      {
        h: "What numbness actually is",
        p: `Numbness is not the absence of feeling so much as the volume being turned down on all of it, including the good ones. Music you loved sounds like background. Good news lands with a polite "nice". You watch yourself having conversations from slightly outside your own body. Days blur together because nothing is distinct enough to remember. People often describe going through the motions perfectly — work delivered on time, family messages answered — with a strange flatness underneath, and then guilt for not being grateful. It can come with a heavy body, long sleeps that do not restore anything, and a hollow feeling behind the sternum. If sadness is a weight, numbness is more like fog with the sound switched off.`,
      },
      {
        h: "Why the mind goes quiet like this",
        p: `Numbness usually arrives after something, not out of nowhere. It follows long stretches of stress with no recovery, grief that was never allowed a pause because there was a job to return to, a breakup you handled by staying busy, or years of keeping a lid on things because expressing them was not an option at home. In many Indian families feelings are managed rather than discussed — you are told to focus on studies, to not let it show, to think of what people will say. Do that long enough and the mechanism that suppresses hard feelings starts suppressing everything. It is protective in origin. It just outstays its usefulness, and then the flatness itself becomes the problem.`,
      },
      {
        h: "Why 'cheer up' and 'be grateful' do nothing",
        p: `Advice aimed at numbness usually misfires because it assumes the problem is your outlook. Gratitude lists, motivational reels and "count your blessings" all require the emotional circuit that is currently offline — you can read your list and feel exactly nothing, which then becomes proof that something is wrong with you. Chasing intensity does not work either: the new phone, the sudden trip, the aggressive gym phase all produce a brief spike and then a deeper flatness. And "you have everything, why are you like this" is perhaps the most damaging sentence, because it turns a symptom into a character flaw. Numbness does not lift by being argued with. It lifts slowly, usually through contact and small honest input.`,
      },
      {
        h: "What genuinely helps",
        p: `Aim for small sensation rather than big emotion. Cold water on the hands, a walk without headphones, food with an actual strong taste — physical input reaches you sooner than insight does. Lower the bar for a good day to something you can actually clear, like one shower and one message sent. Do a thing you used to like without demanding that it feel good; participation often comes back before enjoyment does. Write two lines a day, even if they are "felt nothing again" — the record matters more than the content. And talk to someone, because numbness thrives in isolation and starts to thaw around another person's attention. Be honest that if this has lasted for weeks and is affecting your ability to work, eat or sleep, it deserves a licensed professional.`,
      },
      {
        h: "When it is bigger than a conversation, and where to go",
        p: `LeanOn is peer emotional support. It is a real, human place to be heard, and it is not a substitute for professional mental health care. If the numbness has been constant for weeks, if you have stopped being able to do your normal daily life, if you find yourself feeling nothing about things that would once have frightened you, or if you are having any thoughts of harming yourself, please talk to a licensed mental health professional. India has two free, confidential helplines running 24/7 that anyone can call: NIMHANS at 080-46110007 and Tele-MANAS at 14416. Calling one of them is not an overreaction and it is not a permanent label. It is simply the right tool for that level of weight, and you deserve the right tool.`,
      },
    ],
    faqs: [
      {
        q: "Why do I feel nothing when my life is objectively fine?",
        a: `Numbness does not check your circumstances first. It is far more closely tied to how long you have been running without recovery than to whether things look good on paper. In fact people with stable jobs and supportive families often feel it more acutely, because there is no obvious reason to point at — which makes it harder to admit and easier to dismiss. Having a good life and feeling empty inside it are not contradictory, and one does not disqualify the other.`,
      },
      {
        q: "Is numbness the same as depression?",
        a: `LeanOn does not diagnose, and only a licensed professional can tell you what you are dealing with. What can be said honestly is that persistent emotional flatness is something professionals take seriously, and it is not something to wait out indefinitely. If it has lasted weeks, is stopping you from functioning, or comes with any thoughts of self-harm, please reach out to a qualified professional. You can also call NIMHANS on 080-46110007 or Tele-MANAS on 14416, free, any time of day or night.`,
      },
      {
        q: "What is the point of talking if I do not feel anything to say?",
        a: `Quite a lot, actually. Sessions that begin with "I have nothing to say, I just feel blank" often turn out to be the fullest ones, because numbness is usually a lid rather than an emptiness. A listener will not demand that you produce emotion. They will ask about the ordinary details of your week and let whatever is underneath come up at its own pace, and it frequently does.`,
      },
      {
        q: "How does LeanOn work, and what will it cost me?",
        a: `Choose a listener whose lived experience matches yours, and the first 5 minutes are free — no card, no commitment. Beyond that, listeners set their own rate between ₹8 and ₹25 per minute, and there is a flat ₹10 platform fee per paid session, so a 15-minute session starts around ₹160. It is anonymous, one session at a time, with nothing recurring.`,
      },
    ],
    relatedSupport: [
      "/support/grief",
      "/support/breakup",
      "/support/anonymous-support",
      "/support/someone-to-talk-to",
    ],
  },

  {
    slug: "sad",
    emoji: "💧",
    label: "Sad",
    h1: "Feeling sad today? You do not need a good enough reason.",
    metaTitle: "Feeling Sad Today? Talk to Someone Who Listens",
    metaDescription:
      "Feeling low or sad and cannot say why? Talk anonymously to a LeanOn listener who understands. Judgement-free, first 5 minutes free.",
    keywords:
      "feeling sad, feeling low today, why am i so sad, sadness without reason, low mood help india, someone to talk to when sad, emotional support india",
    lead: `Sadness does not always come with a headline. Some days it arrives with an obvious cause and some days it just settles in, and the second kind is often harder because you feel you have to justify it. You do not. Sadness is information, not a fault, and it does not need to earn its place before you are allowed to feel it.`,
    sections: [
      {
        h: "What sadness does to a day",
        p: `Sadness has a physical shape. There is heaviness in the limbs, a slowness that makes ordinary tasks feel like they are uphill, tightness in the throat, and a tiredness that sleep does not fix. Food is either uninteresting or oddly comforting in large amounts. Mentally, everything gets a grey filter: you re-read old messages, replay conversations, and the past looks better and the future looks smaller than either really is. Some people cry easily; others cannot cry at all and feel worse for it. Many describe going through a full workday competently while carrying a stone in the chest, then closing the laptop and having nothing left. None of that means you are handling it badly. That is simply what sadness costs to carry.`,
      },
      {
        h: "Why sadness sometimes has no obvious cause",
        p: `Sometimes there is a clear reason — a loss, a breakup, a rejection, a distance that grew. But sadness also accumulates. A year of small disappointments, a friendship that quietly ended, a version of your life you had pictured and had to let go of, the slow ache of being far from home while everyone assumes you are settled. In many Indian families, sadness is not really given room; you are told to be strong, to think of what others have endured, to not let it show before a function. So it goes underground and surfaces later without a label attached. If you cannot point to a cause, it usually means several small things have been carried for a long time, not that you are being irrational.`,
      },
      {
        h: "Why the standard responses do not land",
        p: `"Others have it worse" is meant to give perspective and instead delivers shame — pain is not a queue where you have to wait your turn. "Be positive" asks you to skip the feeling rather than move through it, which reliably makes it last longer. Constant distraction works right up until you are alone, and then the sadness collects interest. And the reflex to fix it — a trip, a new plan, someone suggesting marriage or a job change as a cure — treats sadness as a malfunction to be resolved instead of an experience to be felt. The most helpful response is usually the least dramatic one: someone sitting with you in it without needing you to be better by the end of the conversation.`,
      },
      {
        h: "What genuinely helps",
        p: `Give it room instead of a deadline. Let yourself feel it for a defined stretch rather than pushing it away all day and having it arrive at midnight. Keep the basic scaffolding intact — food at roughly regular times, water, some daylight, a rough sleep window — because sadness gets much heavier on an empty and exhausted body. Lower your expectations for the day honestly rather than failing at a normal one. Move a little, even ten minutes outside. Write down what happened without editing it into something acceptable. And tell one person the unpolished version, because sadness that is witnessed by another human moves differently from sadness carried alone, no matter how strong you are.`,
      },
      {
        h: "When sadness needs more than a conversation",
        p: `Sadness is a normal human response and most of it passes with time, care, and being heard. But there is a line worth knowing. If low mood has been constant for weeks rather than days, if you have stopped being able to work, eat, or sleep normally, if you have lost interest in everything you once cared about, or if you are having any thoughts of harming yourself, that deserves a licensed mental health professional — not because you are broken, but because that is the level of support the situation warrants. India has two free helplines available 24/7 to anyone: NIMHANS at 080-46110007 and Tele-MANAS at 14416. LeanOn is peer emotional support and sits alongside professional care, never in place of it.`,
      },
    ],
    faqs: [
      {
        q: "Is it normal to feel sad without knowing why?",
        a: `Yes, and it is extremely common. Sadness often lags behind its causes by weeks or months, especially if you were too busy to feel it at the time. It can also be the accumulated weight of many small things, none of which felt significant enough to mention. Not having a headline does not make the feeling less real, and you do not owe anyone an explanation before you are allowed to feel low.`,
      },
      {
        q: "How do I know if this is more than ordinary sadness?",
        a: `LeanOn cannot diagnose anything, and only a licensed professional can. The signals generally worth acting on are duration and function: sadness lasting weeks without lifting, and a real drop in your ability to work, eat, sleep or care about things you used to. If either applies — or if there are any thoughts of self-harm — please speak to a qualified professional. You can also call NIMHANS on 080-46110007 or Tele-MANAS on 14416 free, at any hour.`,
      },
      {
        q: "I do not want advice. Can I just talk?",
        a: `Yes. Tell the listener at the start that you want to be heard rather than advised, and they will hold to it. Most LeanOn listeners will not offer solutions unless you ask, because being met with empathy rather than instructions is usually what actually helps when you are sad.`,
      },
      {
        q: "What does a session cost if I want to talk today?",
        a: `The first 5 minutes are free, which is enough to see whether the listener feels right. After that they charge their own rate between ₹8 and ₹25 per minute, plus a flat ₹10 platform fee per paid session — so a 15-minute session starts around ₹160. You pay per session, nothing recurring, and you can stop whenever you want.`,
      },
    ],
    relatedSupport: [
      "/support/grief",
      "/support/breakup",
      "/support/loneliness",
      "/support/someone-to-talk-to",
    ],
  },

  {
    slug: "burnt-out",
    emoji: "🔥",
    label: "Burnt Out",
    h1: "Feeling burnt out? This is not laziness and you are not exaggerating.",
    metaTitle: "Feeling Burnt Out? Talk to Someone Who Gets It",
    metaDescription:
      "Exhausted, cynical and running on empty? Talk anonymously to a LeanOn listener who has burnt out too. First 5 minutes free.",
    keywords:
      "feeling burnt out, burnout symptoms, exhausted from work, work burnout india, cannot work anymore tired, founder burnout, someone to talk to about work stress",
    lead: `Burnout is not a bad week. It is what happens when high demand meets low recovery for months, until the work you once cared about produces nothing but dread. The tell is not tiredness — it is the cynicism and the sense that nothing you do makes a difference any more.`,
    sections: [
      {
        h: "How burnout actually shows up",
        p: `Three things tend to arrive together. Exhaustion that sleep does not fix, so you wake up already depleted. Cynicism, where work you once found meaningful now feels pointless and colleagues become irritating in ways they never used to be. And a sense of ineffectiveness — the feeling that however much you do, it does not count. Physically it can look like frequent minor illness, headaches, a tight chest before Monday, disrupted sleep, and a stomach that reacts to your calendar. Behaviourally you start avoiding: leaving messages unread, delaying easy tasks, dreading meetings that used to be fine. Sunday evening becomes the worst part of the week. And most people push through all of it, because stopping feels less possible than continuing.`,
      },
      {
        h: "Why it builds so quietly here",
        p: `Burnout thrives where boundaries are thin and identity is welded to work. In much of Indian professional life, availability is the proof of commitment — messages at eleven at night, weekend calls, a team spread across time zones so there is always someone awake wanting something. If you are the first in your family to have this kind of career, there is an extra weight: rest feels like ingratitude when people sacrificed so you could be here. Founders and early employees carry it differently, where every hour off feels like a risk to the company. Add relentless comparison with peers who appear to be scaling effortlessly, and the natural response to exhaustion becomes working harder, which is exactly the accelerant.`,
      },
      {
        h: "Why a vacation does not fix it",
        p: `Leave helps briefly and then the effect evaporates within days of returning, because burnout is caused by the conditions you return to, not by an accumulated sleep debt. The same is true of most self-care advice pointed at it: a morning routine, a meditation app and better hydration are fine, but they ask you to recover faster rather than to reduce the load. There is also a quiet insult in a lot of burnout advice, since it locates the problem in your resilience instead of in a workload that no amount of resilience would survive. And "just quit" is not advice most people can act on when there are loans, family dependents, or a visa attached to the job.`,
      },
      {
        h: "What genuinely helps",
        p: `Start by naming it accurately to yourself, because months of calling burnout laziness does real damage to how you see yourself. Then look for anything reclaimable rather than a total escape: one meeting removed, one recurring task handed over, a hard stop on one evening a week that you actually defend. Rebuild the smallest possible recovery habit and make it non-negotiable — a walk after work, no screens for the last half hour of the night. Reconnect with something you do that has no output attached to it. And say it out loud to somebody outside your workplace, because burnout gets much worse in silence, and inside your company the honest version is rarely safe to say.`,
      },
      {
        h: "Why talking to someone who has burnt out helps",
        p: `The people around you are usually the wrong audience for this. Your manager has an interest in the answer, your teammates are in the same fire, and family may hear "I am exhausted" as "I might lose the job", which turns your admission into their anxiety. LeanOn listeners include people who have been through their own burnout — the startup year, the consulting grind, the job they could not leave — and they can hear the whole thing without cost or consequence to you. They bring empathy and recognition rather than performance advice, and they will not tell you to be more resilient. Being able to say "I cannot do this any more" to someone who knows what that sentence costs is often the first real relief in months.`,
      },
    ],
    faqs: [
      {
        q: "How is burnout different from being tired?",
        a: `Tiredness responds to rest; burnout does not. A tired person feels better after a good weekend, while a burnt out person wakes up on Monday just as empty. The other distinguishing feature is cynicism — losing interest in work that once mattered and feeling detached from colleagues and outcomes. If a week off changes nothing and Sunday evenings have become the worst hours of your week, it is worth taking seriously.`,
      },
      {
        q: "I cannot quit my job. Is there any point in talking about it?",
        a: `Yes, and most people who talk about burnout are not in a position to quit. The value is in getting the load out of your head, seeing which parts are actually changeable, and stopping the self-blame that makes everything heavier. People frequently leave a session with one specific boundary they are willing to hold, which is far more useful than an escape plan they cannot execute.`,
      },
      {
        q: "What does it cost and how quickly can I talk to someone?",
        a: `You can usually start within minutes — listeners are online through evenings and late nights, which is when most burnt out people finally have a free hour. The first 5 minutes are free. After that the listener sets their own rate between ₹8 and ₹25 per minute, plus a flat ₹10 platform fee per paid session, so a 15-minute session starts around ₹160.`,
      },
      {
        q: "Will my employer or anyone else ever know?",
        a: `No. LeanOn is anonymous — you use a display name, your number is never shared with the listener, and nothing is reported to anyone. There is no connection to your workplace of any kind. That is exactly why many people use it to say things about work they could never say inside the company.`,
      },
    ],
    relatedSupport: [
      "/support/founder-burnout",
      "/support/career-confusion",
      "/support/imposter-syndrome",
      "/support/job-loss",
    ],
  },

  {
    slug: "stuck",
    emoji: "🌫️",
    label: "Stuck",
    h1: "Feeling stuck? Standing still is not the same as going nowhere.",
    metaTitle: "Feeling Stuck in Life? Talk It Through | LeanOn",
    metaDescription:
      "Stuck in a job, a city or a decision you cannot make? Talk to a LeanOn listener who has been there. Anonymous, first 5 minutes free.",
    keywords:
      "feeling stuck in life, stuck in a job, cannot make a decision, no direction in life, career confusion india, feeling left behind, someone to talk to",
    lead: `Feeling stuck is the sense that time is passing while nothing is moving — the same job, the same city, the same conversation with yourself every few months. It is not a lack of ambition. It usually means you are standing between options where every path costs something you are not ready to pay.`,
    sections: [
      {
        h: "What being stuck feels like day to day",
        p: `Stuckness is quieter than crisis, which is why it goes on for years. The days are fine and interchangeable. You are competent at a job you have stopped learning anything from. You open the same job sites, save the same courses, start the same document about what you actually want, and close it. There is a low-grade irritability, a habit of comparing yourself to people who seem to be moving, and a specific dread around the question "so what next?" at family gatherings. Physically it can look like restlessness with no outlet and difficulty sleeping without an obvious worry to point at. The hardest part is that nothing is wrong enough to force a change, so the situation quietly renews itself.`,
      },
      {
        h: "Why so many people get stuck here",
        p: `Many careers in India were chosen at seventeen, from a shortlist someone else drew up, and then built on for a decade. Walking away later means unpicking not just a job but a family's plan and a considerable amount of pride. There are real constraints too — loans, dependent parents, a visa, a salary the whole household relies on. Then there is the audience: cousins doing well, batchmates announcing moves, and relatives who treat your life as a public scoreboard, so any experiment risks being seen as a failure in front of everyone. When "log kya kahenge" is a live factor and the safe option is genuinely comfortable, staying still is the rational choice right up until it starts to hurt.`,
      },
      {
        h: "Why 'just take the leap' is useless advice",
        p: `Motivational advice assumes the barrier is courage. It usually is not — it is information and consequence. You are not frozen because you lack nerve, you are frozen because you genuinely do not know which option is better and both have real costs attached. Telling someone with a home loan and an ageing parent to follow their passion is not brave, it is careless. The other failure is the "find your purpose" framing, which sets an impossible bar: you must locate one true calling before you are permitted to move at all. That turns every small experiment into a referendum on your entire life, which is precisely why nobody starts. Clarity is far more often a result of movement than a prerequisite for it.`,
      },
      {
        h: "What genuinely helps",
        p: `Trade the big decision for a small test. You cannot think your way to knowing whether a different field suits you, but a weekend project, one honest conversation with someone doing that job, or a small freelance piece will tell you more in a month than a year of deliberating. Separate what you actually want from what you were handed, on paper, because the two get tangled early. Write down the real constraints as numbers — how many months of runway, whose income depends on you — since vague fear is heavier than specific fact. Set a review date instead of an ultimatum. And notice what you are already good at that you have discounted because it came easily to you.`,
      },
      {
        h: "Why talking it out unsticks things",
        p: `Stuckness is largely a private loop that never gets aired, so it runs the same three arguments forever. Saying it aloud to someone with no stake in your answer changes that immediately — your family wants the safe option, your friends are inside the same industry, and your colleagues cannot be told at all. LeanOn listeners include people who have sat in the same fog: the career switchers, the ones who left a stable job at thirty, the ones who chose to stay and made peace with it. They listen with empathy instead of steering you toward the answer that would make them comfortable, and hearing your own reasoning out loud is usually what reveals which option you already prefer.`,
      },
    ],
    faqs: [
      {
        q: "How do I know if I should actually change something or just wait it out?",
        a: `A rough test: waiting is right when you are learning, building something, or sitting out a temporary phase with a visible end. Stuckness is different — it repeats, it has no end date, and you can no longer say what would be different in a year. If you have had exactly the same internal debate for more than a year with nothing changing, that is generally a sign to run a small experiment rather than to wait longer.`,
      },
      {
        q: "Everyone around me seems to be moving ahead. Is something wrong with me?",
        a: `You are comparing your daily internal experience with other people's edited announcements. Nobody posts the eighteen quiet months before the new job. Careers move in steps, not slopes, and flat stretches are normal even for people whose paths look smooth from outside. Being behind an imagined schedule is not the same as being behind in life.`,
      },
      {
        q: "Can a listener tell me what career I should choose?",
        a: `No, and any service that promises to would be worth distrusting. LeanOn listeners are peers, not career advisors — what they offer is a space to think out loud without judgement, and the perspective of someone who has faced a similar fork. Most people find that the decision becomes clearer once they have heard themselves argue both sides to a person who is genuinely listening.`,
      },
      {
        q: "How does it work and what does it cost?",
        a: `Pick a listener whose background fits what you are wrestling with, and the first 5 minutes are free. After that, listeners charge their own rate between ₹8 and ₹25 per minute, plus a flat ₹10 platform fee per paid session — a 15-minute session starts around ₹160. No packages, no subscription, and it stays anonymous.`,
      },
    ],
    relatedSupport: [
      "/support/career-confusion",
      "/support/imposter-syndrome",
      "/support/overthinking",
      "/support/job-loss",
    ],
  },

  {
    slug: "unable-to-sleep",
    emoji: "🌚",
    label: "Can't Sleep",
    h1: "Cannot sleep? Your mind waited until it was quiet to speak.",
    metaTitle: "Cannot Sleep? Someone to Talk To at 3 AM | LeanOn",
    metaDescription:
      "Awake at 3 AM with a mind that will not stop? Talk to a LeanOn listener who is online late. Anonymous, first 5 minutes free.",
    keywords:
      "cannot sleep, awake at 3am, overthinking at night, sleepless nights anxiety, insomnia stress india, someone to talk to at night, racing thoughts before sleep",
    lead: `There is a particular loneliness to being awake when everyone else is not. The thoughts you outran all day finally catch up, the house is silent, and every worry sounds louder and more permanent than it will at nine in the morning. If you are reading this at an unreasonable hour, you are not the only one.`,
    sections: [
      {
        h: "Why the mind gets loud exactly when the lights go off",
        p: `All day there is input — work, traffic, notifications, other people — and it occupies the part of your mind that would otherwise be processing. When that input stops, everything queued up arrives at once. It is not that the night creates the worries; it is that the night is the first moment with nothing to drown them out. Your body is also in a lower-arousal state late at night, which makes emotional regulation genuinely harder, so the same thought that felt manageable at noon feels like a verdict at two. Add a phone within arm's reach, and the scroll that was meant to distract keeps the mind switched on. This is why 3 AM thinking is so reliably catastrophic and so rarely accurate.`,
      },
      {
        h: "What tends to be underneath it",
        p: `Sleeplessness usually has a passenger. Anxiety about work you cannot control, replayed conversations, money worries, a decision waiting to be made, or grief that gets no room during daylight hours. In shared homes and joint families, the night may be the only time you are actually alone with yourself, so it becomes the only slot in which the feelings can appear. For people living away from family, nights are when the distance is loudest — everyone at home is asleep, the day here is over, and there is nobody to call. Students carry results and expectation into the dark; new parents and caregivers lie awake listening. The exhaustion then feeds the anxiety the next night, and the loop closes.`,
      },
      {
        h: "Why sleep hygiene advice often fails",
        p: `The standard list — no screens, no caffeine, fixed bedtime, cool dark room — is genuinely sound, and it addresses conditions rather than causes. If you are awake because of an unresolved fear, a blackout curtain will not touch it. Worse, sleep advice creates its own pressure: you lie there monitoring whether you are falling asleep correctly, and that monitoring is itself arousing, so trying harder to sleep reliably keeps you awake. Checking the clock to calculate remaining hours does the same. And the most common self-remedy, scrolling until you are tired enough, provides bright light and constant stimulation at exactly the wrong hour. The fixes are not wrong. They are simply aimed at the room when the problem is in the head.`,
      },
      {
        h: "What genuinely helps at 3 AM",
        p: `Stop trying to sleep, because effort is the opposite of what sleep needs. If you have been lying there for more than twenty minutes or so, get up, keep the lights low, and do something boring in another room until you feel heavy again — the bed should stay associated with sleeping rather than with struggling. Turn the clock away so you cannot keep doing arithmetic about lost hours. Get the loop out of your head onto paper, in messy handwriting, so your mind stops rehearsing it to avoid forgetting. Lengthen your exhale. Take the phone out of reach. And if what is keeping you awake is something you have not said to anyone, saying it to a person is often the thing that finally lets the night end.`,
      },
      {
        h: "When lost sleep needs professional help",
        p: `Occasional bad nights are part of being human. Sustained sleeplessness is not something to just push through. If you have been unable to sleep for weeks, if daytime functioning is going — driving, working, staying safe — or if the nights come with hopelessness or any thoughts of harming yourself, please speak to a licensed professional; poor sleep and low mood feed each other and both are treatable by the right people. Two free helplines are available across India at any hour, including the ones you are awake for: NIMHANS at 080-46110007 and Tele-MANAS at 14416. LeanOn listeners are peers who will keep you company and hear you out at 3 AM, and that is a real thing, but it is support rather than medical care.`,
      },
    ],
    faqs: [
      {
        q: "Is anyone actually available to talk in the middle of the night?",
        a: `Yes. Late nights are one of LeanOn's busiest windows, because that is when people finally have both the time and the need. Many listeners deliberately keep late hours for exactly this reason. If you are awake at 2 or 3 AM and the silence is the problem, there is usually someone there.`,
      },
      {
        q: "Will talking about it not just wake me up more?",
        a: `Usually the opposite. What keeps most people awake is a loop running with nowhere to go, and saying it out loud to a person tends to close the loop rather than energise it. Plenty of seekers finish a late-night session and fall asleep shortly after — not because the problem was solved, but because it stopped needing to be rehearsed all night.`,
      },
      {
        q: "How much does a late-night session cost?",
        a: `The same as any other time — there is no night surcharge. The first 5 minutes are free, and after that the listener's own rate applies, between ₹8 and ₹25 per minute, plus a flat ₹10 platform fee per paid session. A 15-minute session starts around ₹160. For a lot of people fifteen minutes at 3 AM is enough to stop the spiral.`,
      },
      {
        q: "When should I stop managing this myself and see a professional?",
        a: `If sleeplessness has run for several weeks, if it is affecting your ability to work or stay safe during the day, or if the nights come with hopelessness or any thoughts of self-harm, that is the point to involve a licensed professional rather than keep coping alone. You can also call NIMHANS on 080-46110007 or Tele-MANAS on 14416 — both are free, confidential and open 24/7. LeanOn is peer emotional support and sits alongside that kind of care, not in place of it.`,
      },
    ],
    relatedSupport: [
      "/support/overthinking",
      "/support/anxiety",
      "/support/loneliness",
      "/support/someone-to-talk-to",
    ],
  },
]

export function getFeeling(slug: string): Feeling | undefined {
  return FEELINGS.find((f) => f.slug === slug)
}
