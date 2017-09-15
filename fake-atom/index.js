module.exports.CompositeDisposable = function() {};

module.exports.packages = {
    isPackageLoaded: function(pkgName) {
        return false;
    }
};

module.exports.project = {
    getPaths: function() {
        return [""];
    }
};

module.exports.notifications = {
    addSuccess: function(msg) {
        console.log(msg);
    },
    addInfo: function(msg) {
        console.info(msg);
    },
    addWarning: function(msg) {
        console.warn(msg);
    },
    addError: function(msg) {
        console.error(msg);
    }
};

let usedPackage;

module.exports.use = function(name, pkg, config) {
    usedPackage = pkg;
    usedPackage.__name = name;
    usedPackage.__config = config;
};

module.exports.config = {
    get: function(key) {
        key = key.replace(usedPackage.__name+".", "");
        let entry = usedPackage.config[key];
        let value = usedPackage.__config[key];
        value = value !== undefined ? value : entry && entry.default;
        // console.log('cfg: '+ key + "=" + value);
        return value;
    }
};
