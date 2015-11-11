Meteor.publish('recipes', function publishFunction(){
    return Recipes.find();
});

Meteor.publish('singleRecipe', function publishFunction(id){
    check(id, String);
    return Recipes.find({_id: id});
});