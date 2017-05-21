var modules = {};

// root module name
modules.main = "pipz";

// centralized modules
modules.directives = modules.main.concat(".directives");
modules.filters = modules.main.concat(".filters");
modules.services = modules.main.concat(".services");

//controllers modules
modules.contacts = modules.main.concat(".contacts");
modules.info = modules.main.concat(".info");