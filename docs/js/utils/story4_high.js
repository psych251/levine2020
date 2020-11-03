// story 4: foraging mushrooms
var story_id = 4;
var story_condition = 'high';

var story_begin = '<p> Stonyville is a small forested town in upstate New York.' +
    ' Each summer, a few dozen families move into small cottages in Stonyville' +
    ' for the season. The vacationers enjoy hiking, camping, and foraging for' +
    ' mushrooms in the forest of Stonyville and they&#39;ve gotten to know each' +
    ' other over the course of many summers together. </p>' +
    ' Most people who like to forage for mushrooms gather a basket of mushrooms' +
    ' each day and cook them for dinner. These people buy their foraging gear' +
    ' from a small shop on the main road. Up until now, the shop has sold one' +
    ' kind of mushroom foraging knife. But it has recently starting selling a' +
    ' new kind of knife that allows people to gather mushrooms more quickly and' +
    ' therefore get many more mushrooms than they would with the older knife. </p>' +
    '<p> There are 20 people who regularly forage for mushrooms in Stonyville' +
    ' during the summer. If 7 or more people started using the new knife for' +
    ' foraging, then by the end of the summer, the entire mushroom population' +
    ' would collapse and there would be no more mushrooms in Stonyville ever' +
    ' again. None of the vacationers would want that to happen. However, up to' +
    ' 3 people can use the new knife with no decrease at all in the mushroom' +
    ' population. Those people will be able to gather more mushrooms more' +
    ' quickly, everyone else will still be able to gather the same number of' +
    ' mushrooms as before, and the mushroom population would continue to be as' +
    ' healthy as in past years. It is impossible to tell what knife someone is' +
    ' using from a distance, so if someone starts using the new knife, no one' +
    ' else will know about it. No one has bought the new knife yet, however. </p>' +
    '<p> John would like to use the new knife because he would like to gather' +
    ' more mushrooms faster. He is thinking about whether or not to buy the new' +
    ' knife. John wants to find out what his neighbors think about the new knife,' +
    ' so he decides he is going to visit the cottages of all the people who' +
    ' forage for mushrooms and ask them. John manages to talk to all 20 people' +
    ' who regularly forage in the Stonyville. When John sits down with each person' +
    ' to talk about the new knife, each person says something like this: </p>';
var story_end = '<p> John thinks to himself: <i> No one else is going to use' +
    ' the new knife. Under these circumstances, it&#39;s OK for me to use the new' +
    ' knife and gather more mushrooms. </i> </p>';
var story = story_begin + '<i> "I would love to use that new knife to gather' +
    ' more mushrooms faster, but what would happen if everyone did that? If' +
    ' everyone used the new knife, all the mushrooms would disappear from the' +
    ' forest. I don&#39;t want that to happen, so I&#39;m not going to use' +
    ' the new knife." </i> </p>' + story_end; 

var exclude1_prompt = 'How many people, besides John, would like to use the new' +
    ' knife if there were no bad effects of doing so?';
var exclude2_prompt = 'How many people regularly forage for mushrooms in' +
    ' Stonyville in the summer?';
var exclude3_prompt = 'How many people, besides John, are actually going to use the' +
    ' new knife?';
var exclude4_prompt = 'Will it make a difference to the mushroom population if' +
    ' John uses the new knife?';
var exclude4_options = [
    'It will make the mushroom population more healthy.',
    'It will make the mushroom population less healthy.',
    'It will not make a difference to the mushroom population.'
];
var acceptability_prompt = 'Is it morally acceptable for John to use the new knife?';
var rule_prompt = 'Is there a rule in the forest that the new knife is forbidden?';
var know_prompt = 'If John starts using the new knife, how many people will' +
    'know about it?';

