webpackJsonp([9],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService_1 = ApiService;
    ApiService.prototype.get = function (url) {
        url = ApiService_1.updateUrl(url);
        return this.http.get(url, ApiService_1.getRequestOptionArgs());
    };
    ApiService.prototype.post = function (url, body) {
        url = ApiService_1.updateUrl(url);
        return this.http.post(url, body, ApiService_1.getRequestOptionArgs());
    };
    ApiService.prototype.put = function (url, body) {
        url = ApiService_1.updateUrl(url);
        return this.http.put(url, body, ApiService_1.getRequestOptionArgs());
    };
    ApiService.prototype.delete = function (url) {
        url = ApiService_1.updateUrl(url);
        return this.http.delete(url, ApiService_1.getRequestOptionArgs());
    };
    ApiService.updateUrl = function (req) {
        return __WEBPACK_IMPORTED_MODULE_2__env__["a" /* ENV */].origin + req;
    };
    ApiService.getRequestOptionArgs = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': 'JWT ' + JSON.parse(window.localStorage.getItem('token')),
                'Content-Type': 'application/json'
            })
        };
    };
    ApiService = ApiService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
    var ApiService_1;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the JeuxPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Nous contacter</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\nComing Soon\n\n</ion-content>\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Nous contacter</ion-title>\n\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JeuxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JeuxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JeuxPage = /** @class */ (function () {
    function JeuxPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JeuxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JeuxPage');
    };
    JeuxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-jeux',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\jeux\jeux.html"*/'<!--\n\n  Generated template for the JeuxPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Jeux</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\nComing soon\n\n</ion-content>\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Jeux</ion-title>\n\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\jeux\jeux.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], JeuxPage);
    return JeuxPage;
}());

//# sourceMappingURL=jeux.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifierJournalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__journal_journal__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the JournalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifierJournalPage = /** @class */ (function () {
    function ModifierJournalPage(navCtrl, patientCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.patientCtrl = patientCtrl;
        this.navParams = navParams;
        this.date = this.navParams.get("date");
        this.content = this.navParams.get("content");
        this.id = this.navParams.get("id");
    }
    ModifierJournalPage.prototype.diaryUpdate = function () {
        var _this = this;
        if (this.content.length > 0) {
            this.patientCtrl.updatePatientDiary(this.content, this.id).subscribe(function () {
                _this.content = '';
            }, function (err) { return console.log(err); });
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__journal_journal__["a" /* JournalPage */]);
    };
    ModifierJournalPage.prototype.updateCancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__journal_journal__["a" /* JournalPage */]);
    };
    ModifierJournalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modifier-journal.html',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\modifier-journal\modifier-journal.html"*/'<!--\n\n  Generated template for the ModifierJournalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Modifier Journal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    {{ this.date | date: \'dd/MM/yyyy\' }}\n\n    <ion-item>\n\n        <ion-textarea rows="5" placeholder="Cher journal," [(ngModel)]="content"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-button block outline (click)="diaryUpdate()">Modifier</button>\n\n    <button ion-button block outline (click)="updateCancel()">Annuler</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\modifier-journal\modifier-journal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModifierJournalPage);
    return ModifierJournalPage;
}());

