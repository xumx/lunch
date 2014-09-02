var fs = require('fs');
var _ = require('underscore');
var mu = require('mu2');

var edm;

edm = {
    "id": "36_SG",
    "title": "",
    "subject": "",
    "limited": "http://media.4at5.net/email_domains/ebay/160602/limitedtime.jpg",
    "banner": "http://imgur.com/brTNFwN.jpg?1",
    "country": "SG",
    "images": "",
    "more": false,
    "map": {
        origin: [0, 0, 126, 49, 129, 0, 223, 49, 226, 0, 404, 49, 406, 0, 544, 49, 548, 0, 677, 49]
    }
};


// edm = {
//     "id": "35_SG",
//     "title": "Mid-Autumn Sale: Hello Kitty Baking Essentials",
//     "subject": "Mid-Autumn Sale: Hello Kitty Baking Essentials",
//     "limited": "http://media.4at5.net/email_domains/ebay/160602/limitedtime.jpg",
//     "banner":"http://imgur.com/brTNFwN.jpg?1",
//     "country": "SG",
//     "more": false,
//     "images": "",
//     "map": {
//         origin: [0,0,126,49,129,0,223,49,226,0,404,49,406,0,544,49,548,0,677,49]
//     } 
// };

// edm.map.big = _.map(edm.map.origin, function(e){return Math.floor(e* 350/680)})

// edm = {
//     "id": "35_MY",
//     "title":"Great Style Savings – From RM39! Grab Deals On Sexy Lingerie, Oakley, Thunderbird Watches & More!",
//     "subject": "Great Style Savings – From RM39! Grab Deals On Sexy Lingerie, Oakley, Thunderbird Watches & More!",
//     // "limited": "http://media.4at5.net/email_domains/ebay/160602/limitedtime.jpg",
//     "limited": "http://www.ebaypowerhouse.com/portal/edm/images/2014/wk32_20140728/sg/yesmail/limitedtime.jpg",
//     "banner": false,
//     "country": "MY",
//     "images": "",
//     "more": "http://ebaypowerhouse.com/portal/edm/images/2014/wk35_20140818/my/yesmail/more_btn.jpg"
// };

var sections = require('./' + edm.id + '/sections.json');
var products = require('./' + edm.id + '/products.json');
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

edm = _.extend(edm, countries[edm.country]);
edm.sections = _.map(sections, function(section) {
    section.products = _.where(products, {
        section: section.title
    });

    return section;
});

_.each(edm.sections, function(section) {
    section.rows = [];
    section.src = edm.images + section.src;
    _.each(section.products, function(p1, index) {

        if (index % 2 === 0) {
            p1.src = edm.images + p1.src;
            p2.src = edm.images + p2.src;
            p2 = section.products[index + 1];

            section.rows.push({
                left: p1,
                right: p2
            });
        }
    });
});

mu.root = __dirname + '/';
var input = mu.compileAndRender('mail.html', edm);
var output = fs.createWriteStream(__dirname + "/" + edm.id + "/" + edm.id + ".html");

input.on('data', function(data) {
    output.write(data);
});
