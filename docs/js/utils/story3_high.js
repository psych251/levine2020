// story 3: finding clams
var story_id = 3;
var story_condition = 'high';

var story_begin = '<p> Wilson Bay is a small bay on the coast of Oregon. Each' +
    ' summer, a few dozen families move into small cottages near the bay for the' +
    ' season. The vacationers enjoy boating, swimming, and digging for razor' +
    ' clams in the bay and theyv&#39;e gotten to know each other over the course' +
    ' of many summers together. </p>' +
    '<p> Most people who like to dig for clams in Wilson Bay' +
    ' catch about a dozen clams each day and cook them for dinner. These people' +
    ' buy their clamming gear from a small shop on the main road. Up until now,' +
    ' the shop has sold one kind of digging device, a clam tube made out of' +
    ' plastic. But it has recently starting selling a new kind of clam tube' +
    ' made out of aluminum. The new tube allows people to find many more clams' +
    ' than they would with the older tube. </p>' +
    ' <p> There are 20 people who regularly dig for clams in Wilson Bay during' +
    ' the summer. If 7 or more people started using the new tube for clamming,' +
    ' then by the end of the summer, the entire clam population would collapse' +
    ' and there would be no more clams in Wilson Bay ever again. None of the' +
    ' vacationers would want that to happen. However, up to 3 people can use the' +
    ' new tube with no decrease at all in the size and health of the clam' +
    ' population. Those people will be able to catch more clams more quickly,' +
    ' everyone else will still be able to catch the same amount of clams as' +
    ' before, and the clam population would continue to be exactly as large and' +
    ' as healthy as in past years. It is impossible to tell what tube someone is' +
    ' using from a distance, so if someone starts using the new tube, no one else' +
    ' will know about it. No one has bought the new tube yet, however. </p>' +
    '<p> John would like to use the new tube because he would' +
    ' like to catch more clams faster. He is thinking about whether or not to buy' +
    ' the new tube. John wants to find out what his neighbors think about the new' +
    ' tube, so he decides he is going to visit the cottages of all the people who' +
    ' go clamming in Wilson Bay and ask them. John manages to talk to all 20' +
    ' people who regularly go clamming in the Bay. When John sits down with each' +
    ' person to talk about the new tube, each person says something like this: </p>';
var story_end = '<p> John thinks to himself: <i> No one else is going to use' +
    ' the new tube. Under these circumstances, it&#39;s OK for me to use the new' +
    ' tube and catch more clams. </i> </p>';
var story = story_begin + '<i> "I would love to use that new tube to catch more' +
    ' clams faster, but what would happen if everyone did that? If everyone used' +
    ' the new tube, all the clams would disappear from the bay. I don&#39;t want' +
    ' that to happen, so I&#39;m not going to use the new tube." </i> </p>' +
    story_end; 

var exclude1_prompt = 'How many people, besides John, would like to use the new' +
    ' tube if there were no bad effects of doing so?';
var exclude2_prompt = 'How many people regularly dig for clams in Wilson Bay in' +
    ' the summer?';
var exclude3_prompt = 'How many people, besides John, are actually going to use the' +
    ' new tube?';
var exclude4_prompt = 'Will it make a difference to the clam population if John uses' +
    ' the new tube?';
var exclude4_options = [
    'It will make the clam population more healthy.',
    'It will make the clam population less healthy.',
    'It will not make a difference to the clam population.'
];
var acceptability_prompt = 'Is it morally acceptable for John to use the new tube?';
var rule_prompt = 'Is there a rule on the bay that the new tube is forbidden?';
var know_prompt = 'If John starts using the new tube, how many people will' +
    ' know about it?';