//# sourceMappingURL=modifier-journal.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusiquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_audio__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MusiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusiquePage = /** @class */ (function () {
    function MusiquePage(navCtrl, navParams, file, platform, filePath, permissions, alertCtrl, audioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.platform = platform;
        this.filePath = filePath;
        this.permissions = permissions;
        this.alertCtrl = alertCtrl;
        this.audioProvider = audioProvider;
        this.musicList = [];
        this.fileList = [];
        this.tracksList = [];
        this.isPlaying = false;
    }
    MusiquePage.prototype.getMusicList1 = function () {
        var _this = this;
        if (this.musicList.length == 0) {
            var perm = this.permissions.checkPermission(this.permissions.PERMISSION.READ_EXTERNAL_STORAGE);
            perm.then(function () { return _this.getMusicList2(); })
                .catch(function () { return _this.permissions.requestPermission(_this.permissions.PERMISSION.READ_EXTERNAL_STORAGE)
                .then(function () { return _this.getMusicList2(); })
                .catch(function () { return _this.alertLaunch('Permission refusée', 'Impossible de lire les musiques présentes sur l\'appareil', ['Fermer']); }); });
        }
    };
    MusiquePage.prototype.alertLaunch = function (title, subTitle, buttons) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: buttons
        });
        alert.present();
    };
    MusiquePage.prototype.getMusicList2 = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //the first parameter file.externalRootDirectory is for listing all files on application's root directory
            //The second parameter is the name of the folder. You can specify the nested folder here. e.g. 'Music/Coldplay'
            _this.file.listDir(_this.file.externalRootDirectory, '').then(function (result) {
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var item = result_1[_i];
                    if (item.isDirectory == true && item.name != '.' && item.name != '..') {
                        _this.getFileList(item.name); //Get all the files inside the folder. recursion will probably be useful here.
                    }
                    else if (item.isFile && (item.name.includes('.mp3') || item.name.includes('.wav'))) {
                        _this.musicList.push(item.name);
                        _this.fileList.push(item);
                    }
                }
                _this.setTracks();
            }, function (error) {
                console.log(error);
            });
        });
    };
    MusiquePage.prototype.getFileList = function (path) {
        var _this = this;
        var file = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]();
        this.file.listDir(file.externalRootDirectory, path)
            .then(function (result) {
            for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
                var item = result_2[_i];
                if (item.isDirectory == true && item.name != '.' && item.name != '..') {
                    _this.getFileList(path + '/' + item.name);
                }
                else if (item.isFile && (item.name.includes('.mp3') || item.name.includes('.wav'))) {
                    _this.musicList.push(item.name);
                    _this.fileList.push(item);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    MusiquePage.prototype.setTracks = function () {
        for (var _i = 0, _a = this.fileList; _i < _a.length; _i++) {
            var item = _a[_i];
            var track = {
                src: item.nativeURL,
                artist: '',
                title: item.name.substring(item.name.length - 4),
                art: '',
                preload: 'metadata'
            };
            this.tracksList.push(this.audioProvider.create(track));
        }
    };
    MusiquePage.prototype.playMusic = function (track) {
        if (this.tracksList.length == 0)
            this.setTracks();
        if (this.tracksList.length != 0) {
            var trackToPlay = this.tracksList.indexOf(this.tracksList[track]);
            if (this.isPlaying)
                this.audioProvider.stop(this.selectedTrack);
            this.audioProvider.play(trackToPlay);
            this.selectedTrack = trackToPlay;
            this.isPlaying = true;
        }
        else
            this.alertNoMusic();
    };
    MusiquePage.prototype.playButton = function () {
        try {
            if (this.tracksList.length == 0)
                this.setTracks();
            if (this.tracksList.length != 0) {
                this.audioProvider.play(this.selectedTrack);
                this.isPlaying = true;
            }
            else
                this.alertNoMusic();
        }
        catch (e) {
            this.selectedTrack = this.tracksList[0];
            this.audioProvider.play(this.selectedTrack);
            this.isPlaying = true;
        }
    };
    MusiquePage.prototype.pauseMusic = function () {
        this.audioProvider.pause(this.selectedTrack);
        this.isPlaying = false;
    };
    MusiquePage.prototype.stopMusic = function () {
        this.audioProvider.stop(this.selectedTrack);
        this.isPlaying = false;
    };
    MusiquePage.prototype.nextMusic = function () {
        var index = this.selectedTrack;
        this.audioProvider.stop(this.selectedTrack);
        if (index == this.tracksList.length - 1)
            index = 0;
        else
            index += 1;
        if (this.isPlaying)
            this.audioProvider.play(index);
        this.selectedTrack = index;
    };
    MusiquePage.prototype.lastMusic = function () {
        var index = this.selectedTrack;
        this.audioProvider.stop(this.selectedTrack);
        if (index == 0)
            index = this.tracksList.length - 1;
        else
            index -= 1;
        if (this.isPlaying)
            this.audioProvider.play(index);
        this.selectedTrack = index;
    };
    MusiquePage.prototype.alertNoMusic = function () {
        this.alertLaunch('Musique', 'Aucune Musique à jouer', ['Fermer']);
    };
    MusiquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusiquePage');
    };
    MusiquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-musique',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\musique\musique.html"*/'<!--\n\n  Generated template for the JeuxPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Musique</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!--\n\nrewind\n\npause\n\nfast-forward\n\nplay\n\n-->\n\n\n\n<ion-content padding>\n\n  <button ion-button round (click)="getMusicList1()"> Liste de musique </button>\n\n  <br>\n\n  <ion-list *ngFor="let music of musicList">\n\n    <button ion-button (click)="playMusic(musicList.indexOf(music))"> {{music}} </button>\n\n  </ion-list>\n\n  <br>\n\n  <button #rewind ion-button round icon-only (click)="lastMusic()"><ion-icon name="rewind"></ion-icon></button>\n\n  <button #play ion-button round icon-only (click)="playButton()"><ion-icon name="play"></ion-icon></button>\n\n  <button #pause ion-button round icon-only (click)="pauseMusic()"><ion-icon name="pause"></ion-icon></button>\n\n  <button #stop ion-button round icon-only (click)="stopMusic()"><ion-icon name="square"></ion-icon></button>\n\n  <button #fastforward ion-button round icon-only (click)="nextMusic()"><ion-icon name="fastforward"></ion-icon></button>\n\n\n\n\n\n</ion-content>\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Musique</ion-title>\n\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\musique\musique.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_audio__["a" /* AudioProvider */]])
    ], MusiquePage);
    return MusiquePage;
}());

