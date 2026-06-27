---
title: "Defining a Robot"
description: "A necessary primer before everything else"

tags:
  - Robotics
  - Ethics

date: 2026-06-20
---
I was originally going to have my first writing on this site be about robotics ethics, and giving a brief overview as to issues that most piqued my interest. However, I quickly felt the need to defend "robotics ethics" (or "roboethics") as a distinct field, as oppsoed to classifying it all as "AI ethics" or perhaps "technology ethics" ("tech ethics"). Certainly, all these things have a web of overlaps and differences. Let's talk about the comparison points between these three big ideas at length: What is a robot? How is it different from other technologies? How does a robot relate to AI? We'll talk about all of this roughly through a lens of moral questions. Once we have some ideas down, then we can ask our moral questions about robots with a shared picture in mind.

## What is a Robot?
Since we're here to discuss robots, we'll first settle what is essential to a robot before meshing with other ideas. The word "robot" originally comes from Old Slavic *rabu*, meaning "slave," and the common conception of a robot certainly involves some sense of doing, acting, and behaving in the real world. Still, robots are obviously diverse: the automated home vacuum-cleaner Roomba is a robot, Boston Dynamics' [Spot](https://bostondynamics.com/products/spot/) is a robot, industrial manufacturing arms are robots. But what about randomly vibrating [HEXBUGS?](https://www.hexbug.com/) A room-sized 3D printer? We usually think of robots as being autonomous and able to do things on their own, yet teleoperated, remote-controlled robots are quite common for medical use (and fit the word's etymology far better) The lines are not exactly clear, but I would like to draw one: I believe that typical mix of "physicalness" and "behaving" does introduce questions to robotics ethics and practice that are distinct from pure, often digitally-constrained AI.

Let's define a "robot" as a __constructed device designed to accomplish a task using physical means, with the ability to sense and react to its current state, and usually able to act without direct human action__. This is certainly not exhaustive nor complete, so here are brief examples and some discussion for relevant categories:

