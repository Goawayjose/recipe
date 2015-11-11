Recipes = new Mongo.Collection('recipes');

Recipes.allow({
   insert: function(userId, doc) {
       return !!userId;
   }
});

Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    
    amount: {
        type: String
    }
});



RecipeSchema = new SimpleSchema({
   name: {
       type: String,
       label: "name"
   },
    
    Desc: {
        type: String,
        label: "description"
    },
    
    ingredients: {
        type: [Ingredient]
    },
    
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    
    Author: {
        type: String,
        label: "author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
                                                
});

Recipes.attachSchema( RecipeSchema );      