//# sourceMappingURL=musique.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecettesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recettes_details_recettes_details__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RecettesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecettesPage = /** @class */ (function () {
    function RecettesPage(navCtrl, patientCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.patientCtrl = patientCtrl;
        this.navParams = navParams;
        this.offset = 0;
        this.page = 0;
        this.maximumPages = 4;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getAllRecipesNames(this.offset);
    }
    RecettesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecettesPage');
    };
    RecettesPage.prototype.SelectClicked = function (recipe, myEvent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recettes_details_recettes_details__["a" /* RecettesDetailsPage */], {
            id: recipe.id
        });
    };
    RecettesPage.prototype.filterItems = function (ev) {
        this.recipes = this.save;
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.recipes = this.recipes.filter(function (recipes) {
                return recipes.name.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    RecettesPage.prototype.loadMore = function (infiniteScroll) {
        this.page++;
        this.getAllRecipesNames(infiniteScroll);
        if (this.page === this.maximumPages) {
            infiniteScroll.enable(false);
        }
    };
    RecettesPage.prototype.getAllRecipesNames = function (infiniteScroll) {
        var _this = this;
        this.patientCtrl.getAllRecipesNames(this.offset).subscribe(function (recipes) {
            if (Array.isArray(recipes)) {
                for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                    var value = recipes_1[_i];
                    if (value.image && value.image.data) {
                        var imageData = value.image.data;
                        value.image = "data:image/jpg;base64," + btoa(String.fromCharCode.apply(null, imageData));
                        ;
                    }
                }
                ;
                _this.offset += 3;
                if (_this.recipes)
                    Array.prototype.push.apply(_this.recipes, recipes);
                else
                    _this.recipes = recipes;
                _this.save = _this.recipes;
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
            }
        }, function (err) { return console.log(err); });
    };
    RecettesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recettes',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\recettes\recettes.html"*/'<!--\n\n  Generated template for the RecettesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Recettes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar placeholder="Filter Items with Cancel" [showCancelButton]="shouldShowCancel" color="danger" (ionInput)="filterItems($event)"></ion-searchbar>\n\n    <ion-list *ngFor="let recipe of recipes" class="myList">\n\n          <button (click)="SelectClicked(recipe, $event)">\n\n            <ion-card class="myCard">\n\n              <div ng-If="recipe && recipe.image">\n\n                <img class="recipeImage" [src]="recipe.image">\n\n                <div class="myOverlay">\n\n                  {{ recipe.name}}\n\n                  {{ recipe.nb_cal }}\n\n                </div>\n\n              </div>\n\n            </ion-card>\n\n          </button>\n\n    </ion-list>\n\n\n\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)" threshold="100px">\n\n    <ion-infinite-scroll-content\n\n      loadingSpinner="bubbles"\n\n      loadingText="Loading more data...">\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Recettes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\recettes\recettes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecettesPage);
    return RecettesPage;
}());

