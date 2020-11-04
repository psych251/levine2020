// story 2: hunting birds
var story_id = 2;
var story_condition = 'low';

var story_begin = '<p> Stonyville is a small forested town in upstate New York.' +
    ' Each summer, a few dozen families move into small cottages in Stonyville for' +
    ' the season. The vacationers enjoy hiking, camping, and hunting pheasants' +
    ' in the forest of Stonyville and they&#39;ve gotten to know each other over' +
    ' the course of many summers together. </p>' +
    ' <p> Most people who like to hunt shoot a few birds each day and cook them' +
    ' for dinner. These people buy their hunting gear from a small hunting shop' +
    ' on the main road. Up until now, the hunting shop has sold one kind of gun.' +
    ' But it has recently starting selling a new kind of gun that allows people' +
    ' to shoot more accurately and therefore hunt many more pheasants than they' +
    ' would with the older gun. </p>' +
    '<p> There are 20 people who regularly hunt for pheasants in the Stonyville' +
    ' forest during the summer. If 7 or more people started using the new gun' +
    ' for hunting, then by the end of the summer, the entire pheasant population' +
    ' would collapse and there would be no more pheasants in Stonyville ever' +
    ' again. None of the vacationers would want that to happen. However, up to' +
    ' 3 people can use the new gun with no decrease at all in the pheasant' +
    ' population. Those people will be able to hunt more pheasants more quickly,' +
    ' everyone else will still be able to hunt the same amount of pheasants as' +
    ' before, and the pheasant population would continue to be as healthy as in' +
    ' past years. It is impossible to tell what gun someone is using from a' +
    ' distance, so if someone starts using the new gun, no one else will know' +
    ' about it. No one has bought the new gun yet, however. </p>' +
    '<p> John would like to use the new gun because he would like to hunt more' +
    ' pheasants faster. He is thinking about whether or not to buy the new gun.' +
    ' John wants to find out what his neighbors think about the new gun, so he' +
    ' decides he is going to visit the cottages of all the people who hunt' +
    ' pheasants and ask them. John manages to talk to all 20 people who' +
    ' regularly hunt in Stonyville. When John sits down with each person to talk' +
    ' about the new gun, each person says something like this: </p>';
var story_end = '<p> John thinks to himself: <i> No one else is going to use' +
    ' the new gun. Under these circumstances, it&#39;s OK for me to use the new' +
    ' gun and hunt more pheasants. </i> </p>';
var story = story_begin + '<i> "I&#39;m just not interested in using that new gun.' +
    ' I really only need to catch a few pheasants a day, and I like to do that at' +
    ' a leisurely pace and spend all day hunting. I&#39;m not in any rush and I' +
    ' don&#39;t need more pheasants. Besides, if everyone used the new gun, all' +
    ' the pheasants would disappear from the forest. I don&#39;t want that to' +
    ' happen. But even if there were so many pheasants in the forest that' +
    ' everyone could use the new gun, I wouldn&#39;t want to use it anyway."' +
    '</i> </p>' + story_end;

var exclude1_prompt = 'How many people, besides John, would like to use the new' +
    ' gun if there were no bad effects of doing so?';
var exclude2_prompt = 'How many people regularly hunt for pheasants in the Stonyville' +
    ' forest in the summer?';
var exclude3_prompt = 'How many people, besides John, are actually going to use the' +
    ' new gun?';
var exclude4_prompt = 'Will it make a difference to the pheasant population if John' +
    ' uses the new gun?';
var exclude4_options = [
    'It will make the pheasant population more healthy.',
    'It will make the pheasant population less healthy.',
    'It will not make a difference to the pheasant population.'
];
var acceptability_prompt = 'Is it morally acceptable for John to use the new gun?';
var rule_prompt = 'Is there a rule in the forest that the new gun is forbidden?';
var know_prompt = 'If John starts using the new gun, how many people will' +
    ' know about it?';

