(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['maids'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":22,"column":14},"end":{"line":26,"column":21}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"firstnames") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"firstnames") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + ",\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"thematic") : depth0)) != null ? lookupProperty(stack1,"imagewidth") : stack1), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    return "75";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"thematic") : depth0)) != null ? lookupProperty(stack1,"lefttextpadding") : stack1), depth0));
},"12":function(container,depth0,helpers,partials,data) {
    return "15";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <span class=\"question_titles\">Use cases:</span>\n              <ol>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"usecases") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":92,"column":16},"end":{"line":94,"column":25}}})) != null ? stack1 : "")
    + "              </ol>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"usecase") || (depth0 != null ? lookupProperty(depth0,"usecase") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"usecase","hash":{},"data":data,"loc":{"start":{"line":93,"column":20},"end":{"line":93,"column":31}}}) : helper)))
    + "</li>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "          <p>No keywords or definitions defined for this dataset.</p>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <table style=\"width:100%;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"definitions") : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":12},"end":{"line":113,"column":21}}})) != null ? stack1 : "")
    + "          </table>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr><td style=\"width:33%\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"definition") : depth0)) != null ? lookupProperty(stack1,"keyword") : stack1), depth0))
    + "</td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"definition") : depth0)) != null ? lookupProperty(stack1,"definition") : stack1), depth0))
    + alias2(((helper = (helper = lookupProperty(helpers,"addLinkDefinition") || (depth0 != null ? lookupProperty(depth0,"addLinkDefinition") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"addLinkDefinition","hash":{},"data":data,"loc":{"start":{"line":112,"column":94},"end":{"line":112,"column":115}}}) : helper)))
    + "</td></tr>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"research") : depth0)) != null ? lookupProperty(stack1,"main") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "            The author has not provided a main research question. If there are secondary question(s) this usually indicates that this dataset has not been collected for any specific purpose.\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"research") : depth0)) != null ? lookupProperty(stack1,"secondary") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "            The author has not provided a secondary research question. If there is also no main research question(s) this usually indicates that this dataset is still being defined.\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"slider\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"figures") : depth0),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":155,"column":12},"end":{"line":157,"column":21}}})) != null ? stack1 : "")
    + "          </div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <center><a href=\"./images/figures/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"figure") : depth0)) != null ? lookupProperty(stack1,"filename") : stack1), depth0))
    + "\" data-lightbox=\"slickfigures\" data-title=\"<em>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"figure") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</em><br />(Scroll down if required) "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"figure") : depth0)) != null ? lookupProperty(stack1,"legend") : stack1), depth0))
    + "\" data-alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"figure") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\"><img src=\"./images/figures/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"figure") : depth0)) != null ? lookupProperty(stack1,"filename") : stack1), depth0))
    + "\" />"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"figure") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</a></center>\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "          This dataset does not have any figures associated to it.\n";
},"35":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button class=\"collapsible\">Category "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + " ("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"code") : stack1), depth0))
    + ")</button>\n        <div class=\"content\">\n          <p>\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "\n          </p>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"entries") : stack1),{"name":"each","hash":{},"fn":container.program(36, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":185,"column":10},"end":{"line":195,"column":19}}})) != null ? stack1 : "")
    + "          <p><br /><br /><br /></p>\n        </div>\n";
},"36":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"collapsible collapsiblechild\">"
    + alias2(alias1(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"category") : depths[1])) != null ? lookupProperty(stack1,"code") : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entry") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + ": "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entry") : depth0)) != null ? lookupProperty(stack1,"question") : stack1), depth0))
    + " "
    + alias2(((helper = (helper = lookupProperty(helpers,"ifUnanswered") || (depth0 != null ? lookupProperty(depth0,"ifUnanswered") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ifUnanswered","hash":{},"data":data,"loc":{"start":{"line":186,"column":108},"end":{"line":186,"column":124}}}) : helper)))
    + "</button>\n          <div class=\"content\">\n            <center>\n              <table style=\"width: 90%\">\n                <tr><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entry") : depth0)) != null ? lookupProperty(stack1,"answer") : stack1), depth0))
    + "</td></tr>\n                <tr><td class=\"answeredonby\">By: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entry") : depth0)) != null ? lookupProperty(stack1,"by") : stack1), depth0))
    + "</td><td class=\"answeredonby\">On: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entry") : depth0)) != null ? lookupProperty(stack1,"on") : stack1), depth0))
    + "</td></tr>\n              </table>\n            </center>\n          </div>\n";
},"38":function(container,depth0,helpers,partials,data) {
    return "        <blockquote>\n          There appears to be no subsets defined. This MAIDS document is likely still under construction.\n        </blockquote>\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <blockquote>\n          The following subsets and their features are available in this dataset. The cartoon below demonstrates how subsets relate to one another. Click each subset to find out more about their purpose as well as detailed statistics on the features they describe.\n        </blockquote>\n        <center>\n          <a href=\"./images/figures/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subsetAssociations") : depth0)) != null ? lookupProperty(stack1,"filename") : stack1), depth0))
    + "\" data-lightbox=\"datasetassociations\" data-title=\"<em>Subset associations, depicting how subsets relate to one another.</em><br />(Scroll down if required) "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subsetAssociations") : depth0)) != null ? lookupProperty(stack1,"legend") : stack1), depth0))
    + "\" data-alt=\"Subset associations, depicting how subsets relate to one another.\"><img src=\"./images/figures/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subsetAssociations") : depth0)) != null ? lookupProperty(stack1,"filename") : stack1), depth0))
    + "\" /></a>\n        </center>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subsets") : depth0),{"name":"each","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":216,"column":8},"end":{"line":283,"column":17}}})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button class=\"collapsible\">Subset "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + ".  "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</button>\n        <div class=\"content\">\n          <center>\n            <table class=\"answeredonby\" style=\"width: 90%\">\n              <tr><td><b>Last updated on</b>: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"updated") : stack1), depth0))
    + "</td><td><b>Modality</b>: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"modality") : stack1), depth0))
    + "</td><td><b>File</b> format: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"format") : stack1), depth0))
    + "</td>\n              <tr><td><b>Size</b>: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"size") : stack1), depth0))
    + "</td><td><b>Derived from subset</b>: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"parentid") : stack1), depth0))
    + "</td><td>"
    + alias2(((helper = (helper = lookupProperty(helpers,"addLinkSubset") || (depth0 != null ? lookupProperty(depth0,"addLinkSubset") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"addLinkSubset","hash":{},"data":data,"loc":{"start":{"line":222,"column":115},"end":{"line":222,"column":132}}}) : helper)))
    + "</td></tr>\n              <tr><td colspan=\"3\"><b>Covariance</b>: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"covmat") : stack1), depth0))
    + "</td></tr>\n              <tr><td colspan=\"3\"><b>Models</b>: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"modsys") : stack1), depth0))
    + "</td></tr>\n            </table>\n          </center>\n          <p><br /></p>\n          <blockquote>Purpose: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"purpose") : stack1), depth0))
    + "</blockquote>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"features") : stack1),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":229,"column":10},"end":{"line":281,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <center>\n            <table id=\"dt"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" class=\"display featureTable\" style=\"width:90%\">\n              <thead>\n                <tr>\n                  <th>ID</th>\n                  <th>Introduced</th>\n                  <th>Name</th>\n                  <th>Values</th>\n                  <th>Unit</th>\n                  <th>Definition</th>\n                  <th>Purpose</th>\n                  <th>Encoding</th>\n                  <th>Parent(s)</th>\n                  <th>Meaning Na/Null/None</th>\n                  <th>Meaning Zero</th>\n                  <th>Meaning Blank/Void</th>\n                  <th>Sparsity</th>\n                  <th>Mean</th>\n                  <th>Std</th>\n                  <th>Modality</th>\n                  <th>Median</th>\n                  <th>IQR</th>\n                </tr>\n              </thead>\n              <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"subset") : depth0)) != null ? lookupProperty(stack1,"features") : stack1),{"name":"each","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":255,"column":16},"end":{"line":276,"column":25}}})) != null ? stack1 : "")
    + "              </tbody>\n            </table>\n          </center>\n          <p><br /></p>\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"date") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"values") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"unit") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"definition") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"purpose") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"encoding") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"parents") : stack1), depth0))
    + "(s)</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"meaningNaNullNone") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"meaningZero") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"meaningBlankVoid") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"sparsity") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"mean") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"std") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"modality") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"median") : stack1), depth0))
    + "</td>\n                  <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"feature") : depth0)) != null ? lookupProperty(stack1,"iqr") : stack1), depth0))
    + "</td>\n                </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container-fluid main-container\">\n\n    <!-- HEADER HEADER HEADER -->\n    <div class=\"paraHead\">\n      <div class=\"paraHeadLogo\">\n        <img src=\"./images/maids@3x.png\"/>\n      </div>\n    </div>\n\n    <!-- SUBTITLE SUBTITLE SUBTITLE -->\n    <div id=\"header\">\n      <center>\n        <h1 class=\"title toc-ignore\">\n          <div class=\"mytitle\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":21}}}) : helper)))
    + "\n          </div>\n        </h1>\n        <h4>\n            <p class=\"mysubtitle\">\n              by: \n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"authors") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":14},"end":{"line":27,"column":23}}})) != null ? stack1 : "")
    + "            </p>\n        </h4>\n        <p class=\"mysubtitle\">\n          <!-- <b>Provenance: </b> -->\n          (<a class=\"tooltip\"><b>?</b>\n            <span class=\"tooltiptext wide slate\">This is the breadcrumb for this document's provenance, i.e. the history of how this document was made. MAIDS Documents are derived from a template that implements the specification detailing the rules and best practices to create MAIDS Documents. All three of these entities (Document, Template, and Specification) can change over time. It is therefore necessary to track which version of each entity a MAIDS Document is based on. This ensures that the value of the description found in each MAIDS document can be preserved over the long term and allows their reuse.</span>\n          </a>)\n          <a class=\"tooltip\" href=\"https://github.com/PERSIMUNE-Health-Informatics/MAIDS-Specification\">\n            "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"provenance") : depth0)) != null ? lookupProperty(stack1,"specification") : stack1)) != null ? lookupProperty(stack1,"commit") : stack1), depth0))
    + "\n            <span class=\"tooltiptext wide slate\"><b>Provenance (MAIDS Specification): </b>The partial git commit hash for the MAIDS Specification used in the template's (`"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"provenance") : depth0)) != null ? lookupProperty(stack1,"template") : stack1)) != null ? lookupProperty(stack1,"commit") : stack1), depth0))
    + "`) design.</span>\n          </a> &rarr;\n          <a class=\"tooltip\" href=\"https://github.com/PERSIMUNE-Health-Informatics/MAIDS\">\n            "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"provenance") : depth0)) != null ? lookupProperty(stack1,"template") : stack1)) != null ? lookupProperty(stack1,"commit") : stack1), depth0))
    + "\n            <span class=\"tooltiptext wide slate\"><b>Provenance (MAIDS Template): </b>The partial git commit hash for the MAIDS Template used to initialise this dataset. Derived from MAIDS specification `"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"provenance") : depth0)) != null ? lookupProperty(stack1,"specification") : stack1)) != null ? lookupProperty(stack1,"commit") : stack1), depth0))
    + "`.</span>\n          </a> &rarr;\n          <a class=\"tooltip\">\n            v"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? lookupProperty(stack1,"scores") : stack1), depth0))
    + "."
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "."
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? lookupProperty(stack1,"questionnaire") : stack1), depth0))
    + "."
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? lookupProperty(stack1,"subsets") : stack1), depth0))
    + "."
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? lookupProperty(stack1,"synthetic") : stack1), depth0))
    + "\n            <span class=\"tooltiptext wide slate\"><b>Provenance (MAIDS Document): </b>The internal version string for <b>this</b> Medical AI Datasheet derived from template `"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"provenance") : depth0)) != null ? lookupProperty(stack1,"template") : stack1)) != null ? lookupProperty(stack1,"commit") : stack1), depth0))
    + "`. The compiled version string is read as, \"[scores].[description].[questionnaire].[subsets].[statistical]\". Each version number begins at 1 when a dataset is first described. Version numbers are incremented for each change (i.e. commit to the repository) that alters the respective section. Git commits in the repository should be tagged with this same compiled version string.</span>\n          </a>\n        </p>\n      </center>\n      <p><br></p>\n      <div class=\"score_container\">\n        <center>\n          <table>\n            <tr>\n              <td><img class=\"score_background\" src=\"./images/icons/score_docu.png\" /><div class=\"score_value mytitle\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"scores") : depth0)) != null ? lookupProperty(stack1,"document") : stack1)) != null ? lookupProperty(stack1,"score") : stack1), depth0))
    + "</div><div class=\"score_title mytitle\">Document score (<a class=\"tooltip\">?<span class=\"tooltiptext narrow cyan\">A score ranging between 1 and 3, with 3 being good enough to reproduce the dataset without seeing the original.</span></a>)</div></td>\n              <td><img class=\"score_background\" src=\"./images/icons/score_bias.png\" /><div class=\"score_value mytitle\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"scores") : depth0)) != null ? lookupProperty(stack1,"fairness") : stack1)) != null ? lookupProperty(stack1,"score") : stack1), depth0))
    + "</div><div class=\"score_title mytitle\">Fairness score (<a class=\"tooltip\">?<span class=\"tooltiptext narrow gold\">An independant score rating the fairness of the data collected with respect to the community or task it was collected for.</span></a>)</div></td>\n              <td><img class=\"score_background\" src=\"./images/icons/score_magn.png\" /><div class=\"score_value mytitle\">X<sup>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"scores") : depth0)) != null ? lookupProperty(stack1,"magnitude") : stack1)) != null ? lookupProperty(stack1,"score") : stack1), depth0))
    + "</sup></div><div class=\"score_title mytitle\">Magnitude score (<a class=\"tooltip\">?<span class=\"tooltiptext narrow avo\">The number of instances collected in orders of magnitude, i.e. X<sup>3</sup> indicates a collection of between 1000 and 9999 instances.</span></a>)</div></td>\n              <td><img class=\"score_background\" src=\"./images/icons/score_synth.png\" /><div class=\"score_value mytitle\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"scores") : depth0)) != null ? lookupProperty(stack1,"synthetic") : stack1)) != null ? lookupProperty(stack1,"score") : stack1), depth0))
    + "</div><div class=\"score_title mytitle\">Synthetic score (<a class=\"tooltip\">?<span class=\"tooltiptext narrow lilac\">A score ranging between <em>E</em> and <em>A</em>, with <em>A</em> indicating that the included synthetic data is good enough to draw true conclusions on. </span></a>)</div></td>\n            </tr>\n          </table>\n        </center>\n      </div>\n      <center>\n        <br />\n        <a href=\"./maids.pdf\"><img src=\"./images/icons/pdf_64.png\" /></a> \n        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"repository") || (depth0 != null ? lookupProperty(depth0,"repository") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repository","hash":{},"data":data,"loc":{"start":{"line":65,"column":17},"end":{"line":65,"column":31}}}) : helper)))
    + "\"><img src=\"./images/icons/repo_64.png\" /></a> \n        <a href='' onclick=\"Social.facebook('"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":66,"column":45},"end":{"line":66,"column":54}}}) : helper)))
    + "','./images/thematic.png','"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"briefmotivation") : depth0)) != null ? lookupProperty(stack1,"main") : stack1), depth0))
    + "')\"><img src=\"./images/icons/facebook_64.png\" /></a>\n        <a href='' onclick=\"Social.twitter('"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":67,"column":44},"end":{"line":67,"column":53}}}) : helper)))
    + "')\"><img src=\"./images/icons/twitter_64.png\" /></a>\n        <a href='' onclick=\"Social.linkedin('"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":68,"column":45},"end":{"line":68,"column":54}}}) : helper)))
    + "')\"><img src=\"./images/icons/linkedin_64.png\" /></a>\n        <p class=\"mysubtitle\">Download the report, access the repository, share on social media!</p>\n        <p class=\"mysubtitle\">This site is only a summary: Release dates, version control, discussions, and much more are available through the repository.</p>\n      </center>\n      <p><br></p>\n    </div>\n\n    <!-- MAIN MAIN MAIN -->\n    <div class=\"mycontent\">\n      <div id=\"motivation\" class=\"section level1\">\n        <h1>Motivation</h1>\n        <hr />\n        <table style=\"width:100%;\">\n          <tr style=\"vertical-align: top; padding: 0px;\">\n            <td style=\"width: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"thematic") : depth0)) != null ? lookupProperty(stack1,"imagewidth") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":82,"column":30},"end":{"line":82,"column":97}}})) != null ? stack1 : "")
    + "px\">\n              <img src=\"./images/figures/"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"thematic") : depth0)) != null ? lookupProperty(stack1,"filename") : stack1), depth0))
    + "\" style=\"width: 100%\" alt=\"\" /> <!-- Best to use a squared PNG. Recommended size of 500 x 500 px. If required, cite the image within the 'alt' text. -->\n            </td>\n            <td style=\"padding-left: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"thematic") : depth0)) != null ? lookupProperty(stack1,"lefttextpadding") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.program(12, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":85,"column":37},"end":{"line":85,"column":114}}})) != null ? stack1 : "")
    + "px;\">\n              <p>\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"abstract") || (depth0 != null ? lookupProperty(depth0,"abstract") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abstract","hash":{},"data":data,"loc":{"start":{"line":87,"column":16},"end":{"line":87,"column":28}}}) : helper)))
    + "\n              </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"usecases") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":14},"end":{"line":96,"column":21}}})) != null ? stack1 : "")
    + "            </td>\n          </tr>\n        </table>\n      </div>\n\n      <div id=\"keywords-and-definitions\" class=\"section level1\">\n        <hr />\n        <button class=\"collapsible\">Keywords and definitions</button>\n        <div class=\"content\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"definitions") : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":106,"column":10},"end":{"line":108,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"definitions") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":10},"end":{"line":115,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n\n      <div id=\"research-questions\" class=\"section level1\">\n        <h1>Research questions</h1>\n        <hr />\n        <blockquote>\n          <p>The following questions are given by the authors of this dataset as a guide, i.e. these questions reflect 'why' the dataset was created in the first place. Feel free to address these questions directly or to formulate your own hypotheses.</p>\n        </blockquote>\n        <h4 class=\"question_titles\">Main research questions</h4>\n          <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"research") : depth0)) != null ? lookupProperty(stack1,"main") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":12},"end":{"line":129,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"research") : depth0)) != null ? lookupProperty(stack1,"main") : stack1),{"name":"unless","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":12},"end":{"line":132,"column":23}}})) != null ? stack1 : "")
    + "          </p>\n        <h4 class=\"question_titles\">Secondary research questions</h4>\n          <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"research") : depth0)) != null ? lookupProperty(stack1,"secondary") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":136,"column":12},"end":{"line":138,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"research") : depth0)) != null ? lookupProperty(stack1,"secondary") : stack1),{"name":"unless","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":139,"column":12},"end":{"line":141,"column":23}}})) != null ? stack1 : "")
    + "          </p>\n      </div>\n\n      <div id=\"figures\" class=\"section level1\">\n        <h1>Figures</h1>\n        <hr />\n        <blockquote>\n          Click (or tap) a figure to enlarge where you will also find a descriptive legend below it's title.\n          Click and drag (or swipe) to scroll through the gallery.\n        </blockquote>\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"figures") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":153,"column":10},"end":{"line":159,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"figures") : depth0),{"name":"unless","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":160,"column":10},"end":{"line":162,"column":21}}})) != null ? stack1 : "")
    + "        </p>\n      </div>\n\n      <div id=\"purpose-ethics\" class=\"section level1\">\n        <h1>Questionnaire</h1>\n        <hr />\n        <blockquote>\n          The following 7 categories list answers from the authors of this dataset to 59 standardised questions. Click each category to find out more. Unanswered questions are marked.\n        </blockquote>\n        <button class=\"collapsible\" style=\"background-color: rgb(104, 102, 133);\">Concept of MAIDS as an extension of \"Datasheets for datasets\"</button>\n        <div class=\"content\">\n          <p>The concept of a Medical AI Data Sheet (MAIDS) is inspired by the work of <a ref=\"https://arxiv.org/abs/1803.09010v3\">Gebru et al., 19 Mar 2020 [arXiv:1803.0901v7]</a>, which collects the thoughts and ideas across the data community on how best to communicate datasets to maximise their value and inspire future work and collaboration. MAIDS is intended to encourage open and transparent communication of data assets while maintaining high standards of data security when required by regulatory, ethical or other legal concerns.</p>\n          <p>A dataset's value is increased by thoughtful description of the motivation behind creating the dataset in the first place, the composition of the dataset and how it was collected, whether any preprocessing / cleaning / labeling was done, intended uses of the data, and how the dataset is intended to be distributed and maintained. Transparency on these components neither harms the impact data owners might otherwise achieve by hiding such information nor does it harm anyone described by the underlying data itself. Thus, any such descriptions may be freely shared with interested data consumers (a.k.a. the public) and by this dissemination, safely increase the scientific value of the dataset.</p>\n          <p>On the other hand, a dataset's value is decreased when avoiding proper description of these topics as it can lead to bias and discrimination (intended or not), improper use/research, technical misunderstanding, forgotten provenance, unsafe exposure, etc.</p>\n          <p>MAIDS is a principled extension of these ideas targeted at clinical research and designed to allow the communication and considered debate of datasets without exposing sensitive data. The goal is to standardize this process as much as possible to avoid uninformed decisions and approach data analysis sooner, and with greater confidence.</p>\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(35, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":179,"column":8},"end":{"line":198,"column":17}}})) != null ? stack1 : "")
    + "      </div>\n      \n      <div id=\"subsets-and-features\" class=\"section level1\">\n        <h1>Subsets and features</h1>\n        <hr />\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"subsets") : depth0),{"name":"unless","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":204,"column":8},"end":{"line":208,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subsets") : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":209,"column":8},"end":{"line":284,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n      <p><br /><br /></p>\n    </div>\n\n    <!-- DOCUMENT SCORE again-->\n\n    <div id=\"header\">\n      <p><br></p>\n      <div class=\"score_container\">\n        <center>\n          <table>\n            <tr>\n              <td><img class=\"score_background\" src=\"./images/icons/score_docu.png\" /><div class=\"score_value mytitle\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"scores") : depth0)) != null ? lookupProperty(stack1,"document") : stack1)) != null ? lookupProperty(stack1,"score") : stack1), depth0))
    + "</div><div class=\"score_title mytitle\">Document score (<a class=\"tooltip\">?<span class=\"tooltiptext narrow cyan\">A score ranging between 1 and 3, with 3 being good enough to reproduce the dataset without seeing the original.</span></a>)</div></td>\n              <td><img class=\"score_background\" src=\"./images/icons/score_bias.png\" /><div class=\"score_value mytitle\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"scores") : depth0)) != null ? lookupProperty(stack1,"fairness") : stack1)) != null ? lookupProperty(stack1,"score") : stack1), depth0))
    + "</div><div class=\"score_title mytitle\">Fairness score (<a class=\"tooltip\">?<span class=\"tooltiptext narrow gold\">An independant score rating the fairness of the data collected with respect to the community or task it was collected for.</span></a>)</div></td>\n              <td><img class=\"score_background\" src=\"./images/icons/score_magn.png\" /><div class=\"score_value mytitle\">X<sup>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"scores") : depth0)) != null ? lookupProperty(stack1,"magnitude") : stack1)) != null ? lookupProperty(stack1,"score") : stack1), depth0))
    + "</sup></div><div class=\"score_title mytitle\">Magnitude score (<a class=\"tooltip\">?<span class=\"tooltiptext narrow avo\">The number of instances collected in orders of magnitude, i.e. X<sup>3</sup> indicates a collection of between 1000 and 9999 instances.</span></a>)</div></td>\n              <td><img class=\"score_background\" src=\"./images/icons/score_synth.png\" /><div class=\"score_value mytitle\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"scores") : depth0)) != null ? lookupProperty(stack1,"synthetic") : stack1)) != null ? lookupProperty(stack1,"score") : stack1), depth0))
    + "</div><div class=\"score_title mytitle\">Synthetic score (<a class=\"tooltip\">?<span class=\"tooltiptext narrow lilac\">A score ranging between <em>E</em> and <em>A</em>, with <em>A</em> indicating that the included synthetic data is good enough to draw true conclusions on. </span></a>)</div></td>\n            </tr>\n          </table>\n        </center>\n      </div>\n    </div>\n\n    <!-- FOOTER FOOTER FOOTER -->\n    <div class=\"paraFoot\"></div>\n</div>";
},"useData":true,"useDepths":true});
})();