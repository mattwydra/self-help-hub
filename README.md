# Self-Help Hub

## Overview
Self-Help Hub is a personal self-care web application designed to provide emotional support and motivation. Users can select a topic they need help with, such as heartbreak, motivation, or anxiety, and receive curated content based on what has personally helped me. Future iterations of this project will include an AI-powered chatbot trained on personalized responses.

## Features
- **Interactive Circular Menu**: Users select topics via an aesthetically pleasing circular button layout.
- **Dynamic Background**: Background images smoothly fade in and out, providing a calming atmosphere.
- **Custom Responses**: Clicking on a topic leads to unique, tailored responses, including quotes, images, videos, or personal advice.
- **Scalability**: Easily add new topics and content without breaking the layout.

## Future Enhancements
- **AI Integration**: Implement a personalized LLM (large language model) to generate responses tailored to the creator's experiences.
- **Database Support**: Store and retrieve user interactions to provide a more dynamic experience.
- **Theming Options**: Allow users to customize the visual style to match their preferences.

## Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/mattwydra/self-help-hub.git
   cd self-help-hub
   ```
2. Open `index.html` in a browser.
3. To host it online, deploy it via GitHub Pages:
   - Go to your repository settings.
   - Enable GitHub Pages under the "Pages" section.
   - Select the main branch and save.

## File Structure
```
/self-help-hub
│── index.html        # Main webpage
│── styles.css        # Styling
│── script.js         # JavaScript functionality
│── assets/           # Folder for txt files and rotating background images 
│── README.md         # This file
```

## Features in progress right now:


### [Social Anxiety](https://mattwydra.github.io/self-help-hub/endpoints/social_anxiety/index.html)

1. **Quick Self-Talk Phrases:**
   - "I've handled difficult conversations before and survived."
   - "People are usually focused on themselves, not judging me."
   - "I don't need to be perfect to be accepted."
   - "This feeling will pass - it always does."

2. **Breathing Technique:** 
   The 4-7-8 Method: Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. This activates the parasympathetic nervous system and can help reduce anxiety quickly.

3. **Outside-the-Box Activity:**
   "Social Anxiety Soundtrack" - Create a playlist of your favorite upbeat songs. Before entering anxiety-provoking situations, listen to one song while striking power poses (hands on hips, standing tall). This combines music therapy with physical posture change to boost confidence through both auditory and proprioceptive channels.

### [Heartbreak](https://mattwydra.github.io/self-help-hub/endpoints/heartbreak/index.html)

1. **Future Orientation Activity:**
   "The Empty Canvas" - Provide a digital canvas where users can add symbolic images representing things they want in their future. Start with a completely blank canvas and prompt them to add elements one by one (career goals, hobbies, places to visit, new experiences). This visually demonstrates that their future is unwritten and full of possibilities not dependent on their past relationship.

2. **Identity Reclamation:**
   "Who Was I Before?" exercise - Guide users to list activities, preferences, and parts of themselves they had before the relationship or that got diminished during it. Create a concrete action plan to reclaim one small element each day.

### [Loneliness](https://mattwydra.github.io/self-help-hub/endpoints/loneliness/index.html)

1. **Connection Without People:**
   "The Nature Bridge" - A guided visualization where users mentally connect with the natural world. Include prompts about feeling the shared atoms between their body and the trees, remembering that birds, animals, and plants are all around us in a connected ecosystem.

2. **Letter to Self:**
   Provide a template for users to write a compassionate letter to themselves from their future self, who has moved through this lonely period. Prompt them with questions about what wisdom they'd share and what they'd want their current self to know.

3. **Micro-Connection Challenge:**
   Suggest making one tiny human connection each day - smile at a cashier, comment on a social media post meaningfully, send a quick message to an old friend with no pressure for response. Frame it as building "connection muscle" gradually.

### [Depression](https://mattwydra.github.io/self-help-hub/endpoints/depression/index.html)

1. **Small Wins Tracker:**
   Create a visually rewarding digital tracker where users can log tiny wins each day. The interface should celebrate even minimal efforts (brushed teeth, opened curtains, drank water) with gentle positive reinforcement.

2. **5-Minute Sunlight Timer:**
   A simple timer that encourages just 5 minutes of exposure to natural light. Explain how this impacts circadian rhythm and mood, while emphasizing that it's an achievable goal even on the hardest days.

3. **"Just This" Mindfulness:**
   A guided exercise focused on completing just one small task with full presence. Instead of thinking about everything that needs doing, the activity guides users to focus completely on the sensory experience of one simple action like washing a single dish or folding one piece of clothing.

### [Boredom](https://mattwydra.github.io/self-help-hub/endpoints/boredom/index.html)

1. **Beyond Minigames:**
   "Curiosity Roulette" - A wheel that randomly selects unusual questions or tiny research projects designed to spark interest and learning. Examples: "Find out why flamingos are pink" or "Learn one phrase in a new language."

2. **Create-Don't-Consume Challenge:**
   Simple prompts for quick creative activities that take under 5 minutes but shift the user from passive consumption to active creation.

### [Egoism](https://mattwydra.github.io/self-help-hub/endpoints/egoism/index.html)

**For those who need to tone it down:**
- "Perspective Shift" - Interactive scenario where users read a situation, write their reaction, then are prompted to rewrite it from three different perspectives.
- "Silent Impact Journal" - Prompts to record moments when someone helped them without seeking recognition.

**For those who need to embrace it more:**
- "Evidence Collection" - Structured exercise to document personal achievements and positive qualities, with prompts to overcome dismissing their significance.
- "Boundaries Visualization" - Interactive tool to help users visualize and articulate their needs and boundaries in different contexts.

### [Failure](https://mattwydra.github.io/self-help-hub/endpoints/failure/index.html) 

1. **Failure Reframing Exercise**: Have users write about a recent failure, then guide them through reframing it as a learning opportunity with specific prompts.

2. **Famous Failure Stories**: Share brief stories of well-known people who faced significant failures before success, with reflection questions.

3. **Failure Portfolio**: Have users create a "portfolio" of their failures and what they learned from each one, emphasizing growth.

4. **Fear-to-Growth Ladder**: An interactive exercise where users identify a fear of failure, then create small, increasingly challenging steps to overcome it.

5. **Failure Visualization**: Guide users through visualizing "failing forward" in a situation they're anxious about.

### [Goal Setting](https://mattwydra.github.io/self-help-hub/endpoints/goal_setting/index.html)

1. **Hierarchical Goal Structure**
   - Users can set 3-year goals as their vision
   - Each 3-year goal breaks down into yearly goals
   - Yearly goals break down into quarterly goals
   - Quarterly goals break down into monthly goals
   - Monthly goals include space for weekly/daily action steps

2. **User-Friendly Interface**
   - Clean, modern design with a blue/white color scheme
   - Expand/collapse functionality for each goal level
   - Ability to add multiple goals at each tier
   - Remove button for deleting unwanted goals

3. **"I Don't Know How to Set Goals" Guidance**
   - Modal window with comprehensive goal-finding framework
   - Based on Robert Greene's "Mastery" methodology
   - Structured into four key areas of self-discovery
   - Thoughtful questions to help users identify meaningful goals

4. **Additional Features**
   - Save and print functionality
   - Responsive design that works on various screen sizes
   - Text areas for goal descriptions and importance reflection

### [Anger](https://mattwydra.github.io/self-help-hub/endpoints/anger/index.html)
### [Lost](https://mattwydra.github.io/self-help-hub/endpoints/lost/index.html)
### [Love](https://mattwydra.github.io/self-help-hub/endpoints/love/index.html)
### Meditation
### Overthinking
### Grit
### Tenacity
### Strength
### Lack of motivation