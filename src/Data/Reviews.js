export const reviews = [
    "I like Matt's relaxed attitude; he makes it easy for students to open up about themselves, but he doesn't try to force that. It makes for a good learning environment.",
    "I like the way you explain and show how to do everything and the fact that you will look something up and find an answer for us when you dont have an answer",
    "Matt really shows concern for his students form the start. He didn't see my name on the Slack channel for our class. When I check my email, he had try three time (I couldn’t check my email for two day)to reach me  to let me know about it and to help.",
    "I love how he answers everyone's questions in detail.",
    "Matt is very good at give suggestion, follows up with answers to students questions that he can not answer right way. Also today at the end of today class he invited to stay those that wanted to learn how to use VS cold short-cuts.",
    "I don't have complaints. He's approachable and willing to assist.",
    "Great attitude and  availability. Willing to learn with us.",
    "So far, so good.  Matt answers everyone's questions, and does everything he can to keep people engaged, without making things stressful.",
    "I appreciate how he goes out of his way to answer questions, even those regarding content not covered.",
    "So, I posted a question about JavaScript that was completely tangential to the lesson in our Slack channel this week.  Matt responded almost immediately, explained that JavaScript doesn't have a quick and easy way to do what I wanted to do, and then explained--clearly and in detail--how to make it happen by combining a handful of existing functions. This led to me creating a reusable function that I saved to a .js file, and can copy into future files whenever I need it.",
    "I absolutely loved that instead of just looking at slides he actually showed us what it all meant in Visual Studio Code. Helped me grasp everything a lot better! Only thing I wish we did was go back to each slide after every example had been explained. But he did explain all the content of the slides within VSC which was very important for my understanding.",
    "Very concise and to the point, coming from a fellow educator, he cares about what he's teaching. Great instruction so far!",
    "CSS has always been the challenge for me. I can program functionality and layout but the design aspect of CSS has always been weird. With the instruction I got, I don't need to use in-line styles anymore.",
    "I am learning so much. Its a lot of information but I am really thankful for Matt's patience",
    "Matt always spends extra time on satruday's for anyone one with remaining questions after our zoom meetings. I really appreciate his effort to stay and help his students.",
    "Very good presentation skills and extremely knowledgeable. Very helpful when students need assistance with workshop projects and on slack.",
    "Great workshops, always willing to answer questions or help with a problem.",
    "Thanks for being patient with everyone and taking the extra time to make sure we are on schedule for the week.",
    "Matt was absolutely the best. Excellent at relaying concepts - in particular, complex concepts - in simple, easily-digestible fashion. Extremely patient, thorough, and responsive. Cannot recommend him enough.",
    "Matt continues to be energetically supportive of each of us, acknowledging that there's a lot of information to process.",
    "Another great week of communication and Live Workshop work with Matt! Extremely attentive and thorough.",
    "Keep up the good work. Love the extra care you put into the courses beyond what's required.",
    "It is clear the instructor had knowledge and experience with the HTML.  His feedback was very helpful and appreciated.",
    "My instructor was very knowledgeable, answered questions that students had, and made sure students understood the lesson before going forward.",
    "He is a very good instructor.  He has excellent follow up and he goes above and beyond to lead the students without doin the work for them.",
    "Matt helped me tremendously with understanding/explaining the content.",
    "I appreciate the time you put into explaining the assignment/coursework on the workshop.  Don't worry about going over the hour and cutting into the alotted time for the assignment. We get so much more from you than the provided videos (not that they are bad). If we didn't value your teaching we could have just done youtube videos.  I really appreciate you going above and beyond providing more time with us than the allotted four hours.",
    "My instructor was very informative, knowledgeable, and was available and able to answer questions.",
    "My instructor is great. He works with us during the workshops and answers as many questions that we might have so we walk away with more than what the slides have. This is great for me, because he's made it easier to grasp some of the more difficult concepts.",
    "I learned a lot from Matt during this course. He was very personable, patient and easy to understand!",
    "Matt is a very patent and helpful instructor who cares about the understanding of his students.",
    "Instructor was very knowledgable, always willing to help, and actually explained concepts in depth.",
    "Thanks, Matt for answering all of our questions and staying late to help teach us Emmit shortcuts.",
    "I think that the instructor is very engaging with students, really wants to make sure that we're all on the same page and moving along the right direction.",
    "instructor is doing his best to make sure every student is on the same page, and moving at the same pace, no one left behind",
    "Has a good deal of patience and humbly give thorough answers to all questions.",
    "This has been one of the best online classes I have taken, thus far. Matt is very patient and considerate to the needs of the class.",
    "I really appreciate your positive attitude and genuine passion to try to help us.",
    "Great instructor! Explains things so that it is easily understandable. Great online class!",
    "The class ran smoothly. I appreciate his openness and patience.",
    "Instructor is great! Explains everything to where it is easily understandable. Gives alot of helpful pointers.",
    "Instructor is great. Never fails to provide all needed information and interact with everyone in the class.",
    "Matt has been an amazing instructor! Keep up the great work! Wishing he would be teaching us in the fullstack course.  Really loved all the feedback and was given in a positive and helpful manner. Really took time out to make sure we understood the material. Great Job!!!",
    "Matt Taylor is one of the best instructors I have ever had. he is very knowledgeable, approachable and up beat individual. His feedback was greatly appreciated and helped me realize the minor adjustments that were needed. I leave this bootcamp feeling like I am ready to next the next step to Full Stack. I just wish Matt was going to be my instructor there.",
]

const shuffle = (arr) => {
    let currentIndex = arr.length, randomIndex;
  
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

export const randomizedReviews = shuffle(reviews).slice(0, 20)