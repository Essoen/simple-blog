/**
 * Created by esso on 16.05.15.
 */

Template.Menu.helpers({
    activeIfTemplateIs: function (template) {
        return template === Router.current().lookupTemplate() ? 'active' : '';
    }
});