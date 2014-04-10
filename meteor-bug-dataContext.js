Subjects = new Meteor.Collection('mbd-subjects');

if (Meteor.isServer) {
  if (Subjects.find().count() === 0) {
    Subjects.insert({title: 'bug investigation'});
  }
}

if (Meteor.isClient) {
  Template.mainTpl.helpers({
    subjects: function() {
      return Subjects.find();  
    },
    
    getSubTpl: function() {
       return Template.subTpl;
    }
  });
  
  Template.subTpl.rendered = function() {
ee = this.data;    
    var tpl = Template.dynTpl,
        rendered = UI.renderWithData(tpl, this.data).render(),
        html = rendered.toHTML();
    
    console.log(html);
  };
  
  Template.dynTpl.helpers({
    helperThatReturnTrue: function() {
      if (this.title) {
        return true;
      }
      
      return false;
    }
  });
}
