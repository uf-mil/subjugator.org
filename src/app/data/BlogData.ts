export interface BlogImage {
  src: string;
  alt: string;
  caption: string;
}

export interface BlogEntry {
  id?: string;
  title?: string;
  date: string;
  content: string | string[];
  images?: BlogImage[];
  featuredImage?: string;
  videoUrl?: string;
}

export interface BlogYearData {
  year: number;
  image: string;
  imageCaption: string;
  entries: BlogEntry[];
}

export const BLOG_DATA: Partial<Record<number, BlogYearData>> = {
  2017: {
    year: 2017,
    image: "/images/Subjugator-Logo2.png",
    imageCaption: "2017 SubjuGator Logo",
    entries: [
      {
        id: "early-pool-testing-2017",
        title: "Early Pool Testing",
        date: "Jan 25, 2017",
        content: "We had three pool testing days for SubjuGator on the first week of classes this semester. We are testing our new Teledyne BlueView P900-130 imaging sonar, as well as software platform updates to new versions of Ubuntu (16.04) and ROS (Kinetic).",
        images: [
          { src: "/images/Pool-Day-20170104-1b.jpg", alt: "Pool testing", caption: "Testing new imaging sonar and software updates" },
          { src: "/images/Pool-Day-20170105-1b.jpg", alt: "SubjuGator in the pool", caption: "" },
          { src: "/images/Pool-Day-20170105-3.jpg", alt: "Sonar data collection", caption: "" },
          { src: "/images/Pool-Day-20170105-4.jpg", alt: "Pool Testing", caption: "" },
          { src: "/images/Pool-Day-20170105-5.jpg", alt: "Pool Testing", caption: "" },
          { src: "/images/Pool-Day-20170105-6.jpg", alt: "Pool Testing", caption: "" },
          { src: "/images/Pool-Day-20170105-7.jpg", alt: "Pool Testing", caption: "" },
          { src: "/images/Pool-Day-20170105-8.jpg", alt: "Team members at the pool", caption: "" },
          { src: "/images/Pool-Day-20170105-9.jpg", alt: "Pool Testing", caption: "" },
          { src: "/images/Pool-Day-20170105-10.jpg", alt: "Pool Testing", caption: "" },
          { src: "/images/Pool-Day-20170105-2.jpg", alt: "Pool Testing", caption: "" },
          { src: "/images/Pool-Day-20170105-11.jpg", alt: "Pool Testing", caption: "" },
        ]
      },
      {
        id: "congratulations-to-navigator-ams-2017",
        title: "Congratulations to NaviGator AMS",
        date: "Jan 25, 2017",
        featuredImage: "/images/NaviGator_AMS_Team_2016.jpg",
        content: "Congratulations to UF, MIL, and CIMAR’s NaviGator AMS team, winner of the 2016 Maritime RobotX Challenge! See NaviGatorUF.org, @NaviGatorUF, and RobotX.org.",
        images: [
          { src: "/images/NaviGator_AMS_Team_2016.jpg", alt: "NaviGator AMS Team", caption: "NaviGator AMS team, winner of the 2016 Maritime RobotX Challenge" }
        ]
      },
    ],
  },
  2016: {
    year: 2016,
    image: "/images/Subjugator-Logo2.png",
    imageCaption: "2016 SubjuGator Logo",
    entries: [
      {
        id: "preview-video-2016",
        title: "SubjuGator 2016 Preview Video",
        date: "Jun 28, 2016",
        content: "Watch SubjuGator 8 in our 2016 preview video!",
        videoUrl: "https://www.youtube.com/embed/dJqNG1oMlug",
      },
      {
        id: "new-actuator-board-2016",
        title: "New Actuator Board",
        date: "Jun 18, 2016",
        featuredImage: "/images/ActuatorBoard_R3_Web.jpg",
        content: "For the 2016 competition season, our actuator board has been re-designed. This board supports 12 actuators and 12 limit switches. This board uses a STMicroelectronics STM32F0 processor and communicates to our vehicle over a RS485 connection.",
      },
      {
        id: "beginning-machine-learning-2016",
        title: "Begining Stages of Machine Learning",
        date: "Mar 23, 2016",
        content: [
          "This Week We:",
          "• Made a tool for segmenting training data\n• Experimented with using an SVM for segmentation\n• Worked on stuff for easily segmenting/labelling planes in PCL (+ distinguishing things “on top” of the plane from the plane itself)",
          "The training tool: The plot on the right is HSV->XYZ. You draw a box around the desired color groups, and use the resulting segmentation. This is less annoying than manually drawing on images.",
          "A SVM was trained on the segmentation data and it ran in ~near~ real-time on a super downsampled input image. This is one frame of the SVM running on the video. It was just a 2-second demo, the threshold segmentation looks a lot better. Sci-kit learn’s svm implementation struggles to fit at more than 10k samples, which is another problem.",
        ],
        images: [
          { src: "/images/easy_labeller.png", alt: "easy_labeller", caption: "HSV to XYZ training tool" },
          { src: "/images/svm_trainer.png", alt: "svm_trainer", caption: "SVM real-time segmentation frame" },
        ],
      },
      {
        id: "hog-descriptor-2016",
        title: "HOG Descriptor Implementation",
        date: "Mar 23, 2016",
        content: "HOG Descriptors can be used to identify an object with a sliding window. It is very slow, so the goal is to train an SVM on the data to speed up the process. This method is much more reliable then the color segmentation we had previously relied on. Below is a snapshot of the selection window in action:",
        images: [
          { src: "/images/HOG.gif", alt: "HOG", caption: "HOG selection window in action" },
        ],
      },
      {
        id: "testing-notes-march-16-2016",
        title: "March 16 Testing Day Notes",
        date: "Mar 17, 2016",
        featuredImage: "/images/20160312_182134.jpg",
        content: [
          "This Week We:\n• Got one competition task working using point cloud data, in the pool\n• Successfully bumped the buoy\n• Proved that the cameras work pretty well in dark conditions\n• Ralph got all of the bags on the sub onto the third computer in MIL, “WALL-E”\n• Forrest added a bunch of features to TxROS at our request, what a guy!",
          "Shoutouts:\n• To Ralph’s friend Ariel, for dutifully documenting our pool-day shenanigans, and somehow fishing a stray competition element out of the pool with a net\n• To Daniel Dugger, for fixing the “nice” tether cable to a state better than the manufacturer could have ever hoped.\n• To Jake Easterling for letting us use the best pool we’ve had the pleasure of using, and clalmly holding a flashlight for at least half an hour.",
        ],
      },
    ],
  },
  2015: {
    year: 2015,
    image: "/images/Subjugator-Logo2.png",
    imageCaption: "2015 SubjuGator Logo",
    entries: [
      {
        id: "our-lab-has-moved",
        title: "Our Lab Has Moved",
        date: "Oct 25, 2015",
        content: "To all visitors and interested students: the Machine Intelligence Lab has changed rooms from MAEB 325 to MAEC 126.",
      },
      {
        id: "featured-in-the-news",
        title: "Featured in the News",
        date: "Jul 6, 2015",
        content: "The SubjuGator team and project was featured in the local newspaper- check it out!",
      },
      {
        id: "back-to-tennessee",
        title: "Back to Tennessee!",
        date: "Mar 9, 2015",
        featuredImage: "/images/tool_holders.jpg",
        content: [
          "This past spring break yet another family trip was taken to JD Squared to resume manufacturing that was not finished on the last round! Here Patrick inserts a tool holder (while smiling!).",
          "Special thanks to Devin and Christine Hughes for taking care of the SubjuGator family during our stay!",
        ],
        images: [
          { src: "/images/drift_trike.jpg", alt: "drift_trike", caption: "The real reason we came to Tennessee: the drift trike!" }
        ]
      },
      {
        id: "family-trip",
        title: "Family Trip",
        date: "Jan 20, 2015",
        featuredImage: "/images/IMG_1968.jpg",
        content: "This past weekend the team took a (family) trip to Tennessee to pay a visit to Devin Hughes to commence manufacturing of SubjuGator 8 at the JD Squared facility. Here’s the laser cutter cutting out some parts! Thank you to JD Squared for supporting our endeavors!!",
      },
      {
        id: "subjugator-8-is-coming",
        title: "SubjuGator 8 is coming!",
        date: "Jan 6, 2015",
        featuredImage: "/images/powerMergeBoard.png",
        content: [
          "As preparation for this year’s competition continues, the new parts of the SubjuGator are coming together. Today here is a picture of the power merge board with a comment from our Electrical Lead, Matthew Griessler:",
          "“The submarine is powered by three battery modules, each battery module is composed of two six cell Li-Po batteries in series providing 44.4V to the submarine. The power merge board provides hot swapping capability for these battery modules. It allows us to turn on and off power to the entire submarine. The power management board also has safety features, it protects against inrush current and low battery voltage. From the power merge board power flows to the thrusters and to the smart 24V regulator board.” – Matthew Griessler",
        ],
      },
    ],
  },
  2014: {
    year: 2014,
    image: "/images/Subjugator-Logo2.png",
    imageCaption: "2014 SubjuGator Logo",
    entries: [
      {
        id: "fall-2014-recruitment",
        title: "Fall 2014 Recruitment",
        date: "Sep 5, 2014",
        featuredImage: "/images/fall2014_recruitment.jpg",
        content: "Today we had our Fall 2014 recruitment meeting. After our Spring 2014 room left us with only standing room, we upgraded to an auditorium to accommodate the people that showed up. This year we hope to draw in people that will keep the SubjuGator project a strong tradition in the Machine Intelligence Lab as our older members graduate.",
      },
      {
        id: "clean-up-clean-up",
        title: "Clean up clean up",
        date: "Sep 2, 2014",
        featuredImage: "/images/Clean_up_Clean_up.jpg",
        content: "Today we spent the day cleaning up the lab for the first time since the 2014 AUVSI/ONR RoboSub Competition. We also implemented a new organization scheme that will allow to us to find needed components quicker in the future.",
      },
      {
        id: "subjugator-takes-second-place-2014",
        title: "SubjuGator takes second place",
        date: "Aug 4, 2014",
        featuredImage: "/images/2014teams.jpg",
        content: "SubjuGator took home second place at the 2014 AUSVI/ONR 17th Robosub Competition and are ready to start working on the 2015 competition. Thank you to all of our 2014 sponsors for supporting us and allowing us to go further than we could go on our own!",
      },
      {
        id: "mission-testing-continues",
        title: "Mission testing continues",
        date: "Jun 17, 2014",
        featuredImage: "/images/GOPR4657.jpg",
        content: "SubjuGator’s testing for the 2014 RoboSub continues. With 36 days left until the competition, we have begun fine tuning Alien Brunch, Landing Site, and Maneuvering. We will soon be posting a new photo gallery and videos of our summer 2014 testing.",
      },
      {
        id: "man-and-machine",
        title: "Man and machine",
        date: "May 24, 2014",
        featuredImage: "/images/GOPR2068.jpg",
        content: "We have started to working on the 2014 RoboSub challenges. Today we successfully completed the maneuvering task and where able to identify the pegs of the reroute power task.",
      },
      {
        id: "first-pool-day-2014",
        title: "First pool day of 2014",
        date: "Mar 24, 2014",
        featuredImage: "/images/20140322_111010.jpg",
        content: "Our first successful deployment into the water for the 2014 season, validating basic mobility and sensor integration.",
      },
      {
        id: "2014-course-construction",
        title: "2014 Course Construction",
        date: "Feb 17, 2014",
        featuredImage: "/images/crane_knex.jpg",
        content: "Today, we started building the 2014 course for our testing this March. Well, we attempted to start building competition elements. Thanks for giving us an excuse to play with K’nex.",
      },
      {
        id: "recruitment-turnout-spring-2014",
        title: "Another great recruitment turnout",
        date: "Feb 3, 2014",
        featuredImage: "/images/Spring14_Meeting.jpg",
        content: "Once again our Spring recruitment meeting ran out of seating. We are glad to see so much interest in the projects of the Machine Intelligence Lab.",
      },
    ],
  },
  2013: {
    year: 2013,
    image: "/images/Subjugator-Logo2.png",
    imageCaption: "2013 SubjuGator Logo",
    entries: [
      {
        id: "standing-room-only-2013",
        title: "Standing room only",
        date: "Aug 29, 2013",
        featuredImage: "/images/IMG_0985_1.jpg",
        content: "Today we had our fall recruiting meeting. Three projects from the Machine Intelligence Lab, including SubjuGator, were being showcased. There was a great turn out with standing room only and a line outside the door. Next time we will need to request a bigger room.",
        images: [
          { src: "/images/IMG_1005_1.jpg", alt: "Recruiting meeting", caption: "Recruiting meeting turnout" }
        ]
      },
      {
        id: "subjugator-second-place-2013",
        title: "SubjuGator takes home second place",
        date: "Aug 4, 2013",
        featuredImage: "/images/checks.jpg",
        content: "After a long week in San Diego, SubjuGator takes home second place in the AUSVI/ONR 16th Robosub Competition. We are excited about our performance at this years competition and are already working towards the 2014 competition. We would like to thank all of our 2013 Sponsors without them it would not be possible for us to compete at this elite level.",
      },
      {
        id: "here-we-come-san-diego-2013",
        title: "Here we come San Diego",
        date: "Jul 20, 2013",
        featuredImage: "/images/20130720_132017.jpg",
        content: "We finished shipping SubjuGator 7 and all of our supporting equipment today. We are excited for the start of the 16th Robosub Competition and look forward to meeting all the new teams. Keep up to date with the team next week through our twitter @SubjuGatorUF.",
      },
      {
        id: "buoy-testing-2013",
        title: "Buoy Testing",
        date: "Jul 15, 2013",
        featuredImage: "/images/GOPR0032.jpg",
        content: "Today we tried out some new methods of bumping the LED buoys. Reusing our manipulator task actuator we were able to reliably cycle through the colors.",
        videoUrl: "https://www.youtube.com/embed/zYmCBx6FoaQ",
      },
      {
        id: "manipulation-task-2013",
        title: "Manipulation Task",
        date: "Jul 11, 2013",
        featuredImage: "/images/20130711_110114.jpg",
        content: "Today we were able to successfully turn the steering wheel of the manipulation task. With one week until the competition, we are getting excited to see all the other teams in San Diego.",
        videoUrl: "https://www.youtube.com/embed/ICMUWVmeoZs",
      },
      {
        id: "camera-calibration-2013",
        title: "Camera Calibration",
        date: "Jul 9, 2013",
        featuredImage: "/images/wpid-20130709_0942161.jpg",
        content: "Today, we calibrated our cameras with our new calibration grid. After the new calibration, we noticed significant improvement in object depth estimation.",
      },
      {
        id: "subjugator-2013-preview",
        title: "SubjuGator 2013 Preview",
        date: "Jun 30, 2013",
        featuredImage: "/images/20130711_0931281.jpg",
        content: "Check out our introduction video for the 16th AUVSI/ONR Robosub competition.",
        videoUrl: "https://www.youtube.com/embed/dNq3rfhnA-o",
      },
      {
        id: "new-tether-2013",
        title: "New tether",
        date: "Jun 20, 2013",
        featuredImage: "/images/IMG_2488.jpg",
        content: "Today we received a 1000′ gel filled, shielded Ethernet cable. After measuring out 250′ and crimping both sides we now have a new tether! Our last tether was starting to fail and was increasing our packet loss percentage.",
      },
      {
        id: "pool-testing-june-8-2013",
        title: "Pool Testing June 8, 2013",
        date: "Jun 8, 2013",
        featuredImage: "/images/IMG_2374.jpg",
        content: "Today we spent most of our time refining our vision algorithms. SubjuGator can consistently find pipes on the pool floor. The sub was also able to recognize the “pizza box”. Next step, install the pneumatic claw!",
        images: [
          { src: "/images/IMG_2372.jpg", alt: "Pool testing", caption: "Refining vision algorithms" }
        ]
      },
      {
        id: "pool-testing-june-1-2013",
        title: "Pool Testing June 1, 2013",
        date: "Jun 5, 2013",
        featuredImage: "/images/GOPR0020.jpg",
        content: "Today we worked on our controller and particle filter again. We used buoys to test our vision system. The video below shows the sub looking for a buoy shaped object that is also red. When the sub locates and bumps the buoy, it surfaces and proceeds toward its next objective: a shooting target from last year’s competition.",
        videoUrl: "https://www.youtube.com/embed/mifn9MojiWk",
      },
      {
        id: "pool-testing-april-27-2013",
        title: "Pool testing April 27, 2013",
        date: "Apr 29, 2013",
        featuredImage: "/images/IMG_2144.jpg",
        content: "Saturday testing went well. We continued to improve on the particle filter by attempting several of last year’s challenges. Our attempts of the buoy bumping and pipe to shooter were consistently successful.",
      },
      {
        id: "particle-filter-vision-2013",
        title: "Particle-filter based vision",
        date: "Apr 12, 2013",
        featuredImage: "/images/particle_filter.png",
        content: "Implementing a particle filter to improve the robustness of our object tracking and pose estimation.",
      },
      {
        id: "move-to-ros-2013",
        title: "Move to ROS",
        date: "Mar 30, 2013",
        featuredImage: "/images/rviz.png",
        content: "Over the last few months, we’ve been working on moving to ROS (Robot Operating System), an open-source framework for developing software for robots. It includes a message-passing layer that has replaced DDS (Data Distribution System) for us, utilities for managing all the software that the submarine runs, and numerous tools that let us work much more efficiently. In mid-February, the code was mature enough to let us hold position. Since then, we’re been capturing video and sonar data in preparation for attempting challenges. The above image shows us in the pool looking at the shooter target using a camera and imaging sonar.",
        images: [
          { src: "/images/rviz.png", alt: "RViz tool", caption: "ROS's RViz tool lets us see what the sub is seeing – without any additional code!" }
        ]
      },
      {
        id: "middle-school-outreach-2013",
        title: "Middle School Outreach",
        date: "Mar 8, 2013",
        featuredImage: "/images/2013-03-08-14.32.49.jpg",
        content: "While in Panama City conducting testing in the Gulf of Mexico, Team SubjuGator visited two middle schools in the area. We met with the school’s STEM focused classes including one class that was working on their own underwater platform, a SeaPerch ROV. The visit was focused on robotics at the University of Florida and included a live demonstration of SubjuGator 7 in a very small pool.",
        images: [
          { src: "/images/DSCN0133.jpg", alt: "Outreach demo", caption: "Live demonstration of SubjuGator 7" }
        ]
      },
      {
        id: "testing-gulf-of-mexico-2013",
        title: "Testing in the Gulf of Mexico",
        date: "Mar 8, 2013",
        featuredImage: "/images/IMG_0094.jpg",
        content: "In support of writing a journal paper with the Nonlinear Controls and Robotics (NCR) group, we conducted controller tests in the Gulf of Mexico off the coast of Panama City, FL. This sea trial tested the robustness of the RISE controller which is implemented on SubjuGator 7. The RISE controller is a cutting edge robust nonlinear controller developed by the NCR group. The testing in the Gulf of Mexico was successful proving that the RISE controller and SubjuGator 7 were able to operate in an open water environment with 3-4 ft seas and ocean currents.",
        images: [
          { src: "/images/IMG_0091.jpg", alt: "Gulf testing", caption: "RISE controller testing in open water" }
        ]
      },
    ],
  },
  2012: {
    year: 2012,
    image: "/images/Subjugator-Logo2.png",
    imageCaption: "2012 SubjuGator Logo",
    entries: [
      {
        id: "competition-updates-2012",
        title: "Competition updates and live webcast information.",
        date: "Jul 21, 2012",
        content: [
          "We’ve been tweeting throughout the week on our twitter account: @subjugatoruf. For the most up to date information about our progress and results, that is the place to look.",
          "There will be a live web broadcast of finals on Sunday from 1-4pm PDT via Robosub.org.",
        ],
      },
      {
        id: "packed-and-shipped-2012",
        title: "Packed and Shipped",
        date: "Jul 12, 2012",
        featuredImage: "/images/IMG_20120712_112807.jpg",
        content: [
          "After a great last week of testing, we’ve been busy getting things ready for the trip to San Diego.",
          "First up for SubjuGator 7: a nice bath with Patrick. Well actually, the only shower at the pool was in the locker room, so we had to do what we had to do. Chlorine and anodization don’t get along!",
          "Next, we organized our equipment into categories based on utility and daily use. Pre-packing included sorting boxes which stay at the hotel, travel to the Transdec but stay in the car, and are needed daily in the tent. We’ve accumulated enough Pelican boxes over the past few years to officially eliminate the use of all cardboard boxes during our trip. This is great for the team since it guarantees our gear arrives without damage. Additionally, the sub travels in its own case, fully assembled. This reduces assembly time when we arrive and helps to reduce the need to recalibrate everything.",
          "Our next blog post will document our journey to compete in RoboSub 2012. Stay tuned!",
        ],
        images: [
          { src: "/images/IMG_20120711_113451.jpg", alt: "SubjuGator cleaning", caption: "Fresh water rinse for SubjuGator 7" },
          { src: "/images/IMG_20120712_163137.jpg", alt: "Packing gear", caption: "Sorting equipment for transport" },
          { src: "/images/IMG_20120712_205041.jpg", alt: "Pelican cases", caption: "All gear packed in protective Pelican cases" },
        ],
      },
      {
        id: "mission-testing-2012",
        title: "Mission Testing",
        date: "Jul 8, 2012",
        featuredImage: "/images/shooter.jpg",
        content: [
          "Since the leak and thruster failures last week, the team has gotten SubjuGator 7 back up and running. The team has been busy developing and debugging missions for the RoboSub competition. Our vision system has been working very well, even in varying outdoor lighting conditions (fitting for the San Diego coast). Hopefully all of our outdoor testing will be advantageous come competition time.",
          "We've demonstrated template identification, visual servoing, and our ball dropper mechanism executing during the bin mission, as well as the pneumatic grabber mechanism executing during the wreath mission.",
          "We have also verified our 6 DOF control capabilities and refined the grabber and shooter missions utilizing our pneumatic torpedo launcher.",
        ],
      },
      {
        id: "leaks-and-failures-2012",
        title: "Leaks and failures",
        date: "Jul 3, 2012",
        featuredImage: "/images/IMG_20120703_115916.jpg",
        content: [
          "The end of June has been rough for SubjuGator 7. Our new pneumatic actuator box managed to form a small leak through our potting material (resulting in ~1cm of water in the box, but no catastrophic electrical failures) and we have now had two Seabotix thrusters completely seize this year.",
          "Pending replacement cables and potting for the pneumatic housing and the arrival of one additional new thruster, we expect to be back in the water by Thursday. We’ve used this downtime to vastly improve mission behaviors and vision algorithms in preparation of splash down later in the week.",
          "With clear skies and no tropical storms in the forecast, we should have a great week of pool testing ahead. Our primary goals for this weekend include mission behaviors for the shooter window and the grabber.",
        ],
      },
      {
        id: "raining-cats-and-submarines-2012",
        title: "Raining Cats and Submarines",
        date: "Jun 24, 2012",
        featuredImage: "/images/IMG_20120624_143234-e1340591281521.jpg",
        content: "We had an unexpected visitor stop by today. Her name is Debby. Tropical Storm Debby, that is. However, she didn’t stop us from testing at the pool. 30 mph winds, drenching rain (the sub didn’t mind), and a few waterlogged engineers can’t stop our motivation. We’re excited to have successfully completed all of our goals for the day, despite the wet inconvenience. As of the time of this post, it has been raining for 14 straight hours. Go Gators!",
      },
      {
        id: "trajectory-generation-2012",
        title: "Trajectory Generation",
        date: "Jun 22, 2012",
        featuredImage: "/images/GOPR0073.jpg",
        content: [
          "Probably the most visible software change to the sub is our new trajectory generator. It uses a non-linear filter to produce trajectories that are 3rd-order continuous, which our non-linear RISE controller then tracks to produce a smooth moving vehicle.",
          "One new feature the nonlinear filter approach brings us is the ability to track a moving waypoint. We can issue a waypoint that consists of both an initial position and a velocity, and the sub will speed up to catch the waypoint, then slow down to track the waypoint perfectly. This helps us with visual servoing and hydrophone tracking, or any maneuver where we simply want to cruise at a fixed velocity.",
          "The generator also makes trajectories for all 6 degrees of freedom, which allows us to roll and pitch the sub. We experimented with an inverted configuration to allow the DVL to track the surface of the water. The sub performed the maneuver well and the controller can keep the sub stable while inverted. We are even able to perform barrel rolls autonomously!",
        ],
      },
      {
        id: "the-refactoring-2012",
        title: "The Refactoring",
        date: "Jun 20, 2012",
        featuredImage: "/images/2012-06-20-173508_637x528_scrot.png",
        content: [
          "This year has primarily been a software year for Team SubjuGator. We began the year with a large scale refactoring that eventually reached every worker process that runs on the sub. Our communications framework, DDS, allowed us to keep the sub operational at all points during the refactoring.",
          "Key features gained include better error handling and logging, and the introduction of WorkerManager, which automatically launches and monitors necessary workers on our vehicle PC and gumstix. Additionally, the sub can now be killed from multiple places, including a DVL Height-Over-Bottom kill.",
          "The PrimitiveDriver can now detect thruster failure conditions and dynamically reconfigure the thruster mapper. Because we have 8 thrusters, we can retain control of all 6 DOFs even with the loss of any one thruster. We've also moved configuration to JSON files with support for overlays, allowing us to easily switch settings between different environments.",
        ],
      },
      {
        id: "new-hydrophone-board-2012",
        title: "New hydrophone board",
        date: "Jun 7, 2012",
        featuredImage: "/images/IMG_20120606_165803-e1339126632374.jpg",
        content: "We’re proud to announce that our new hydrophone board is nearing completion. The 4 layer board was designed and populated in-house by team members. It features higher sampling rates, better analog design and cleaner filtering. While our current board has been successful for several years, the new design will bring added robustness to our signal processing and acoustic beacon navigation. More testing details to come soon!",
      },
      {
        id: "spring-updates-2012",
        title: "Spring Updates",
        date: "May 7, 2012",
        featuredImage: "/images/IMG_20120326_142405.jpg",
        content: [
          "The team has been busy working to improve the software architecture of SubjuGator 7 throughout the spring semester. Noteworthy successes include automated routines for magnetometer and compass calibration, a C4 continuous trajectory generator, and numerous controller bug fixes.",
          "Additional software redesigns include newly structured worker classes, a commander interface for monitoring, fault detection, and new python-based scripting support for mission behaviors.",
          "In addition to software changes, we have moved our external actuator system to pneumatics. Our previous system relied on hard-to-waterproof solenoids; the move to pneumatics improves control for the shooter, ball dropper, and grabber. 2012 will feature all new shooter and grabber mechanisms as well.",
          "We are on track to have over 200 hours of testing time in the pool this summer before the competition, a great improvement over the 20 hours we had last year.",
        ],
      },
    ],
  },
  2011: {
    year: 2011,
    image: "/images/Subjugator-Logo2.png",
    imageCaption: "2011 SubjuGator Logo",
    entries: [
      {
        id: "fall-publicity",
        title: "Fall Publicity",
        date: "Dec 8, 2011",
        featuredImage: "/images/MAE-Fall-2011-Newsletter.jpg",
        content: `Team SubjuGator recently participated as part of the University of Florida Robotics Fair. The Florida Alligator wrote a nice article about the event which you can read at http://www.alligator.org/news/campus/article_af63c590-2098-11e1-a6f1-001871e3ce6c.html. Expect pictures from the event to be posted soon!

The SubjuGator project was also recently featured in the Department of Mechanical and Aerospace Engineering’s Fall newsletter. The newsletter is also available online to read at http://www.mae.ufl.edu/PDFs/fallnewsletter2011.pdf.

We will have a Fall project update posted soon. Stay tuned.`,
      },
      {
        id: "day-3-recap",
        title: "Recap of day 3 from the Transdec!",
        date: "Jul 16, 2011",
        featuredImage: "/images/Day3Recap2011.jpg",
        content: `We awoke early in order to get an early practice in before our preliminary round competition run at 9:30am. We left the hotel at 6:15am to reserve a spot on the practice side of the pond at about 8:20am. Our official weigh-in was at 46.5kg (102.5 lbs), well above the weight that we were told on day one, but about what we expected.

After a pretty good practice run, we had a disastrous preliminary run! On our first pass the sub went straight through the gate, but at a pace of less than half of our normal speed. We stopped the run and after some small modifications of code, we restarted our run. The sub did not move! After a few more tries we realized that we needed to cancel our runs and go back to our tent to analyze our problems in more depth. We found an error that should not have occurred, but somehow did. We had two mission planners running simultaneously! We lost our first chance to qualify for the finals, but with the knowledge that we will have another chance tomorrow (Saturday), we did not lose our confidence.

Our afternoon practice went very well. We went straight through the gate and hit the buoys and worked some on going over the hedges and towards the pinger. We will work into the night to get all the task solid that do not require actuation. We will attempt to run the entire course, including the actuation tasks, in the finals.

Wish us luck tomorrow and of course … Go Gators!`,
      },
      {
        id: "day-1-recap",
        title: "Competition day 1 recap from the Transdec",
        date: "Jul 14, 2011",
        content: `Day one at the Transdec in San Diego was a great success for Team SubjuGator. Our morning started at 6:30am. We quickly packed the pelican cases with the items necessary to run the sub all day. This turned out to be 2 medium pelicans and two small pelicans. Luckily, the sub (on its cart) and the four pelican cases fit perfectly inside our two Suburbans (thanks Dr. Schwartz). We arrived at the Transdec at 7:20am and began to setup our tent. Our new awesome SubjuGator banner stood out among all of the other teams making UF very visible to guests and judges. We were happy with this. But we were there to test the sub, so we got everything ready for our first water test at 9am.

Before we left Gainesville, we estimated the weight of our sub at 95 lbs. We made a small bet amongst team members what the actual weight of the sub would be on the competition scale (guesses between 99 and 105 lbs, the disqualification weight is 110 lbs so you can see why we were nervous to know the true weight). Luckily the sub weighed in at only 90 lbs! A good sigh of relief and focus shifted to testing as many missions as possible during our 12 hours at the Transdec on the first day.

The first water test didn’t start the way we would have hoped as the ethernet tether decided to stop working (after it had been working for several weeks without problems). Confirming that the waterproofing of the cable splice was infact the problem, we decided to remove the sub and resolder/waterproof the ethernet tether. Our first water test proved to be a waste of good pool time, but the tether was quickly fixed and we got back into the queue to enter the pool again.

Our second water test was much more successful. We were able to drive autonomously (without tether) through the validation gate and then immediately travel to the pinger and surface within the octagon. After not being able to do this the previous two years at the competition, we were extremely happy with out first successful water test.

Our third water test was also successful as we were able to debug the pipe and buoy missions.

Our hope for tomorrow is to continue debugging as many vision mission behaviors as possible so that we can post a high point score for the semi-final rounds on Friday and Saturday.

Be sure to keep up with our daily progress on our twitter account: SubjuGatorUF and check back here for daily blog updates!

Go Gators!`,
      },
      {
        id: "first-day-san-diego",
        title: "First day in San Diego",
        date: "Jul 12, 2011",
        featuredImage: "/images/Travel2011.jpg",
        content: `Today was our first day in San Diego. We are staying at the Kona Kai on Shelter Island, as per the usual competition host hotel. It is a great location overlooking the bay and a huge marina. We started off with a nice team breakfast at the Red Sails Inn. This is an annual event that the team participates in every year thanks to Dr. Schwartz. Our sub was supposed to arrive yesterday (Monday) at 10:30am guaranteed next day air by FedEx. The sub ended up missing a flight in memphis so it didn’t make it by Monday. The sub was delivered Tuesday morning around 11am, and we were happy to find out that FedEx refunded our shipping charge for their mistake. Good enough for us.

Once the sub arrived, we began reassembling the components which we had to take off during shipping, e.g., the two vertical thrusters and one strafe thruster. Our new Pelican case was awesome so we didn’t have to take any of the sub apart during shipping. A nice change from last year.

We ran several errands to Target, Home Depot, Von’s and a local hardware store to get extra supplies that we forgot or planned to buy. Tonight we plan to recalibrate the sub (hard and soft iron calibrations since components on the sub have moved and the earth’s magnetic field is different in cali) and dynamic current calibration since thrusters were removed and added back. Tomorrow we will head to the Transdec to begin our first day of testing at the competition facility at 7am.

Check back here on our blog for more team updates or follow us on Twitter: SubjuGatorUF. The competition is open to the public on Saturday and Sunday for the semi-finals and finals. The finals on Sunday is also broadcast live online at http://www.robosub.org.`,
      },
      {
        id: "enroute-to-san-diego",
        title: "Enroute to San Diego!",
        date: "Jul 9, 2011",
        featuredImage: "/images/packed2011.jpg",
        content: "SubjuGator 7 has been packed and has now left Gainesville on her way to San Diego, CA. It was tough to see her go, but she’ll be waiting for us on Monday when we get there!",
      },
      {
        id: "last-day-testing",
        title: "Last day of testing!",
        date: "Jul 9, 2011",
        content: "Yesterday marked the last day of in-water testing of SubjuGator 7 before it began its voyage to San Diego. Unfortunately, there happened to be a tropical storm bearing down on us at the same time. Lucky for us the sub is waterproof (laptops are not). We traveled to three different pools throughout the day (different pool hours) to debug as many mission behaviors as we could before it got dark and the heavier storms began to hit. We were able to successfully debug the pipe and buoy missions. The hydrophone missions is about half way debugged. The remaining tasks are written but will be debugged in San Diego on Mon-Thurs.",
      },
      {
        id: "calibrations-tuning",
        title: "Calibrations and tuning",
        date: "Jul 7, 2011",
        content: "After a few small thruster leakage setbacks, we’ve officially completed all of the calibration and tuning procedures for SubjuGator 7. We’re using a new nonlinear controller this year, which is achieving outstanding transient performance and steady-state tracking errors over last year’s PD. We’re able to successfully move to desired waypoints and orientations using our real-time C3 continuous trajectory generator. Here is a photo of the controller tuning process at the pool yesterday.",
      },
      {
        id: "poolside-updates",
        title: "Poolside updates",
        date: "Jul 4, 2011",
        content: "We’ve been spending as many hours at the pool as possible this weekend. The full assembled vehicle got its feet wet for the first time this past week. Since then, we’ve had a lot of success and only a few small bugs to work out. The Kalman filter is converging and the thruster mapper and primitive driver components are working as expected. Tomorrow’s goal is to integrate the LPOSVSS with the local waypoint driver, trajectory generator, and controller. Assuming all goes well, we should be able to navigate to waypoints by the end of the day. Watch out buoys, we’re coming for you next.",
        images: [
          {
            src: "/images/IMG_20110702_185258.jpg",
            alt: "SubjuGator 7 pool testing",
            caption: "SubjuGator 7 pool testing",
          },
        ],
      },
      {
        id: "2011-journal-paper",
        title: "2011 AUVSI Journal Paper",
        date: "Jun 28, 2011",
        content: "Our 2011 AUVSI Robosub competition journal paper has been released today! Feel free to read through our design and development process for the newest generation of SubjuGator AUV!",
      },
      {
        id: "subjugator-7-preview",
        title: "SubjuGator 7 Preview",
        date: "Jun 28, 2011",
        content: "We posted a new video (Preview of SubjuGator 7) of the frame assembled with the completed thrusters in our media section of the website! The internal trays have been finalized and are completely wired and passed our table-top testing. We have been finalizing the software port (from C# to C++) and will be ready for state estimation and control validation at the pool tomorrow. If all goes well at the pool tomorrow, we’ll be able to track trajectories, given waypoints, by Thursday. All mechanical and electrical systems are working great, so we’re down to software!",
        images: [
          {
            src: "/images/IMG_20110627_223742.jpg",
            alt: "Fully functional SubjuGator 7 trays on table",
            caption: "Fully functional SubjuGator 7 trays on table",
          },
        ],
      },
      {
        id: "navigation-next",
        title: "Now navigation next!",
        date: "Jun 19, 2011",
        content: [
          "A few updates for last week:",
          "• The new motor drivers have been successfully stress tested and integrated into the rear tray. Our primitive driver is completed and communicating through our hardware application layer to control the drivers.",
          "• The merge board, which accepts connections from our two battery pods and separates the supply voltage into our two rails (16V and 32V) and can handle hot swapping pods and or a shore power connection, is completed and programmed. The board offers over-current protection among other integrated safety features, to prevent damage downstream should a fault occur in the electrical system.",
          "• The battery pod boards were populated today and are currently being programmed.",
          "• The navigation computer is currently being coded. Once the low level sensor communication is achieved, we will begin calibrating the sensors, i.e., rail tests to obtain alignment vectors for the IMU and DVL, magnetometer calibration, dynamic current calibration, etc.",
          "Things are coming together quickly and we’re ready to be in the pool as soon as we can!",
        ],
      },
      {
        id: "nav-box-assembly",
        title: "Navigation box assembly and integration",
        date: "Jun 12, 2011",
        content: "After finalizing and testing all of the motor drivers and thrusters, we’ve begun work on assembling the navigation box and its components. The navigation box includes the DVL, the IMU (mounted directly onto the auto pilot board), and the depth sensor. We realized that we could build our own cables with Molex connectors to link the DVL head to the electronics box without the use of the unobtainable Fischer connectors. The pressure sensor was then installed and the depth sensor micropic board was installed and programmed.",
        images: [
          { src: "/images/IMG_20110603_180459.jpg", alt: "DVL electronics box opened", caption: "DVL electronics box opened" },
          { src: "/images/IMG_20110610_213228.jpg", alt: "DVL electronics box new cables", caption: "DVL electronics box new cables" },
          { src: "/images/IMG_20110611_180146.jpg", alt: "DVL electronics box finished", caption: "DVL electronics box finished" },
          { src: "/images/IMG_20110611_181755.jpg", alt: "Navigation box", caption: "Navigation box in its current state" },
        ],
      },
      {
        id: "thruster-calibrations",
        title: "Thruster Calibrations",
        date: "Jun 9, 2011",
        content: "The team has been busy debugging the new motor drivers and we recently began calibrating each of our new thrusters. The motor drivers are running great, and survived our stress tests flawlessly. And better yet, we’re doing all of our communication over ethernet. Here’s a photo of our calibration rig during one of the data logging runs for a SeaBotix thruster.",
        images: [
          { src: "/images/Thruster-calibration-rig.jpg", alt: "Thruster calibration rig", caption: "Thruster calibration rig during a data logging run" },
          { src: "/images/IMG_20110610_205309.jpg", alt: "VideoRay thruster calibration", caption: "Calibrating a VideoRay thruster" },
        ],
      },
      {
        id: "parts-arrived",
        title: "Parts have arrived!",
        date: "May 25, 2011",
        content: "The first set of anodized parts arrived on Tuesday this week. We’ll be busy cleaning and assembling the electrical trays this week until the main Hull parts arrive on Friday. 50 days to go!",
        images: [
          {
            src: "/images/IMG_20110524_145957.jpg",
            alt: "First set of anodized parts",
            caption: "First set of anodized parts for SubjuGator 7",
          },
        ],
      },
      {
        id: "frame-assembly",
        title: "Frame Assembly",
        date: "May 22, 2011",
        content: "The first assembly of the frame with the computer pressure vessel and the navigation pressure vessel was completed this weekend. Everything went together smoothly and the hinges are performing exactly as designed. We’re very excited to have all of the manufacturing finished. The remaining parts will be anodized and delivered next week for final assembly, electronics insertion and wiring!",
        images: [
          {
            src: "/images/pic716.jpg",
            alt: "Frame assembly",
            caption: "First assembly of the frame",
          },
        ],
      },
      {
        id: "manufacturing-photos",
        title: "Manufacturing Photos",
        date: "May 10, 2011",
        content: "We have added several more photos of the manufacturing of SubjuGator 7 at JDSquared. All of the CNC work was done by students on the team over the course of 2 months.",
        images: [
          {
            src: "/images/pic710.jpg",
            alt: "Manufacturing SubjuGator 7",
            caption: "CNC work for SubjuGator 7 parts",
          },
        ],
      },
      {
        id: "videoray-thruster-cap",
        title: "Thruster modifications",
        date: "May 4, 2011",
        content: `The custom VideoRay thruster cap was finished today. Because our mounting location for the thruster was not against a pressure vessel, and the length of the plastic endcap was unnecessary, we decided to create a custom end cap which would facilitate the cables to pass through the sealed cap.

Update: We completed the pressure testing of the new endcap and it performed as expected. The final assembly of the SEACON cable in the new endcap is also pictured.

Update 2: Seabotix endcaps have been modified to fit our custom cables by removing the potting urethane. Both the custom VideoRay endcaps and the modified Seabotix endcaps will next be potted with urethane to guarantee waterproof performance.

Update 3: The Seacon cables have now been potted into the thruster caps. Everything is pressure tested and watertight.`,
        images: [
          { src: "/images/IMAG0130.jpg", alt: "New VideoRay Cap", caption: "New VideoRay Cap" },
          { src: "/images/IMG_20110505_124709.jpg", alt: "Pressure testing", caption: "Pressure testing the endcap" },
          { src: "/images/IMAG0133.jpg", alt: "VideoRay thruster modification", caption: "Completed VideoRay thruster modification" },
          { src: "/images/IMG_20110514_170353.jpg", alt: "Seabotix endcap modifications", caption: "Seabotix endcap modifications" },
          { src: "/images/IMG_20110530_173901.jpg", alt: "Potting endcaps", caption: "Potting the SeaBotix endcaps" },
          { src: "/images/IMG_20110530_173828.jpg", alt: "Curing", caption: "SeaBotix endcaps curing" },
        ],
      },
      {
        id: "website-redesign",
        title: "New SubjuGator website is live!",
        date: "May 2, 2011",
        content: "The long awaited SubjuGator.org redesign is now live! A lot of the content from the previous site is still being transfered over, so bear with us. We’re going to work hard to publish new content more frequently about the project via our blog, twitter, and youtube. Hope you stay connected and enjoy!",
      },
    ],
  },
  2010: {
    year: 2010,
    image: "/images/T-shirt_2010_sml.jpg",
    imageCaption: "2010 Competition T-Shirt",
    entries: [
      {
        date: "Sat, 17 July 2010 (night)",
        content: `What do you want first the good news or the bad news?

The bad news is that we did not make the finals. In fact, we did not get a competition run at all. We will therefore not be on the video feed tomorrow afternoon.

The good news is that there is a second chance competition for the first time ever. We are very excited to have a chance to show our excellent capabilities here at the competition. We even have high hopes of beating some of the teams that made the finals. We will have our last run of the competition at 11:15am on Sunday.

We were ranked third of the teams that did not make the finals. We scored a perfect 800 on the JAUS competition today. As of the last time we looked, only 4 other teams had earned a perfect score. We also believe that we are the only fully JAUS submarine.`,
      },
      {
        date: "Sat, 17 July 2010 (morning)",
        content: `Sorry for the lack of info, but the internet has been bad and we had no good info until now. Our motor drivers have been blowing up ever since we got to San Diego. The drivers worked for probably 100 hours in Gainesville with no problems, but not here. We tried about 20 different things, and finally found something that seems to work. We have rewired several parts of the sub now, replaced at least 25 MOSFETs. We are now recalibrating the compass.

We earned third place overall in the static phase of the competition (including paper, web site, presentation, etc.). We picked the very last preliminary run time of the day, at 5:30pm today. This will be our last chance to make the finals. Cornell was first and ETS second in static judging.

I will try to post something tonight to tell the results. Go to http://www.todocast.tv/500films/auv2010/ to watch the robot submarine competition finals LIVE on Sunday (July 19th) from 1-5pm! Of course we are still HOPING to be in the finals. If nothing more happens with the motor drivers, we should be there.

Other videos and updates from the competition site might be available at www.robosub.org.`,
      },
      {
        date: "Mon, 12 July 2010",
        content: `We are now at the Gainesville airport. Everyone got through security. Dana and Jheanell don't yet have seats or boarding passes for the last leg of our three leg trip out to San Diego.

In-pool testing went very well last week. We had no problem detecting and bumping the specified colored buoys, finding the "camp counselor" PVC structure (by finding the pinger), and lifting "him" to the surface. Two things still need to be tested in the water, the weapon identification and the finding the hedges. Both have been thoroughly debugged in the lab.`,
      },
      {
        date: "Fri, 2 July 2010",
        content: `Great progress was made this week. We have been testing in the water, integrating the various systems. Waypoint control is good. We are cleaning up vision navigation and hydrophone navigation. We got rained out today (from pool work), but will back in the water tomorrow morning.

A final design grab/release device was completed today. We probably had 7 previous designs that we junked. Our goal was to have a very reliable grabber and a fairly reliable dropper. We believe our design exceeds these specs.

The shirts were picked up today. They look good!`,
        images: [
          {
            src: "/images/grab-release.jpg",
            alt: "Grab/Release device",
            caption: "Grab/Release device",
          },
          {
            src: "/images/T-shirt_sml.jpg",
            alt: "T-shirt",
            caption: "T-shirt",
          },
          {
            src: "/images/Polo.jpg",
            alt: "Polo shirt",
            caption: "Polo shirt",
          },
        ],
      },
      {
        date: "Mon, 28 June 2010",
        content: `Last week there were no classes at UF, so there was plenty of time to finalize and clean things up.

The trip logistics have now been finalized, i.e., all airline tickets purchased, hotel rooms reserved, minivans reserved, rides to airport arranged, etc. The team T-shirts and polo shirts have been designed and ordered.

We spent some time in finalizing the shooter and the grabber. The droppers are ready to go.

The new hydrophone board has been tested and works well. A problem with one of the coax cables to a hydrophone had a short. This was repaired and the others were all rebuilt, just to be safe. We also made a backup connector that is now being used on a waterproof box for testing the hydrophones separately from the sub. We are still having some issues with the C# code for the hydrophones.

The vision system is coming along well. We can find the buoys consistently and set waypoints based on them. The shooter window is returning pose information, but we need to calibrate the cameras to improve this to within our desired specs.

The JAUS/Mission planner is just about finalized.

The website is okay, but will be updated with more pictures the next time we get to a pool. The required forms and paperwork were sent in over the last week, as required by the competition rules. The paper will be submitted tonight by midnight.`,
      },
      {
        date: "Thur, 17 June 2010",
        content: `Found some corrosion in a Fischer connector that may have caused a motor driver failure. Subrat found some other issues as well, and fixed them.`,
      },
      {
        date: "Wed, 16 June 2010",
        content: `Cool promo for the 2010 competition! Check out the teaser video.`,
      },
      {
        date: "Mon, 14 June 2010",
        content: `Added a buzzer inside the sub to give various audio indications about what is going on inside.`,
      },
      {
        date: "Fri, 28 May 2010",
        content: `After a few hours of discussions, we decided to make one battery pod 16V and the other 32V.`,
      },
      {
        date: "Tues, 25 May 2010",
        content: `PIC microcontroller board designed and verified for the new humidity sensors.`,
      },
      {
        date: "Mon, 17 May 2010",
        content: `The motor driver cards worked perfectly, we tested for max possible current, and we got good current readings from the current sensors. Other things to do this week:

1. Re-do the thruster force mapping
2. Mold the power cables
3. Present the SubjuGator paper at FCRAR (Florida Conference on Recent Advances in Robotics)
4. Align the DVL and IMU
5. Re-do the magnetometer-current and hard-soft iron correction with thrusters fixed rigidly
6. Align the magnetometer and IMU
7. Next week will start test of all the pose estimation code and start verifying the new hydrophone system with high speed USB`,
      },
      {
        date: "Sun, 9 May 2010",
        content: `The new motor driver cards have been populated, tested, and worked fine on the sub on land. We will confirm that everything works under load in the next few days.`,
      },
      {
        date: "April 2010",
        content: `We created these various diagrams over the last month.`,
        images: [
          {
            src: "/images/SystemDiag10Rev1.jpg",
            alt: "SubjuGator System Block Diagram",
            caption: "SubjuGator System Block Diagram",
          },
          {
            src: "/images/Jaus2.jpg",
            alt: "JAUS-based Software Architecture",
            caption: "JAUS-based Software Architecture",
          },
          {
            src: "/images/Depth Sensor Architecture_10.jpg",
            alt: "Depth Sensor Block Diagram",
            caption: "Depth Sensor Block Diagram",
          },
        ],
      },
      {
        date: "Mon, 22 March 2010",
        content: `3-D simulator competition demonstrations. 2 groups both showed promise. We asked them to work together to come up with a single system.`,
      },
      {
        date: "Fri, 16 March 2010",
        content: `Issued a State of the Sub document. We demonstrated the thruster mapping algorithm worked, even in the presence of saturation. We have decided that we need to redesign our motor drivers.`,
      },
      {
        date: "Sat-Sun, 6-14 Mar 2010",
        content: `We thoroughly cleaned the sub, using tooth brushes and alcohol. We also rewired and resoldered all the Fischer connectors.`,
      },
      {
        date: "Tues, 9 Mar 2010",
        content: `Most of the team and some others traveled to the NSWC (Naval Surface Warfare Center) base in Panama City, Florida, for a tour and discussions of some of their work and how we can work together.`,
      },
      {
        date: "Thur, 4 Mar 2010",
        content: `Made a detailed list of all the mechanical and electrical items to be rebuilt or designed and fabricated. Also made a list of items to be tested, serviced, and/or cleaned. Plan to do most of this over our spring break next week.`,
      },
      {
        date: "Thur, 11 Feb 2010",
        content: `Kick-off meeting for 3-D simulator competition. 15 students attended.`,
      },
      {
        date: "Tues, 8 Feb 2010",
        content: `Announce a 3-D simulator competition with cash prizes.`,
        images: [
          {
            src: "/images/Sim_competition_sml.jpg",
            alt: "Competition announcement flyer",
            caption: "Competition announcement flyer",
          },
        ],
      },
      {
        date: "Sat, 6 Feb 2010",
        content: `Made a list of things to do including new depth sensor board design, wiring documentation and labeling, microcontroller integration, backplane modifications, leakage detection electrodes, and Fischer connector repair.`,
      },
      {
        date: "Tues, 15 Dec 2009",
        content: `In the water for the first time since the competition for some data collection! (In Florida, we can get in a pool in December.)`,
        images: [
          {
            src: "/images/Around_Pool_15Dec09_sml.jpg",
            alt: "At an apartment pool",
            caption: "At an apartment pool",
          },
        ],
      },
    ],
  },
  2009: {
    year: 2009,
    image: "/images/T-shirt_2009_sml.jpg",
    imageCaption: "2009 Competition T-Shirt",
    entries: [
      {
        date: "Monday, 3 August 2009",
        content: `Unfortunately, we did not do well in the 2009 competition. But be assured, in 2010 we WILL be in the game! Congratulations to Cornell, the 2009 champion. We will add more pictures when we get back to Gainesville. See www.auvsi.org/competitions/water.cfm for some video of the event.`,
        images: [
          {
            src: "/images/Loading_Harris_sml.jpg",
            alt: "Lowering sub",
            caption: "Lowering sub",
          },
          {
            src: "/images/Pat_and_sub_loading_Harris_sml.jpg",
            alt: "Patrick & sub (Harris)",
            caption: "Patrick & sub (Harris)",
          },
          {
            src: "/images/staging_checking_batteries_sml.jpg",
            alt: "Checking batteries",
            caption: "Checking batteries",
          },
          {
            src: "/images/LockeedMartin_Fischer_GatorEng_sml.jpg",
            alt: "On crane (LM, Fischer, GatorEng)",
            caption: "On crane (LM, Fischer, GatorEng)",
          },
          {
            src: "/images/Tom_sml.jpg",
            alt: "Tom",
            caption: "Tom",
          },
          {
            src: "/images/Subrat_sml.jpg",
            alt: "Subrat",
            caption: "Subrat",
          },
          {
            src: "/images/Patrick_sml.jpg",
            alt: "Patrick",
            caption: "Patrick",
          },
          {
            src: "/images/Cedric_sml.jpg",
            alt: "Cedric",
            caption: "Cedric",
          },
          {
            src: "/images/Nic_sml.jpg",
            alt: "Nic",
            caption: "Nic",
          },
          {
            src: "/images/Jose_sml.jpg",
            alt: "Jose",
            caption: "Jose",
          },
          {
            src: "/images/Gautam_sml.jpg",
            alt: "Gautam",
            caption: "Gautam",
          },
          {
            src: "/images/Owen_sml.jpg",
            alt: "Owen",
            caption: "Owen",
          },
          {
            src: "/images/Brian_sml.jpg",
            alt: "Brian",
            caption: "Brian",
          },
          {
            src: "/images/Dana_sml.jpg",
            alt: "Dana",
            caption: "Dana",
          },
          {
            src: "/images/Eric_sml.jpg",
            alt: "Dr. Schwartz",
            caption: "Dr. Schwartz",
          },
          {
            src: "/images/Tom_sleeps_after_done_sml.jpg",
            alt: "Tom sleeping. Done!",
            caption: "Tom sleeping. Done!",
          },
        ],
      },
      {
        date: "Saturday, 1 August 2009",
        content: `A little after 7pm yesterday, we found out the results of static judging (which include a research paper, the website, and our presentation to the judges). We earned seventh place out of 30 teams. The static judging results were used to select competition run times for today. We got the exact time we wanted, 5pm.`,
      },
      {
        date: "Friday, 31 July 2009",
        content: `We qualified to continue in the competition late yesterday. Our competition run today will be at 10:30am.`,
        images: [
          {
            src: "/images/sub_in_pool_verticle_sml.jpg",
            alt: "In dolphin pool",
            caption: "In dolphin pool",
          },
          {
            src: "/images/sub_on_crane_Harris2_sml.jpg",
            alt: "On crane (Harris)",
            caption: "On crane (Harris)",
          },
          {
            src: "/images/sub_on_crane_LM_Fischer_GEng_sml.jpg",
            alt: "On crane LM & Fischer",
            caption: "On crane LM & Fischer",
          },
          {
            src: "/images/sub_on_crane1_sml.jpg",
            alt: "Removing from crane",
            caption: "Removing from crane",
          },
          {
            src: "/images/sub_on_crane2_sml.jpg",
            alt: "Hanging",
            caption: "Hanging",
          },
          {
            src: "/images/sub_with_diver3_sml.jpg",
            alt: "Reattaching to crane",
            caption: "Reattaching to crane",
          },
        ],
      },
      {
        date: "Thursday, 30 July 2009",
        content: `Last night we tuned the PID in the hotel pool, but we are still having problems with controller that takes over when the DVL returns bad data. We use the accelerometers when the DVL data is bad, but can not get this controller to behave properly. This morning we will go into the competition pond and get some test images. We will also be working on the controllers and mission planners today.`,
      },
      {
        date: "Wednesday, 29 July 2009",
        content: `Subrat and Gautam worked through the night at the hotel pool. Several others got less than two hours of sleep. We have been having some problems with the Kalman filter. The sub was in the dolphin pool at the competition site (with Owen) for most of the day. Owen got a little too much sun and today is not feeling well (stomach problems).`,
      },
      {
        date: "Tuesday, 28 July 2009",
        content: `All the teams had a joint meeting today. There will be live internet video of the finals on Sunday from 4-7pm EST. A link will be posted at http://www.auvsi.org/competitions/water.cfm. There will also be a video update posted on Saturday and Sunday morning at this same site. We signed up to arrive at the competition site at 7am for each day of the competition.`,
      },
      {
        date: "Monday, 27 July 2009",
        content: `We have arrived in San Diego! None of our bags were lost by the airlines (a change from the last two years). Our submarine and equipment were waiting for us when we arrived at the hotel. One of the camera mounts was broken in transport. We glued it back together and hope it will hold.`,
      },
      {
        date: "Saturday, 18 July 2009 (10:16pm)",
        content: `It rained until about 11:30a. We didn't get over to the pool until 3:30p. The HPS (Human Powered Sub team's) tent was a really good investment (that they did and we benefited from). We should definitely get one of our own for next year. Threw the sub in the pool, and it's negatively buoyant. This is even with the new larger battery pods. The reason is the new batteries (which replace the batteries that were destroyed) are significantly heavier. So for now, we will again use the 2 pieces of foam underneath the front. It's good until it gets to about 10 feet, at which point it's not positively buoyant. We need to make a variety of those foam blocks and seal them like HPS did. The new depth sensor works great. We spend most the time trying to tune the depth and pitch again, then some time with the heading and strafers. We were able to capture images of the buoy, path, machine gun nest, briefcase, and some girls, all from different angles. Can Nic or Jose put those images on the shuttle SHAREME under Team Multimedia\mvBlueFox\? Tom's going to spend all tomorrow working on the hydrophones. He started at the beginning, porting the Quartus 7.2 project to Quartus 9.2. This way he can create a well-defined specification for the packet it is outputing, using the Active-HDL simulation. Then Tom will examine our C# serial capture code, determine if it is working in all conditions, and handling exceptions correctly. Then he will ensure the matlab code is being passed the right parameters and outputting the right information, with more error handling and status messages than we have now. We put it in the water today, and all we got were messages of "thread has exploded". This is not a description of angles and distance to the pinger. We'll be getting Brian's updated relay boards on Wednesday. We'll re-use a few of the components and the relays, but it should be a pretty quick job to get the new ones in, replacing the hot glued and non-solder masked ones. We get Tom's new motor driver cards on Wednesday. We hope to have those soldered up and be testing them by the end of the day. They are backwards compatible with our current board. We will also be getting our backup SuperSerial board Wednesday, but we don't plan to solder that up until we need it or get out to San Diego. Thursday we'll be getting the new motor driver baseboard. This will require moving around all the pins on the 36-pin slide and lock, and couple on one of the vertical connectors. To prevent us from losing our current working 36-pin slide and lock, in case we have to go back to the old baseboard, we would like to make a new 36-pin for the backplane side. This would entail creating cables of 2 USB, 1 ethernet, 16V power, 3 pins for the ball droppers and 3 pins for the shooters, and 3 pins for the motor controller RS-232. We know it's a lot more work and material, but if Tom's motor driver baseboard doesn't work, we want to be able to go back the the old design immediately. We'll only have Friday to test in the pool with it, to try to break it. As for the pool tomorrow, unless we have the accelerations working, or something new to test with vision, controls, or sensors, we won't be going. The Graham pool is open 11am to 7pm.`,
      },
      {
        date: "Saturday, 18 July 2009 (11:46am)",
        content: `The Graham pool is open at 11am. They'll close if it lightning occurs again. Check http://www.weather.com/weather/map/interactive/USFL0163?from=36hr_topnav_undeclared Does anyone have a canopy they can bring in case it does start to drizzle on us? We fixed all the blown up buffer chips on the motor driver baseboard and motor cards. So the motors spin again and the kill switch works. The DVL is outputting data again. Tom wants to do some serial code fixing for our sensors, so they are more fault tolerant. This entails resending all of the initialization information, so we are sure that the sensor is set up correctly. This kind of problem happened last week, and cost Gautam several hours of working time. It turns out that the IMU got put into polling mode instead of push mode. Polling requires CPU1 to send a request for every packet, while push (like push mode for email and text messaging) lets the sensor be put into continuous mode, and it will output packets as fast as it can (approx 80 Hz for the IMU). So this initialization will be set up for the DVL, IMU, and compass. Tom might also try to do the same for the camera settings, because it screws things up if the image output format on the camera randomly gets set to something than RGB888Packed (which Tom recalls happened in past years for no reason). At the pool today, we'll try to zero the depth sensor, so that 1 meter deep = 1 meter deep. Nic sent us the attached picture from his phone last night. Jose and Nic worked on vision for a while last night.`,
        images: [
          {
            src: "/images/screen_shot_sml.jpg",
            alt: "Screen shot with target recognition",
            caption: "Screen shot with target recognition",
          },
        ],
      },
      {
        date: "Tuesday, 14 July 2009",
        content: `The batteries from Hong Kong were delivered yesterday at 9:30a to UF Mail, and they're currently trying to find them, somewhere on campus. We should be getting them soon. We'll be getting the balancing taps for monitoring the individual battery packs tomorrow (we increased shipping of those from 2 day to overnight). When we get them, we'll need to cut the 2mm bullet connectors off, and crimp Anderson PowerPoles on them. Whoever does this, talk to Tom first so you don't blow yourself up. Then mechanicals will need to package them in the trays and mount with the relay system. We can go to the pool this afternoon for vision testing with the old pods and remaining 10Ahr + 4Ahr Maxamp lipos for battery power, or we can wait until new pods + balancing taps come in tomorrow. We will probably wait until tomorrow unless Software is stable enough to get good testing done today. Either way, I think we're back in business. A buffer chip blew up on one of the motor driver cards last night. We knew one blew because the on-card LEDs (one for each driver IC) indicating the status of the kill switch is permanently on. This is because all of the LEDs are active low and all of the buffer chips are open-drain outputs, thus, when a buffer chip blows, it pulls the common kill switch line for everything low. We still don't know why they blow, but the conditions under which this happened this time were: the 32V was on, but the 16V was not. THEREFORE, LET IT BE DECREED: 1) NEVER have the 32V power supply or batteries connected to the rear tray if the 16V power supply or batteries are not connected. Connect the 16V first. It is preferable to mate all of the connectors and turn on the supply/battery, but if one computer is on and we don't want to shut it down, you can hot plug 16V through Mini-Fit connectors (backplane plug type). 2) NEVER hot plug the rear tray with both the 16V and 32V on at the same time. This means, do not plug in extender cables if the 32V is on. Do not pull out the rear tray if the 32V is on. Do not push in the rear tray if the 32V is on. If it appears the tray is not seated correctly, do not attempt to reseat the tray while the 32V is on. If we need to reseat the rear tray, we must either turn off the 32V power supply OR turn off both batteries with the relay pods. The latter option will turn off the 16V power, so have the computers shut down before turning off the battery power. Subrat helped Tom design a new circuit that utilized individual transistors and protection diodes for the new motor driver card. The new motor driver cards are backwards compatible with the current motor driver cards, so it will work with our current motor driver baseboard or the next revision, if we can get the new baseboard design out by tomorrow. We'll be sending the left and right motor driver cards out today. The current motor driver baseboard still has these buffer chips, and we have blown only one of them. MECHANICALS (if you've read this far): This gives you a new task. Discover why the rear and front trays do not seat perfectly each time we insert them and design a solution. The problem may be that: 1) The Mini-Fit pins are worn from arcing or bent from misalignment OR 2) The plugs with male pins are not perfectly aligned with the receptacles with female pins due to the circuit board being too high or too low OR 3) The aluminum sheet comprising the backplanes is bent or warped OR 4) There is too much slop in the floating plug housings that the pins are misaligned by a full pin position OR 5) The tray is not strong enough, and flexes unevenly when pushed in. Tom has a suggestion (from his four years experiences with SubjuGator backplanes, doing backplane design while at Lockheed Martin, and having designed this backplane system). If you can take this on, let Tom know. Backplane datasheets are on the shuttle SHARME at Parts\Electrical\Connectors\Mini-Fit\.`,
      },
      {
        date: "Monday, 13 July 2009",
        content: `The paper is almost completed. We will send it out tonight before midnight (as required). We will test the new depth sensor today at the Graham (dormitory) pool. The pod relay system is complete and waiting for the new batteries to be integrated on the tray. The new motor driver boards should be sent out by tomorrow. They are backwards compatible with the existing baseboard. If we can get the new baseboard design by Wednesday, we will send it out; if not, we will live with our present baseboard.`,
      },
      {
        date: "Monday-Sunday, 6-12 July 2009",
        content: `The week started badly when we destroyed several LiPo batteries by leaving them on overnight. But this forced us to reevaluate our battery situation, which was fortuitous since we would have required 6-10 hours to get back in the water after running the batteries low. We found a source for much cheaper batteries at the cost of about half the total power capacity. The new batteries should be in by Tuesday (July 14). Our new battery pods and several small parts were sent out for annodization. We will pick them up Monday or Tuesday (July 13 or 14). We are still battling software problems, in the realm of image processing, memory leaks, and DLL handling. We still need to figure out how to handle all the different light conditions we can experience in the pool, otherwise our new algorithms might not work.`,
      },
      {
        date: "Friday-Sunday, 3-5 July 2009",
        content: `We are going out to the pool today (Sunday). We'll be gathering hydrophone data (or determining why it isn't working), capturing images of the briefcase at different angles and depths, experimenting with buoyancy and balance with the new pods and ensuring the controller doesn't mind the changes, capturing images with the imaging sonar (maybe, see below), and splashing around in the water on this beautiful day. The only thing that's not working is the serial communication for the Imaging Sonar. It's a half-duplex, RS-485 serial device powered off it's own 24V switching regulator. The trouble appears to be with the MAX3079E driver chip, and getting the control signals (RTS, CTS, TXEN, RXEN) to operate properly. The FT4232H USB Serial chip works fine, we can see it transmitting out the TX, but the line transceivers never seem to operate. We know it works with the Sealevel SeaCOM RS-485 hub, so we are going to try to sniff all of the signals on that hub and try to recreate them on the MAX3079E. The MAX3079E is also used to drive the full duplex RS-422 DVL, and that works fine. We believe it's just the control signals that's the problem. The external relay board is not ready for integration due to a footprint problem, but we'll be getting the new board on Tuesday. We should be able to have the microcontroller fully functional by then, and have it integrated in the pod this week. The major problem is going to be to the new motor driver boards and new motor driver baseboard. We don't believe we can reliably implement the new motor drivers (Allegro A3941 + external MOSFETs) to safely ensure a fully functional motor control system in time for the competition. The good news is, we haven't blown up motor drivers (the ST VNH3SP30-E integrated switch driver) in a long time, and as far as we can remember, not during actual usage. What has been blowing up, all over the place, are buffer/driver chips (TI SN74LVC07A). We're not quite sure why, and every time we can recall, the sub was on the bench. What we am going to do, is reroute the motor driver baseboard and motor controller cards. We will make sure we have the same mechanical layout and the same pinouts to the FPGA, so the FPGA card won't even need to be reprogrammed. We are going to 1) change the single 32V to 5V switching regulator with a switching regulator + linear regulator, 2) change the PCB middle layers to ground and power planes, 3) change the USB and network cable headers to incorporate differential routing with continuous ground planes underneath and use shielded Mini B USB headers, 3) place capacitors close to each chip, 4) utilize a power star topology and remove ground loops to the best of my ability, and 5) investigate using Analog Device's digital isolators instead of optoisolators, and more rugged open-drain buffer/drivers. This will probably slip the Monday night new board cutoff (Dr. Schwartz deadline for no new design purchases), but we feel it is extremely important to continue not blowing driver chips at random. We will endeavor to KISS and get it out as soon as possible.`,
      },
      {
        date: "Friday-Saturday, 3-4 July 2009",
        content: `The re-wiring and reintegration of the front tray is complete. We were able to pull out nearly a dozen unused cables. Replacing the 100 Mbit network switch with a Gigabit network switch appears to have greatly decreased our latency, specifically with regard to the motor controller communication.`,
      },
      {
        date: "Thursday, 2 July 2009",
        content: `The external relay boards should arrive tomorrow. Since there is no school tomorrow, we are going to arrange with FedEx to pick it up from their depot, since we don't think the school shipping office will be open. We will put in a DigiKey order today and overnight it for the components on the board. If these work, we can greatly simplify the wiring in the front of the sub. We'd like to get in the pool tomorrow or Saturday. We will send out the parts to Orlando for anodization on Tuesday. We hope to be able to get these new switch designs working in the battery pods before the metal goes out for anodiation. We won't get the metals back before Monday the 13th. We believe we blew up the USB hub chip on my superserial board yesterday, but we'll be getting a new hub chip in today. If it works, the board is fully functional.`,
      },
      {
        date: "Wednesday, 1 July 2009",
        content: `Our new battery pods were completed last week and water tested in the last few days. Our new battery pod straps were fabricated and installed today.`,
        images: [
          {
            src: "/images/pod_with_strap_mounted_sml.jpg",
            alt: "New battery pod/strap on sub",
            caption: "New battery pod/strap on sub",
          },
          {
            src: "/images/pod_with_strap_sml.jpg",
            alt: "New battery pod/strap",
            caption: "New battery pod/strap",
          },
          {
            src: "/images/pod_with_strap_gator_sml.jpg",
            alt: "Pod with aluminum Gator head",
            caption: "Pod with aluminum Gator head",
          },
        ],
      },
      {
        date: "Tuesday, 30 June 2009",
        content: `Our T-shirt design was just finalized.`,
        images: [
          {
            src: "/images/T-shirt_2009_sml.jpg",
            alt: "2009 T-shirt Design",
            caption: "2009 T-shirt Design",
          },
        ],
      },
      {
        date: "Monday, 22 June 2009",
        content: `Working SubjuGator system diagram.`,
        images: [
          {
            src: "/images/SystemDiag09Rev4_sml.png",
            alt: "System Diagram as of 22 June 2009",
            caption: "System Diagram as of 22 June 2009",
          },
        ],
      },
      {
        date: "Sunday, 21 June 2009",
        content: `Several of our team members left today for Washington, D.C. for the 10th International Submarine Races that start on Monday and run through Friday, June 26th. Our team members will return late Saturday night at which time we will have about four weeks remaining before our Autonomous Underwater Vehicle Competition.`,
      },
      {
        date: "Thursday, 18 June 2009",
        content: `Working SubjuGator system diagram was updated. See Monday, 22 June 2009, for a more recent version.`,
      },
      {
        date: "Tuesday, 16 June 2009",
        content: `We spent several hours at the pool tuning our controllers.`,
        images: [
          {
            src: "/images/Tuning1_sml.jpg",
            alt: "Tinkering",
            caption: "Tinkering",
          },
          {
            src: "/images/Tuning2_sml.jpg",
            alt: "Tom and Brian",
            caption: "Tom and Brian",
          },
          {
            src: "/images/Tuning3_sml.jpg",
            alt: "Nic tuning. Jose and Dan watching",
            caption: "Nic tuning. Jose and Dan watching",
          },
          {
            src: "/images/Tuning4_sml.jpg",
            alt: "Jose and Dana smiling",
            caption: "Jose and Dana smiling",
          },
          {
            src: "/images/Tuning5_sml.jpg",
            alt: "Dana and Tom adding disturbances to tune the controller",
            caption: "Dana and Tom adding disturbances to tune the controller",
          },
        ],
      },
      {
        date: "Thursday, 14 May 2009",
        content: `Newest sub CAD drawings. Transparent so that many of the internal features are visible.`,
        images: [
          {
            src: "/images/sub_transparent_front_1_sml.jpg",
            alt: "Port side",
            caption: "Port side",
          },
          {
            src: "/images/sub_transparent_front_2_sml.jpg",
            alt: "Bow. With cameras detached",
            caption: "Bow. With cameras detached",
          },
          {
            src: "/images/sub_transparent_back_1_sml.jpg",
            alt: "Starboard side",
            caption: "Starboard side",
          },
          {
            src: "/images/sub_transparent_back_2_sml.jpg",
            alt: "Starboard side",
            caption: "Starboard side",
          },
        ],
      },
      {
        date: "11-18 Apr 2009",
        content: `After having problems running sub in the pool, we traced the issue to corrosion on and inside our Fischer connectors. We have fixed the cause of this corrosion. We also found a problem with a crushed o-ring in our DVL.`,
        images: [
          {
            src: "/images/Fischer_corrosion1.jpg",
            alt: "External corrosion",
            caption: "External corrosion",
          },
          {
            src: "/images/Fischer_corrosion2.jpg",
            alt: "External corrosion",
            caption: "External corrosion",
          },
          {
            src: "/images/Fischer_corrosion3.jpg",
            alt: "Internal corrosion",
            caption: "Internal corrosion",
          },
          {
            src: "/images/Fischer_corrosion4.jpg",
            alt: "Internal corrosion",
            caption: "Internal corrosion",
          },
          {
            src: "/images/crushed_o-ring_sml.jpg",
            alt: "Crushed o-ring",
            caption: "Crushed o-ring",
          },
        ],
      },
      {
        date: "Wed, 15 Apr 2009",
        content: `This is our first day at the pool in quite a long time.`,
        images: [
          {
            src: "/images/First_Day_at_Pool_09_sml.jpg",
            alt: "SubjuGator with Hunter and Subrat",
            caption: "SubjuGator with Hunter and Subrat",
          },
          {
            src: "/images/At_Pool_sml.jpg",
            alt: "Open SubjuGator. Tom testing batteries",
            caption: "Open SubjuGator. Tom testing batteries",
          },
          {
            src: "/images/First_Dunk_09_sml.jpg",
            alt: "First pool dunk of 2009. (Hunter and Tom)",
            caption: "First pool dunk of 2009. (Hunter and Tom)",
          },
          {
            src: "/images/Sub_09a_sml.jpg",
            alt: "SubjuGator lookin' good!",
            caption: "SubjuGator lookin' good!",
          },
        ],
      },
    ],
  },
  2008: {
    year: 2008,
    image: "/images/sub08_logo_orange.jpg",
    imageCaption: "2008 SubjuGator Logo",
    entries: [
      {
        date: "8:30am (PST) on Sunday, 3 Aug 2008",
        content: `It is an overcast morning at the competition site. The air is clean and fresh. The teams here are rather quite compared to previous days, perhaps because of nervousness and anxiousness. Our practice time this morning is 9:20am; our competition time is 1pm.`,
      },
      {
        date: "10:20pm (PST) on Saturday, 2 Aug 2008",
        content: `We made it to the finals! We were the fourth ranked team before the finals. We also were the third ranked team from static judging on Friday. (Static judging points include presentation to the judges, the design of the submarine, the paper, the website, and the team uniform.

We were told that the finals can be viewed LIVE at http://www.auvsi.org/competitions/water.cfm at 11am-3pm.

Many pictures from the last few days can be seen here.`,
      },
      {
        date: "10:30pm (PST) on Tuesday, 30 July 2008",
        content: `Today we got out to the competition site for the first time and qualified for the next round on our first try. We are having some software problems, but will work on it all night to get these problems ironed out before tomorrows practice (we hope).`,
      },
      {
        date: "9:30pm (PST) on Tuesday, 30 July 2008",
        content: `Travel was a nightmare. We left our homes before 6am, got to Atlanta before 9am, and waited until after 6pm (due to several flight delays) to leave for San Diego. The night before, most of the team did not sleep at all. They almost all slept for several hours at the airport. While the rest slept, Jose had homework to finish.

When we got to San Diego, our luggage (and equipment) were no where to be found. And the airline did not know where the 16 items were! At 1am local time, they still did not know where our bags were. Eight of us had no change of clothes. At 9am the next morning, they still had no information. We went to the airport and found them.`,
        images: [
          {
            src: "/images/sleep_sml.jpg",
            alt: "Counterclockwise from top: Hunter (with reflective jacket), Zach, Don, Tom, Simon, Greg.",
            caption: "Counterclockwise from top: Hunter (with reflective jacket), Zach, Don, Tom, Simon, Greg.",
          },
          {
            src: "/images/Jose_HW_sml.jpg",
            alt: "No time for sleep for Jose -- homework time!",
            caption: "No time for sleep for Jose -- homework time!",
          },
        ],
      },
      {
        date: "11:30am (EST) on Saturday, 26 July 2008",
        content: `We finally got SubjuGator into a pool last night (and left the pool at about 3am). Testing went very well. We successfully tested depth and heading control, and "it's faster and more responsive than any heading controller I've seen on a sub." The Kalman filter is working well. The hydrophones are working better than ever. Today and Sunday we will spend most of the day (and night through morning) in the pool.

We will be leaving for San Diego at 7:10am (from the Gainesville airport) and SubjuGator will follow us, travelling with FedEx. We are a little worried about the new TSA restrictions with batteries, but according to the website and the manager of the Gainesville airport, we should not have any problems.`,
      },
      {
        date: "4:20pm (EST) on Wednesday, 23 July 2008",
        content: `We have not yet been in a pool. Last night we had another fire. The entire floor of our building still smells 16 hours later.`,
        images: [
          {
            src: "/images/fire_22July08_sml.jpg",
            alt: "Fire on 22 July 2008",
            caption: "Fire on 22 July 2008",
          },
        ],
      },
      {
        date: "12:50pm (EST) on Tuesday, 22 July 2008",
        content: `We have not yet been in a pool. Last night we ran the sub hard in our stock tank (i.e., bathtub) with no problems. We have successfully tested the compass calibration. We started testing our compass correction from current deflection software and the results look promising. We got linear curves of deflection versus current, and we should be able to subtract them out and prevent heading deflection. As it stands, our current deflection is -35 deg to 27 deg (HUGE!). The equations have been gathered and coded into the software, so later today we will start it up and see how it works.`,
      },
      {
        date: "5:40pm (EST) on Monday, 21 July 2008",
        content: `We have not yet been in a pool. Everything is working simultaneously now, from the six thrusters to all the sensors. Our 3-D simulator is also fully functional now. Hopefully we will be in a pool in the next 24 hours. (We had everything running in the stock tank, i.e., bathtub, yesterday and earlier today.)`,
      },
      {
        date: "7:10pm (EST) on Sunday, 20 July 2008",
        content: `We have not yet been in a pool. We heard the all too familiar sound of sizzling and popping of motor drivers late last night (the fourth time we have had a fire or a massive failure of parts in the 8 days). But the good news is that just prior to this event, we got ALL of our sensors talking ... finally: Compass, IMU, Depth Sensor, Hydrophone board, DVL. Previously we got both cameras working.`,
      },
      {
        date: "12:40pm (EST) on Monday, 14 July 2008",
        content: `We have not yet been in a pool. We had still another fire (our third in the last week) late last night. We believe that it was caused by sparking as we connected power to the electronics. We are adding a switch to better control the powering of our submarine.`,
      },
      {
        date: "3pm (EST) on Sunday, 13 July 2008",
        content: `We have not yet been in a pool. We had another fire yesterday. This was our second fire in the last week. The first was caused by shorting a battery connector to our aluminum battery pod rail. The result was (luckily) only a hole in a thumb. The fire last night (July 12th at 9pm) was caused by a fault in our motor drivers.`,
        images: [
          {
            src: "/images/blown_parts_sml.jpg",
            alt: "Blown IC's",
            caption: "Blown IC's",
          },
          {
            src: "/images/thumb_sml.jpg",
            alt: "Injured Thumb",
            caption: "Injured Thumb",
          },
        ],
      },
      {
        date: "From July 2007 through July 7, 2008",
        content: `When we left the 2007 competition, our plan was to improve the software, trying to more fully utilize Robotics Studio, to develop a 3-D simulator and to perhaps add an imaging sonar. At our first few meetings in July and August, 2007, we decided to add a second embedded dual-core CPU, to help with the image processing. This resulted in a domino effect cascade of other changes. First, with the second computer, we determined that more batteries would be necessary; but there was no more room inside the submarine for batteries. Two battery pods was the obvious solution, something we had considered in the previous year. But with the added front cross sectional area that the two battery pods required, we determined that more forward thrust would be needed. We found excellent thrusters, but we realized that new motor driver boards would be needed for these higher voltage thrusters.

With our lead hardware designers having graduated, the new hardware team re-evaluated all of the other home designed electronics and one by one re-designed EVERY BOARD IN THE submarine!

In addition, in order to mount the new thrusters and the battery pods, we needed a new exoskeleton to be designed and constructed, but also had our lead mechanical designer move on to other projects.

As a result of the above, the only parts of the 2007 SubjuGator that remain in use in 2008 SubjuGator are the main SubjuGator hull, the DVL, the 4 hydrophones (although now in a newly designed mount), the compass, the first embedded computer, and the two cameras and camera housings.`,
        images: [
          {
            src: "/images/battery_tray_sml.jpg",
            alt: "Battery Tray",
            caption: "Battery Tray",
          },
          {
            src: "/images/sub_1_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/sub_2_sml.jpg",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        date: "Monday, 16 July 2007",
        content: `Today we had our first our 2008 SubjuGator Team meeting. And so it begins. Go Gators!`,
      },
    ],
  },
  2007: {
    year: 2007,
    image: "/images/10_years.jpg",
    imageCaption: "10 Years Anniversary",
    entries: [
      {
        date: "10:30pm (EST) on Tuesday, 17 July",
        content: `Below are pictures from our victory and just afterwards. Pictures of each team member with the sub.`,
        images: [
          {
            src: "/images/pirate_dave_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/past_winners_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/flag_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/Subju_before_finals_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/Harris_UF_before_finals_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/Harris_UF_before_finals2_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/Subju_before_finals2_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/sponsors_after_finals_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/sponsors_team_after_finals_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris_team_after_finals_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris_after_final_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/team_chomp_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/banquet_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/check_sml.jpg",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        date: "4pm (PST) on Sunday, 15 July 2007",
        content: `We won!!`,
      },
      {
        date: "12:23pm (PST) on Sunday, 15 July",
        content: `At the end of the preliminaries, we are in first place! Our final run will be at 3:30pm (PST). We will be the last team in the water. UCF is in second place. Go Gators! Below are some pictures from taken today.`,
        images: [
          {
            src: "/images/sub-sponsors_before_finals_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/prelim_data_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/prelim_legend_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/pre-final_positions_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/final_schedule_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/score_board_sml.jpg",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        date: "11:44am (PST) on Sunday, 15 July",
        content: `At the end of the preliminaries, we are (unofficially) in first place! We were the only team to pick up the treasure chest during competition. But we are having several problems that we are still working on. We have not yet successfully run the full course; we hope the first time is in a few hours in the finals. Pray for us!`,
      },
      {
        date: "5pm (PST) on Saturday, 14 July",
        content: `We just had our second run and now have the top two scores so far. We went through the gate, we docked with the docking station, we followed some pipe, we found the treasure chest, grabbed it, and surfaced in the center of the recovery zone. We did not drop our markers due to an error in our search algorithm. We are confident that we can fix this problem before the finals tomorrow. The finals will start at around 1pm. Below are some pictures from yesterday, including the up-to-date rankings.`,
        images: [
          {
            src: "/images/arm_wrestling_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/before_prelims_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/work_jacob_asleep_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/kevin_asleep_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris6_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/end_prelims_rnd1_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/end_prelims_rnd2_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/early_prelim_results_sml.jpg",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        date: "11:45am (PST) on Saturday, 14 July",
        content: `We just had our first run and likely made the finals. We found the treasure chest, grabbed it, and surfaced in the center of the recovery zone.`,
      },
      {
        date: "11:59pm (PST) on Friday, 14 July",
        content: `Yesterday the results for the preliminaries (paper, web site, oral presentation, static judging, and uniforms) were announced. We are presently in third place, behind Cornell and ETS.

We chose two preliminary trials time today, one at 10am and the other at 4:20pm (PST). We all got plenty of sleep last night and are ready to put on a show. Yesterday we proved to ourselves that we could complete every individual task of the mission; but due to problems with the course (that will be corrected for the trials today), we did not complete the mission continuously.

Below are some pictures from yesterday, including the up-to-date rankings.`,
        images: [
          {
            src: "/images/rank_before_prelim_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/sponsors1_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris5_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris_table_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris1_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris2_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris3_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/harris4_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/display_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/display_left_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/display_right_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/display_sponsors_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/prelim_schedule.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/sponsors2_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/sponsors3_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/uf_above_water_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/uf_sml.jpg",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        date: "5:07pm (PST) on Thursday, 13 July",
        content: `Everything is going well today, our first day at the TRANSDEC Facility in Point Loma. Tuesday night we spent some time in the hotel pool, but the pool was so small that Wednesday evening we went to the bay (in SALT water). We were extremely encouraged by our success in the bay. We spent a few hours in the pool Wednesday night getting ready for today.

This morning during practice we picked up the treasure chest autonomously several times. We have also accomplished each of the individual tasks except marker dropping. We are rebuilding one of droppers, but if the new design does not work, we will have two backups ready to go.

Below are some pictures from the last two days. Due to the very poor internet we have at the competition site, the pictures may not be available for quite a while.`,
        images: [
          {
            src: "/images/TurtleOnBack_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/TurtleOnBack2_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/SubCalibration_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/CompassCalibration_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/OnTheShore_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/LeavingTheBay_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/TeamInTent_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/BackPackRow_sml.jpg",
            alt: "",
            caption: "",
          },
          {
            src: "/images/LightBuoy_sml.jpg",
            alt: "",
            caption: "",
          },
        ],
      },
      {
        date: "6pm (EST) on Monday, 9 July 2007",
        content: `Everyone (except me) is now sleeping (I hope). We leave at 4am on Tuesday, 10 July. We have two vans going to the Jacksonville airport, one student flying out of Miami and Dr. Schwartz leaving from Gainesville. Those flying out of Jax should arrive in San Diego by noon.

The boxed-up submarine and three other boxes were shipped today. Six or seven other boxes will be fly with the team.

We are anxious to get in the SPAWAR TRANSDEC facility to do final testing of our SubjuGator. We hope this is the best competition yet. Go Gators!`,
      },
    ],
  },
};

export const BLOG_YEARS = Object.keys(BLOG_DATA)
  .map((year) => Number(year))
  .sort((a, b) => b - a);
