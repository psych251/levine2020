// story 5: trapping rabbits
var story_id = 5;
var story_condition = 'low';

var story_begin = '<p> Stonyville is a small forested town in upstate New York.' +
    ' Each summer, a few dozen families move into small cottages in Stonyville' +
    ' for the season. The vacationers enjoy hiking, camping, and trapping' +
    ' rabbits in the forest of Stonyville and they&#39;ve gotten to know each' +
    ' other over the course of many summers together. </p>' +
    '<p> Most people who like to trap rabbits in the Stonyville forest catch' +
    ' about a few rabbits each day and cook them for dinner. These people buy' +
    ' their traps from a small hunting shop on the main road. Up until now, the' +
    ' shop has sold one kind of trap. But it has recently starting selling a' +
    ' new kind of trap that allows people to catch many more rabbits than they' +
    ' would with the older trap. </p>' +
    ' There are 20 people who regularly trap rabbits in the Stonyville forest' +
    ' during the summer. If 7 or more people started using the new traps for' +
    ' hunting, then by the end of the summer, the entire rabbit population would' +
    ' collapse and there would be no more rabbits in the Stonyville forest ever' +
    ' again. None of the vacationers would want that to happen. However, up to' +
    ' 3 people can use the new traps with no decrease at all in the size and' +
    ' health of the rabbit population. Those people will be able to catch more' +
    ' rabbits more quickly, everyone else will still be able to catch the same' +
    ' amount of rabbits as before, and the rabbit population would continue to' +
    ' be exactly as large and as healthy as in past years. It is impossible to' +
    ' tell what trap someone is using from a distance, so if someone starts using' +
    ' the new traps, no one else will know about it. No one has bought the new' +
    ' traps yet, however. </p>' +
    '<p> John would like to use the new traps because he would like to catch' +
    ' more rabbits faster. He is thinking about whether or not to buy the new' +
    ' traps. John wants to find out what his neighbors think about the new' +
    ' trap, so he decides he is going to visit the cottages of all the people' +
    ' who trap rabbits and ask them. John manages to talk to all 20 people who' +
    ' regularly trap rabbits in the Stonyville forest. When John sits down with' +
    ' each person to talk about the new traps, each person says something like' +
    ' this: </p>';
var story_end = '<p> John thinks to himself: <i> No one else is going to use' +
    ' the new traps. Under these circumstances, it&#39;s OK for me to use the new' +
    ' traps and catch more rabbits. </i> </p>';
var story = story_begin + '<i> "I&#39;m just not interested in using those new' +
    ' traps. I really only need to catch a few rabbits a day, and I like to do' +
    ' that at a leisurely pace and spend all day hunting. I&#39;m not in any rush' +
    ' and I don&#39;t need to catch more rabbits. Besides, if everyone used the' +
    ' new traps, all the rabbits would disappear from the forest. I don&#39;t' +
    ' want that to happen. But even if there were so many rabbits in the forest' +
    ' that everyone could use the new traps, I wouldn&#39;t want to use them' +
    ' anyway."</i> </p>' + story_end;

var exclude1_prompt = 'How many people, besides John, would like to use the new' +
    ' traps if there were no bad effects of doing so?';
var exclude2_prompt = 'How many people regularly trap rabbits in the Stonyville' +
    ' forest in the summer?';
var exclude3_prompt = 'How many people, besides John, are actually going to use the' +
    ' new traps?';
var exclude4_prompt = 'Will it make a difference to the rabbit population if John' +
    ' uses the new traps?';
var exclude4_options = [
    'It will make the rabbit population more healthy.',
    'It will make the rabbit population less healthy.',
    'It will not make a difference to the rabbit population.'
];
var acceptability_prompt = 'Is it morally acceptable for John to use the new traps?';
var rule_prompt = 'Is there a rule in the forest that the new trap is forbidden?';
var know_prompt = 'If John starts using the new traps, how many people will' +
    ' know about it?';