//# sourceMappingURL=recettes.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecettesDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecettesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecettesDetailsPage = /** @class */ (function () {
    function RecettesDetailsPage(navCtrl, patientCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.patientCtrl = patientCtrl;
        this.navParams = navParams;
        this.canRender = false;
        this.id = this.navParams.get('id');
        this.recipeDetail = {
            ingredients: "",
            description: "",
            name: "",
            image: null,
            id: -1,
            nb_cal: 0
        };
        this.getRecipeDetail(this.id);
    }
    RecettesDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecettesDetailsPage');
    };
    RecettesDetailsPage.prototype.getRecipeDetail = function (id) {
        var _this = this;
        this.patientCtrl.getRecipeDetail(this.id).subscribe(function (recipeDetail) {
            _this.recipeDetail = recipeDetail;
            if (_this.recipeDetail.image && _this.recipeDetail.image.data) {
                var imageData = _this.recipeDetail.image.data;
                _this.recipeDetail.image = "data:image/jpg;base64," + btoa(String.fromCharCode.apply(null, imageData));
            }
            _this.recipeDetail.ingredients = recipeDetail['ingredients'].replace(/;/g, '\n');
            _this.recipeDetail.description = recipeDetail['description'].replace(/;ÉTAPE/g, ";;ÉTAPE").replace(/;/g, '\n');
            _this.canRender = true;
        }, function (err) { return console.log(err); });
    };
    RecettesDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recettes-details',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\recettes-details\recettes-details.html"*/'<!--\n\n  Generated template for the RecettesDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title *ngIf="canRender">{{ recipeDetail.name}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n            <div *ngIf="canRender" class="recipeContent">\n\n              <div>\n\n                <h1>{{ recipeDetail.name }}</h1>\n\n                <img class="recipeImage" [src]="recipeDetail.image">\n\n                <p>Nombre de calories : {{ recipeDetail.nb_cal }}</p>\n\n              </div>\n\n              <div class="ingredientsContent">\n\n                <h2>Ingredients :</h2>\n\n                <p>{{recipeDetail.ingredients }}</p>\n\n              </div>\n\n              <div class="preparationContent">\n\n                <h2>Préparation</h2>\n\n                <p>{{ recipeDetail.description }}</p>\n\n              </div>\n\n            </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\recettes-details\recettes-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecettesDetailsPage);
    return RecettesDetailsPage;
}());

