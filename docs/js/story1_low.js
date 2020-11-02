// story 1: catching fish
var story_id = 1;
var story_condition = 'low';
var story_begin = '<p> Lake Wilson is a small lake in upstate New York. Each summer,' +
    ' a few dozen families move into small cottages near the lake for the season. The' +
    ' vacationers enjoy boating, swimming, and fishing in the lake and they&#39;ve' +
    ' gotten to know each other over the course of many summers together. </p>' +
    ' <p> Most people who like to fish in Lake Wilson catch a few fish each day' +
    ' and cook them for dinner. These people buy their fishing gear from a small' +
    ' tackle shop on the main road. Up until now, the tackle shop has sold one' +
    ' kind of fishing hook. But it has recently starting selling a new kind of' +
    ' hook that allows people to catch many more fish than they would with the' + 
    ' older hook. </p>' +
    '<p> There are 20 people who regularly fish in Lake Wilson' +
    ' during the summer. If 7 or more people started using the new hook for' +
    ' fishing, then by the end of the summer, the entire fish population would' +
    ' collapse and there would be no more fish in Lake Wilson ever again. None of' +
    ' the vacationers would want that to happen. However, up to 3 people can use' +
    ' the new hooks with no decrease at all in the size and health of the fish' +
    ' population. Those people will be able to catch more fish more quickly,' +
    ' everyone else will still be able to catch the same amount of fish as before,' +
    ' and the fish population would continue to be exactly as large and as healthy' +
    ' as in past years. It is impossible to tell what hook someone is using from a' +
    ' distance, so if someone starts using the new hooks, no one else will know' +
    ' about it. No one has bought the new hooks yet, however. </p>' +
    '<p> John would like to use the new hooks because he would like to catch more' +
    ' fish faster. He is thinking about whether or not to buy the new hooks. John' +
    ' wants to find out what his neighbors think about the new hooks, so he decides' +
    ' he is going to visit the cottages of all the people who fish in Lake Wilson' +
    ' and ask them. John manages to talk to all 20 people who regularly fish in' +
    ' the lake. When John sits down with each person to talk about the new hooks,' +
    ' each person says something like this: ';
var story_end = '<p> John thinks to himself: <i> No one else is going to use' +
    ' the new hooks. Under these circumstances, it&#39;s OK for me to use the new' +
    ' hooks and catch more fish. </i> </p>';
var story = story_begin + '<i> "I&#39;m just not interested in using those new' +
    ' hooks. I really only need to catch a few fish a day, and I like to do that at' +
    ' a leisurely pace and spend all day fishing. I&#39;m not in any rush and I' +
    ' don&#39;t need to catch more fish. Besides, if everyone used the new hooks,' +
    ' all the fish would disappear from the lake. I don&#39;t want that to happen.' +
    ' But even if there were so many fish in the lake that everyone could use the' +
    ' new hooks, I wouldn&#39;t want to use them anyway." </i> </p>' + story_end;

var exclude1_prompt = 'How many people, besides John, would like to use the new' +
    ' hooks if there were no bad effects of doing so?';
var exclude2_prompt = 'How many people regularly fish in Lake Wilson in the summer?';
var exclude3_prompt = 'How many people, besides John, are actually going to use the' +
    ' new hooks?';
var exclude4_prompt = 'Will it make a difference to the fish population if John uses' +
    ' the new hooks?';
var exclude4_options = [
    'It will make the fish population more healthy.',
    'It will make the fish population less healthy.',
    'It will not make a difference to the fish population.'
];
var acceptability_prompt = 'Is it morally acceptable for John to use the new hook?';
var rule_prompt = 'Is there a rule on the lake that the new hook is forbidden?';
var know_prompt = 'If John starts using the new hook, how many people will' +
    'know about it?';

