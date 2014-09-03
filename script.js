var id = process.argv[2];
var fs = require('fs');
var _ = require('underscore');
var mu = require('mu2');

if (!id) {
    console.log("Please include a email ID");
    return false;
}

var edm = require('./' + id + '/edm.json');
var sections = require('./' + id + '/sections.json');
var products = require('./' + id + '/products.json');

var countries = {
    MY: {
        logo: "http://ebaypowerhouse.com/portal/edm/images/2014/wk35_20140818/my/yesmail/logo_my.jpg",
        href: "http://ebay.com.my",
        facebook: "https://www.facebook.com/eBay.Malaysia",
        twitter: "https://twitter.com/ebaymalaysia1",
        apple: "http://anywhere.ebay.com.my/mobile/iphone/ebay",
        android: "https://play.google.com/store/apps/details?id=com.ebay.mobile",
        unsubscribe: "http://e.deals.ebay.com.my/unsubscribe.jsp",
        privacy: "http://pages.ebay.com.my/help/policies/privacy-policy.html",
        agreement: "http://pages.ebay.com.my/help/policies/user-agreement.html",
        paypal: "https://www.paypal.com/my/webapps/mpp/paypal-buyer-protection"
    },
    SG: {
        logo: "http://ebaypowerhouse.com/portal/edm/images/2014_yesmail/header/ebay-sg-logo.png",
        href: "http://www.ebay.com.sg/",
        facebook: "https://www.facebook.com/eBay.Singapore",
        twitter: "https://twitter.com/eBaySingapore1",
        apple: "http://anywhere.ebay.com.sg/mobile/iphone/ebay",
        android: "https://play.google.com/store/apps/details?id=com.ebay.mobile",
        unsubscribe: "http://e.deals.ebay.com.sg/unsubscribe.jsp",
        privacy: "http://pages.ebay.com.sg/help/policies/privacy-policy.html",
        agreement: "http://pages.ebay.com.sg/help/policies/user-agreement.html",
        paypal: "https://www.paypal.com/sg/webapps/mpp/paypal-buyer-protection"
    },
    PH: {
        facebook: "https://www.facebook.com/eBayPhilippines",
        twitter: "https://twitter.com/eBayPhilippines",
        apple: "http://anywhere.ebay.ph/mobile/iphone/ebay",
        android: "https://play.google.com/store/apps/details?id=com.ebay.mobile",
        unsubscribe: "http://e.deals.ebay.ph/unsubscribe.jsp",
        privacy: "http://pages.ebay.ph/help/policies/privacy-policy.html",
        agreement: "http://pages.ebay.ph/help/policies/user-agreement.html",
        paypal: "https://www.paypal.com/ph/webapps/mpp/paypal-buyer-protection"
    }
};

edm.map = _.map(edm.map, function(button) {
    // button.big = _.map(button.origin, function(e) {
    //     return Math.floor(e * 644 / 680)
    // }).join(',');
    button.big = button.origin.join(',');

    button.small = _.map(button.origin, function(e) {
        return Math.floor(e * 460 / 680)
    }).join(',');

    button.smaller = _.map(button.origin, function(e) {
        return Math.floor(e * 380 / 680)
    }).join(',');

    return button;
});

edm = _.extend(edm, countries[edm.country]);
edm.sections = _.map(sections, function(section) {
    section.products = _.where(products, {
        section: section.title
    });

    return section;
});

if (edm.banner) edm.banner = edm.images + edm.banner;
if (edm.limited) edm.limited = edm.images + edm.limited;

_.each(edm.sections, function(section) {
    section.rows = [];
    section.src = edm.images + section.src;
    _.each(section.products, function(p1, index) {
        if (index % 2 === 0) {
            p1.src = edm.images + p1.src;

            p2 = section.products[index + 1];
            if (p2) {
                p2.src = edm.images + p2.src;
            } else {
                console.error("Wrong number of products");
            }

            section.rows.push({
                left: p1,
                right: p2
            });
        }
    });

    if (section.rows.length == 0) {
        console.log("not section");
        delete(section.rows);
    }
});

mu.root = __dirname + '/';
var input = mu.compileAndRender('mail.html', edm);
var output = fs.createWriteStream(__dirname + "/" + id + "/" + id + ".html");

input.on('data', function(data) {
    output.write(data);
});