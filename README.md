# badge-warrior

## Overall Idea

Make an experience encouraging people to see how futile trying is

### How does badge warrior do this?
Badge warrior is a page where users are awarded badges. However, the badges mean nothing. [Possible idea: there is a badge that a badge warrior gets for not doing anything. These are actual points. All other badges are just badges with no points associated with them. If a user ends up with a score at all the only score they get is the score associated with the 'do nothing badges'. An alternative idea would be that the 'do nothing badges' are multipliers or exponents so that any individual's score is increased by the 'do nothing badges'. This makes people competitive to use them but also somewhat curious about 'doing nothing'.] The only way for a user to 'win' badge warrior is to not interact with badge warrior at all.

Essentially the idea is to incentivize users to 'catch them all' while awarding them, yet, having there be no actual 'win'. In order to do this successfully there must be communicated to the user that, while they may be collecting a bunch of badges, they are still not actually winning. Which is really a question of how are we going about making a difference between the two: incentive and win.

### Possible ideas:

#### Incentives:

1. badges
2. badge counter
3. leaderboard
* possible live leaderboard with active updates as to who is ahead in real time
4. [sketchy idea] !@#0.01 grandprize to the first person to win (!@# is a fake currency created by us that has no value)
* the grandprize can be added to by a % of donation to the game (%50 of donation goes to grand prize)


#### Win:

1. [sketchy idea] Grandprize of !@# is awarded
2. A global message is sent to all badge warrior users that XXX has won
3. The grandprize is given out
4. Site status changes
* Site could shut down
* Site could be reset erasing all leaderboard positions
* Site could remain the same but lockout winning user (difficult for user not to just make another account and play again)
* Site resets grandprize
* Winning user gets to write the message which is all the URL becomes after site shuts down
* Site is just a black void

#### The Problem with and the importance of the site shutting down:

I think the site shutting down and becoming a black void are good only because if something like this doesn't happen then we don't actually lose anything. The whole idea is meaninglessness so if we didn't let it just die when it was done we'd have ironically made something important (to us) while wanting to do something meaningless.

The problem is with the site just shutting down is that we want to have everyone who is being led by incentives to have a moment of realization where all of their efforts don't/didn't mean anything. With the model of having the site shut down once someone has won then at most we just have 1 person realizing that all effort was meaningless. I'd like to come up with an idea that makes it so each user has that experience, but then that runs up against another wall, the want to have badge warrior be finite. I'm not sure how to have it both ways.

### What does Badge Warrior look like?

**Badge warrior looks just like a blank page. Depending on the user interaction with the page there are different 'paths' which end up changing the state of the page:**

1. User does nothing
- after x amount of time the page displays a message of the user winning and the site shuts down
2. User interacts (e.g. clicks, drags, mouses over, types)
- a partition opens on the top of the page where badges are represented visually
- a timer is generated, placed in the partition, begins counting down from some set value
- a badge counter increases with # of badges gained
- a leaderboard shows where the user is currently ranked
- after x amount of time (indicated by the timer) session ends
- user is asked if they want to try again
** users could end up gaining more time from 'do nothing badges' **

### How does Badge Warrior work?

**Badge Warrior can be interacted with in several different Actions: moving the mouse, clicking, dragging, and typing. Each kind of interaction makes badges using a Badge Generator.**

#### Badge Generator:

*-- the logic for the Badge Generator is a bit iffy in my mind, but I'll try and take a stab at how I think it could work --*

This is a function which has two inputs: the Action (i.e. clicking, dragging, typing) and an ID associated with this action (i.e. an ID of a div or a string made by typing). The Action input along with 4? other pseudo-randomly generated numbers (using timestamp or method) are used to construct the attributes of the badge.

##### Badge attributes:

Each attribute is kept in a database and accessed randomly to construct a badge.

##### Badge attribute: Name

The Action is used to contribute to naming the badge. For instance, if a user clicks the Badge Generator would use this action to access a database of 'click' related words (e.g. 'clicker', 'tapper', 'morse-something', etc.) which would then be used to create the badge name. Additionaly generic adjectives would be used to add on to the 'Action-word' to help build the name. These adjectives could be independent of the action and simply be added on via a generic adjective database (e.g. 'awesome', 'rad', 'mediocre' + Action-word).

*NOTE: Possible configurations of a badge: [(*v*)]  [] = border  () = field  *v* = symbol(s)*

##### Badge attribute attribute: Color

Each of the attributes can have a color, possibly even the name. It might be good to go with a sort of crayola pallete of 12 or 8 colors just to keep things looking more distinct. 256 colors would add more variety but the difference between 234 and 235 isn't very easily perceptible.

##### Badge attribute: Border

A border is sort of like the container for the rest of the badge. It's the shape of it, the outline. Examples of a border would be a ribbon, star, coin, castle, flame, etc. One of these borders would be randomly selected by the Badge Generator.

##### Badge attribute: Field

A field is the interior of the Border. It could have a texture to it, but I'm imagining these badges to be pretty small so I'd think all it would have is some kind of color associated with it.

##### Badge attribute: Symbol

Symbols would be what reside in the field of the badge. There can be more than one type of symbol per badge. Borders and symbols could be the same with just a matter of scale affecting them, for instance, a badge could consist of: Border = star Field = gold Symbol = star x 2 + flame x 1. Recycling the borders as symbols could make things easier but it could also make things a bit staler.

- Symbols have an additional attribute of Number, so that we could have three stars like in the above example 'Symbol = star x 3' 

*NOTE: A tiered system might go against the whole idea of things not having meaning, because the tiered system would be pretty structured and make badges that looked and were titled more and more 'cool' as the tiers increased.*

##### Tiered Badges:

There are two kinds of tiered badges: event and attribute/category.

##### Attribute/Category:

Tiers of different attributes could be 'unlocked' by the user passing a threshold of a specific action. 

##### Event:

Example: User clicks 20 times. On the 20th time a new badge is generated specific to the 20th click and has a special name/title associated with it such as 'OCD', 'Addict', 'Champ', etc. This could be handled by something called a Threshold Tracker which tracks and filters ID/Actions sent to it. 

    Threshold Tracker:

Threshold Tracker would act kind of like a screen between user inputs and the badge generator. It could track if an ID/Action was unique, and if it was, kick it off to the Badge Generator with the necessary information to make the badge. A non-unique badge, for example, the second time someone clicked, could still be generated though these would act as something like a tier 0 badge. These tier 0 badges associated with an action (in this case clicking) would be tracked and when they crossed some previously established threshold (such as 20 clicks) then it would activate the Badge Generator with the added info of a threshold having been met. This added information would go toward generating badges which had 'higher' tiers.

*NOTE: Random seed for each session? Seed changes thresholds, rewards, etc. Gives more unique play for each person.*

##### Mouse Badges:

The way a badge is generated using the mouse, that is, moving it, clicking, dragging it, is handled by unique `blocks` of space which occupy the page as a grid. As a block is moved over, clicked on, or dragged through, the individual `block` sends its unique ID along with the action (ID/Action) of the user to the Badge Generator (or Threshold Tracker with the tiered system). 

##### Typing Badges:

The way badges are generated using the keyboard could happen in two or more ways:

1. Every keystroke registered is sent to the Badge Generator 


**-------------------everything beneath this line is a rougher draft ideas------------------**

The user with the most amount of badges is tracked on a leaderboard (possibly live?). If any user does absolutely nothing for a set amount of time the entire site shuts down or is replaced with something simple as someone beat badge warrior. (e.g. titled icons) for almost anything they do, such as moving their mouse over any part of the page, typing anything, clicking on anything, dragging their mouse around, etc. The users are also awarded badges for things they don't strictly do, such as having stayed on the page for a certain amount of time, having done nothing for a certain amount of time, having gotten a badge (e.g. recieving a badge for having recieved a badge).

These badges are accounted for in a few different ways: they are visually represented when they are generated, they are visually stored at the top of the page, they are tabulated by a badge counter.

Potentially there will be leaderboards where people will be competing with one another in order to

##### User window
The user window is what the page in its entirety is called. This is where a user ends up when connecting to the badge warrior url. This window is divided into two general parts:

1. The Arena
The Arena is where the user may interact with the page. This area is divided into many different equally sized 'Blocks'.

##### Blocks
Blocks are areas of a consistently defined size with unique ids. As a user interacts with these blocks (i.e. mouseover, click, drag) a badge is potentially generated. The generated badge is stored visually on the 'refridgerator'.

2. The Refridgerator
The Refridgerator is where all the badges are represented to the user visually. This is partitioned off from The Arena the moment the user interacts with the User Window. This would possibly be about a 5th of the top of the entire page.