//# sourceMappingURL=recettes-details.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReglagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReglagesPage = /** @class */ (function () {
    function ReglagesPage(navCtrl, navParams, patientCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patientCtrl = patientCtrl;
        this.alertCtrl = alertCtrl;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user);
    }
    ReglagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReglagesPage');
    };
    ReglagesPage.prototype.changeEmail = function (data) {
        var _this = this;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(data.email)) {
            this.patientCtrl.changeEmail(this.user.patient.id, data.email).subscribe(function (result) {
                _this.showConfirmEdit();
            }, function (err) { return _this.showErrorEdit(err); });
        }
        else {
            this.showErrorEdit("l'email rentré n'est pas valide.");
        }
    };
    ReglagesPage.prototype.showEditEmail = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Changer mon email',
            message: "Entrer un email valide",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'exemple@gmail.com'
                },
            ],
            buttons: [
                'Annuler',
                {
                    text: 'Modifier',
                    handler: function (data) {
                        if (data.email == _this.user.patient.email) {
                            return _this.showErrorEdit("l'email rentré est identique à l'ancien.");
                        }
                        _this.changeEmail(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    ReglagesPage.prototype.showConfirmEdit = function () {
        var confirm = this.alertCtrl.create({
            title: 'Succès',
            message: 'Votre email a bien été mis à jour.',
            buttons: ['OK']
        });
        confirm.present();
    };
    ReglagesPage.prototype.showErrorEdit = function (error) {
        var confirm = this.alertCtrl.create({
            title: 'Erreur',
            message: "Nous avons rencontré une erreur en modifiant votre email:<br><br>" + error,
            buttons: ['OK']
        });
        confirm.present();
    };
    ReglagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reglages',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\reglages\reglages.html"*/'<!--\n\n  Generated template for the ReglagesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Reglages</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <button ion-button icon-start block (click)="showEditEmail()">\n\n        <ion-icon name="md-create"></ion-icon>Modifier\n\n    </button>\n\n    <ion-list inset>\n\n        <ion-item>\n\n            <ion-label>Nom</ion-label>\n\n            <ion-input type="text"\n\n                       value="{{ user.patient.lastname }}"\n\n                       [(ngModel)]="lastname"\n\n                       [readonly]="true"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Prénom</ion-label>\n\n            <ion-input type="text"\n\n                       value="{{ user.patient.firstname }}"\n\n                       [(ngModel)]="firstname"\n\n                       [readonly]="true"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Email</ion-label>\n\n            <ion-input type="text"\n\n                       pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"\n\n                       value="{{ user.patient.email }}"\n\n                       [(ngModel)]="email"\n\n                       [readonly]="true"></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Réglages</ion-title>\n\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\reglages\reglages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReglagesPage);
    return ReglagesPage;
}());

//# sourceMappingURL=reglages.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accueil/accueil.module": [
		701,
		8
	],
	"../pages/contact/contact.module": [
		702,
		7
	],
	"../pages/jeux/jeux.module": [
		703,
		6
	],
	"../pages/journal/journal.module": [
		704,
		5
	],
	"../pages/modifier-journal/modifier-journal.module": [
		705,
		4
	],
	"../pages/musique/musique.module": [
		706,
		3
	],
	"../pages/recettes-details/recettes-details.module": [
		708,
		2
	],
	"../pages/recettes/recettes.module": [
		707,
		1
	],
	"../pages/reglages/reglages.module": [
		709,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.auth.signin(this.username, this.password).subscribe(function (patientFound) {
            localStorage.setItem('currentUser', JSON.stringify(patientFound));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__accueil_accueil__["a" /* AccueilPage */]);
        }, function (err) {
            console.log(err);
            var msg = err.error.error;
            if (msg == 'User not found') {
                _this.toastCtrl.create('Aucun compte n\'est associé à cette adresse mail', false, 'top');
            }
            if (msg == 'invalid password') {
                _this.toastCtrl.create('Mot de passe incorrect', false, 'top');
            }
            return console.log(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\login\login.html"*/'<ion-content style="background-image: url(\'assets/imgs/background.png\');">\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><img src="assets/imgs/mandareen-logo.png" border="0" align="absmiddle">Mandareen</h1>\n\n            Connexion\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-list no-line>\n\n                <ion-item>\n\n                    <ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <a>Identifiants oubliés ?<b> Cliquez ici</b></a>\n\n            <button ion-button block outline color="light" (click)="login()">Connexion</button>\n\n            <!--<button ion-button full color="light" (click)="goRegister()">Inscription</button>-->\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* Toast */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_accueil_accueil__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_journal_journal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_recettes_recettes__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_recettes_details_recettes_details__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modifier_journal_modifier_journal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_musique_musique__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_jeux_jeux__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reglages_reglages__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic_audio__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_journal_journal__["a" /* JournalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_recettes_recettes__["a" /* RecettesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_recettes_details_recettes_details__["a" /* RecettesDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modifier_journal_modifier_journal__["a" /* ModifierJournalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_musique_musique__["a" /* MusiquePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_jeux_jeux__["a" /* JeuxPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reglages_reglages__["a" /* ReglagesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accueil/accueil.module#AccueilPageModule', name: 'AccueilPage', segment: 'accueil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jeux/jeux.module#JeuxPageModule', name: 'JeuxPage', segment: 'jeux', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/journal/journal.module#JournalPageModule', name: 'JournalPage', segment: 'journal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifier-journal/modifier-journal.module#ModifierJournalPageModule', name: 'ModifierJournalPage', segment: 'modifier-journal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/musique/musique.module#MusiquePageModule', name: 'MusiquePage', segment: 'musique', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recettes/recettes.module#RecettesPageModule', name: 'RecettesPage', segment: 'recettes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recettes-details/recettes-details.module#RecettesDetailsPageModule', name: 'RecettesDetailsPage', segment: 'recettes-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reglages/reglages.module#ReglagesPageModule', name: 'ReglagesPage', segment: 'reglages', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19_ionic_audio__["b" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19_ionic_audio__["c" /* defaultAudioProviderFactory */]),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_journal_journal__["a" /* JournalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_recettes_recettes__["a" /* RecettesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_recettes_details_recettes_details__["a" /* RecettesDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modifier_journal_modifier_journal__["a" /* ModifierJournalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_musique_musique__["a" /* MusiquePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_jeux_jeux__["a" /* JeuxPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reglages_reglages__["a" /* ReglagesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* PatientService */],
                __WEBPACK_IMPORTED_MODULE_5__providers__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* Toast */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: false,
    isDebugMode: true,
    origin: 'http://localhost:1234',
    version: '0.0.1'
};
//# sourceMappingURL=environment.dev.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(api, events) {
        var _this = this;
        this.api = api;
        this.events = events;
        this.currentUser = JSON.parse(localStorage.getItem('userData')) || null;
        this.activeUser = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
        setTimeout(function () { return _this.activeUser.next(_this.currentUser); }, 1000);
    }
    AuthService.prototype.signin = function (email, password) {
        var data = {
            'email': email,
            'password': password
        };
        return this.api.post('/patient/login/', data);
    };
    AuthService.prototype.getUser = function () {
        return this.activeUser.asObservable().share();
    };
    AuthService.prototype.sendRestMailPassword = function (credentials) {
        return this.api.put('/pros/auth/reset', credentials);
    };
    AuthService.prototype.logOut = function () {
        window.localStorage.removeItem('userData');
        window.localStorage.removeItem('token');
        this.activeUser.next(null);
        return true;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientService = /** @class */ (function () {
    function PatientService(api) {
        this.api = api;
    }
    PatientService.prototype.sendPatientDiary = function (content, mood, id) {
        return this.api.post('/patient/diary/', { content: content, id: id, mood: mood });
    };
    PatientService.prototype.getAllRecipesNames = function (offset) {
        return this.api.get('/patient/recipesNames/' + offset);
    };
    PatientService.prototype.getRecipeDetail = function (id) {
        return this.api.get('/patient/recipeDetails/' + id);
    };
    PatientService.prototype.getPatientDiaries = function (id) {
        return this.api.get('/patient/diaries/' + id);
    };
    PatientService.prototype.updatePatientDiary = function (content, id) {
        var data = {
            'id': id,
            'content': content
        };
        return this.api.put('/patient/diary/', data);
    };
    PatientService.prototype.changeEmail = function (id, newEmail) {
        var data = {
            'id': id,
            'newEmail': newEmail
        };
        return this.api.post('/patient/changeEmail/', data);
    };
    PatientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], PatientService);
    return PatientService;
}());

//# sourceMappingURL=patient.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__(123);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(394);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_service__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__patient_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast__ = __webpack_require__(677);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__toast__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toast = /** @class */ (function () {
    function Toast(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    Toast.prototype.create = function (msg, status, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: position,
            cssClass: status,
            showCloseButton: true,
            closeButtonText: "x"
        });
        return toast.present();
    };
    Toast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], Toast);
    return Toast;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_accueil_accueil__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_journal_journal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recettes_recettes__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_musique_musique__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_jeux_jeux__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_reglages_reglages__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, appCtrl, auth, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appCtrl = appCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // if (localStorage.getItem('currentUser')) {this.rootPage = 'AccueilPage';}
        // else { this.rootPage = 'LoginPage';}
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_5__pages_accueil_accueil__["a" /* AccueilPage */] },
            { title: 'Journal', component: __WEBPACK_IMPORTED_MODULE_6__pages_journal_journal__["a" /* JournalPage */] },
            { title: 'Recettes', component: __WEBPACK_IMPORTED_MODULE_7__pages_recettes_recettes__["a" /* RecettesPage */] },
            { title: 'Musique', component: __WEBPACK_IMPORTED_MODULE_8__pages_musique_musique__["a" /* MusiquePage */] },
            { title: 'Jeux', component: __WEBPACK_IMPORTED_MODULE_9__pages_jeux_jeux__["a" /* JeuxPage */] },
            { title: 'Nous Contacter', component: __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'Réglages', component: __WEBPACK_IMPORTED_MODULE_11__pages_reglages_reglages__["a" /* ReglagesPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOutClicked = function () {
        this.auth.logOut();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        this.toastCtrl.create('Vous vous êtes déconnecté.', false, 'top');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        <img src="assets/imgs/mandareen-logo.png" width="20%">\n\n        Mandareen\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n            {{p.title}}\n\n        </button>\n\n        <ion-item menuClose (click)="logOutClicked()">\n\n            <ion-icon name="log-out" item-start></ion-icon>\n\n            Me déconnecter\n\n        </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_12__providers__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__providers__["d" /* Toast */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccueilPage = /** @class */ (function () {
    function AccueilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccueilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccueilPage');
    };
    AccueilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\accueil\accueil.html"*/'<!--\n\n  Generated template for the JeuxPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Accueil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>Bienvenue sur Mandareen</h1>\n\n  <div class="magic">\n\n    Recette magique pour passer une bonne journée :<br>\n\n    <ul>\n\n      <li>Pensez positif</li>\n\n      <li>Tout problème à une solution</li>\n\n      <li>La vie est belle !</li>\n\n    </ul>\n\n  </div>\n\n</ion-content>\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Accueil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\accueil\accueil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AccueilPage);
    return AccueilPage;
}());

//# sourceMappingURL=accueil.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modifier_journal_modifier_journal__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the JournalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JournalPage = /** @class */ (function () {
    function JournalPage(navCtrl, patientCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.patientCtrl = patientCtrl;
        this.toastCtrl = toastCtrl;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getPatientDiaries();
    }
    JournalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JournalPage');
    };
    JournalPage.prototype.diaryUpdatePage = function (id, content, date) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__modifier_journal_modifier_journal__["a" /* ModifierJournalPage */], { id: id, content: content, date: date });
    };
    JournalPage.prototype.getPatientDiaries = function () {
        var _this = this;
        this.patientCtrl.getPatientDiaries(this.user.patient.id).subscribe(function (diaries) {
            _this.diaries = diaries;
        }, function (err) { return console.log(err); });
    };
    JournalPage.prototype.happyMood = function (ionicButton) {
        if (this.mood === 1) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 1;
            //this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    };
    JournalPage.prototype.sadMood = function (ionicButton) {
        if (this.mood === 2) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 2;
            //this.buttonColor = 'dark';
            ionicButton._color = 'dark';
        }
        console.log(this.mood);
    };
    JournalPage.prototype.angerMood = function (ionicButton) {
        if (this.mood === 3) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 3;
            ionicButton._color = 'black';
        }
        console.log(this.mood);
    };
    JournalPage.prototype.disgustMood = function (ionicButton) {
        if (this.mood === 4) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 4;
            //this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    };
    JournalPage.prototype.fearMood = function (ionicButton) {
        if (this.mood === 5) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 5;
            //this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    };
    JournalPage.prototype.surpriseMood = function (ionicButton) {
        if (this.mood === 6) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 6;
            //this.buttonColor = 'dark';
            ionicButton._color = 'dark';
        }
        console.log(this.mood);
    };
    JournalPage.prototype.dispiseMood = function (ionicButton) {
        if (this.mood === 7) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 7;
            //this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    };
    JournalPage.prototype.diarySubmit = function () {
        var _this = this;
        if (this.content) {
            this.patientCtrl.sendPatientDiary(this.content, this.mood, this.user.patient.id).subscribe(function () {
                _this.getPatientDiaries();
                _this.content = '';
            }, function (err) { return console.log(err); });
        }
        else {
            this.toastCtrl.create('Le contenu du journal ne peut pas être envoyé vide', false, 'top');
        }
    };
    JournalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-journal',template:/*ion-inline-start:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\journal\journal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Journal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list *ngFor="let diary of diaries">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                {{ diary.creation_date | date: \'dd/MM/yyyy\' }}\n\n                {{ diary.humeur }}\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                {{ diary.content }}\n\n                <button ion-button block outline (click)="diaryUpdatePage(diary.id, diary.content, diary.creation_date)">Modifier</button>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-item>\n\n        <ion-textarea rows="5" placeholder="Cher journal," [(ngModel)]="content"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-row>\n\n            <ion-col col>\n\n                <button #happy [color]="buttonColor" class="mood-button" (click)="happyMood(happy)" ion-button small round icon-only><ion-icon name="happy"></ion-icon></button>\n\n            </ion-col>\n\n            <ion-col col>\n\n                <button #sad [color]="buttonColor" class="mood-button" (click)="sadMood(sad)" ion-button small round icon-only><ion-icon name="sad"></ion-icon></button>\n\n            </ion-col>\n\n            <ion-col col>\n\n                <button #anger class="mood-button" (click)="angerMood(anger)" ion-button small round icon-only><ion-icon name="star"></ion-icon></button>\n\n            </ion-col>\n\n            <ion-col col>\n\n                <button #disgust class="mood-button" (click)="disgustMood(disgust)" ion-button small round icon-only><ion-icon name="wine"></ion-icon></button>\n\n            </ion-col>\n\n            <ion-col col>\n\n                <button #fear class="mood-button" (click)="fearMood(fear)" ion-button small round icon-only><ion-icon name="outlet"></ion-icon></button>\n\n            </ion-col>\n\n            <ion-col col>\n\n                <button #surprise class="mood-button" (click)="surpriseMood(surprise)" ion-button small round icon-only><ion-icon name="star"></ion-icon></button>\n\n            </ion-col>\n\n            <ion-col col>\n\n                <button #dispise class="mood-button" (click)="dispiseMood(surprise)" ion-button small round icon-only><ion-icon name="star"></ion-icon></button>\n\n            </ion-col>\n\n      </ion-row>\n\n    <button ion-button block outline (click)="diarySubmit()">Envoyer</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sopit\rendu\mandareen-patient-app\src\pages\journal\journal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* Toast */]])
    ], JournalPage);
    return JournalPage;
}());

//# sourceMappingURL=journal.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map