| Robot     | Maybe Robot?| Not Robot|
| ----------- | ----------- |-----------
| Remote Surgery Platform | Heavily Bioengineered Cell <sup>1</sup> | 1995 Honda Accord
| Quadcopter Drone   | Smart Home System <sup>2</sup>     | Digital Thermometer 
| [Unitree G1 Humanoid](https://shop.unitree.com/products/unitree-g1?srsltid=AfmBOor9DkxCzrXud2zCGCnc0ysXMPK65hkRxxY2qpEcXLM1ttKbs-Q_) | Missile <sup>3</sup> | ChatGPT <sup>4</sup>

<small><sup>1</sup> This might depend on how "constructed" versus "natural" a bioengineered cell is: it's notable how modern technology blurs this line, especially with cybernetic implants. <br>
<sup>2</sup> I'd argue this depends on how much the smart home interacts with its environment. A wall readout that sets cooking timers barely interacts with the physical world, compared to a network of cooking devices that automatically calibrate themselves for cooking purposes. There could also be many robots at play in one system like this - a robotic toaster networked with a robot fridge, networked with a robot trash can, etc. <br>
<sup>3</sup> Perhaps this classification depends on how much sensor integration is used by the missile <br>
<sup>4</sup> The most complex classification - for our purposes, we won't consider purely "digital AI" as robots, since digital AI itself does not have the ability to do physical actions in the real world. One could easily imagine digital AI giving guidance to a robot body fitted with motors and sensors, but that extra component of real-world interaction is not INHERENT to a digital AI. </small> 

As always, there are plenty of complexities to this definition worth mentioning. First and foremost, it's very tricky to nail down what we mean by physical means. A clever opponent could argue a purely digital AI, like ChatGPT, still interacts with the world in physical ways: it flips real transistors, heats up real wires, lights up a real screen creating real light, perhaps edit files on a real computer and manipulates real data. Still, I think most of us accept there is some intuitive boundary between a digital and physical agent; affecting files in your computer is manipulating a different kind of object than moving an apple on a desk. Perhaps we'll explore the digital/physical boundary some other day.

Secondly, one could challenge we call lots of things "robots" that don't really do much sensing and are instead fully dependent on human operators. For instance, a remote control spider (take this [HEXBUG version](https://www.hexbug.com/hexbug-spider.html)) would probably be called a robot spider (indeed, the page listing claims its filled with "robot intelligence") yet has no autonomy and sensing of its actual surroundings. For this category of things, I assert it's honestly not that important if we consider this a robot or not. As we'll discuss in the following sections, robots like this don't really raise any new ethical questions - perhaps the HEXBUG spider may be a robot by name, but it's not a particularly interesting one. There's not tricky ethical questions raised by the spider's autonomy since it doesn't have any.


## Robots as Technology

Obviously, robots are technological. Any robot that exists is certainly a technology, assuming "technology" vaguely refers to any kind of non-naturally-occurring object (the [SEP](https://plato.stanford.edu/entries/technology/) write-up on technology freqeuently uses the word "artifact" to get this sense across). Plenty of questions that come up in robot ethics are not unique to the discipline, and are really inherinted from technology and the ethics of technology, assuming "ethics of technology" refers to the ethical questions all technologies must answer. For instance, asking "should we build robot A if robot A will take over 100,000 jobs?" is not that different from asking "should we build the grain thresher if it puts 10,000 farmers out of business?" Now, the *scale* and *versitility* of robots does put this question in a new light; it seems that, given enough time, new robots put *any* human endeavor at risk of being replaced, while technology has historically been limited to improving rather mundane, repetitive tasks that can be made more efficient without any sort of sensing or processing (consider Eli Whitney's [Cotton Gin](https://en.wikipedia.org/wiki/Cotton_gin)). 

Some overlaps between technology ethics and roboethics is that of liability: <br>
  *If a piece of technology kills a worker, whose legal fault is it?* <br>
  psychological effect on humans: <br>
  *Should we make technology X if we think X is malformative to human behavior?*<br>
 and cruelness of a technology itself: <br>
 *Is this technology so destructive that it should never be built?*<br>

 One can easily imagine robot-style questions for these topics.

Questions concerning *robots as technology* are certainly roboethics, and essential around robotics public policy (robopolitics?). It is much more pressing, at time of writing, to consider the societal, psychological, violent effects on robots on humans than considering "distinct" questions about a robot's consciousness, agency, or moral status. But we should recognize such questions are not really unique to robots in themselves. All sorts of technologies have to answer questions about liability, social impact, and so on.

What makes robots a particularly interesting *kind* of technology is that autonomy and human-like ability to affect the real world. I believe this is where new ethical questions arise, where the robot as an agent itself must be considered. In later articles we'll discuss such questions!
What makes robots a particularly interesting *kind* of technology is that autonomy and human-ish ability to interact with physical objects, as per our working definition of robot. I believe this is where new/unique/distinct ethical questions arise, where the robot as an agent itself must be considered. In later articles we'll discuss such questions!

To cap all of this off, I have three points I want to make clear:
1. Technology ethics is best defined as ethical questions shared by all technology. Different technologies raise different questions, technology ethics is the overlap/intersection. Think of tech ethics as the "core questions" inherent to any specific technology.
2. All robots are technology, so all tech ethics questions can be applied to robotics. 
3. Not all technology is autonomous and physical like robots, so not all questions in tech ethics can be applied to roboethics; roboethics raises distinct questions from tech ethics itself.

For the mathematically minded, let $R$ represent the set of all robots, and $T$ represent the set of all possible technologies. Let $R'$ be the set of ethical questions raised by robots, while $T'$ is the set of ethical questions shared by all technologies. Thus,

$$ R \subsetneq T $$
$$ T' \subsetneq R' $$

## Robots and AI
It's no secret that artificial intelligence and robotics go hand in hand. I've often heard robotics described as a tool for bringing artificial intelligence into the real world, but I believe the two are slightly more standalone. My thesis is that while AI and robots share great overlap, there are lots of robots that don't really use any (substantive) form of AI. Of course, one must ask what we mean by AI. The [SEP](https://plato.stanford.edu/entries/artificial-intelligence/#WhatExacAI) lays out a "quartet of possibilities," ---

## Concluding Thoughts
Robots are distinct as a field of study. Even at the "dumbest" end, with minimal artifical intilligence, robots have the ability to automate away every part of human life through mass utilization in the real world - raising hard questions about the propagation and effects of such a powerful technology. The most intelligent robots challenge humans in their ability to take in physical information, think about it, and act accordingly - thus ending up with similar ethical questions about behavior humans do, and raising new ones about the entire scope of the moral community. In the future, we'll tackle these questions about robotics and hopefully find harmonious ways to live with our new best friends.