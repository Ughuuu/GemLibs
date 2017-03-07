"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var plugin_component_1=require("../../gem/components/plugin.component"),install_component_1=require("../../gem/components/install.component"),features_component_1=require("../../gem/components/features.component"),home_component_1=require("../../gem/components/home.component"),search_component_1=require("../../gem/components/search.component");exports.AppRoutes=[{path:"features",component:features_component_1.FeaturesComponent},{path:"install",component:install_component_1.InstallComponent},{path:"search/:plugin",component:search_component_1.SearchComponent},{path:"plugin/:user/:plugin",component:plugin_component_1.PluginComponent},{path:"**",component:home_component_1.HomeComponent}];