const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema(
    {
      pizzaName: {
        type: String
      },
      createdBy: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      size: {
        type: String,
        default: 'Large'
      },
      toppings: [],
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false
    }
  );

// get total count of comment and replies on retreival
PizzaSchema.virtual('CommentCount').get(function() {
    return this.Comment.length;
});

// create the Pizza model using the PizzaSchema 

const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;