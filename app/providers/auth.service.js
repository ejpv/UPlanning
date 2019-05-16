"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_oauth2_1 = require("nativescript-oauth2");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.client = null;
    }
    AuthService.prototype.tnsOauthLogin = function (providerType) {
        var _this = this;
        this.client = new nativescript_oauth2_1.TnsOAuthClient(providerType);
        return new Promise(function (resolve, reject) {
            _this.client.loginWithCompletion(function (tokenResult, error) {
                if (error) {
                    console.error("back to main page with error: ");
                    console.error(error);
                    reject(error);
                }
                else {
                    console.log("back to main page with access token: ");
                    console.log(tokenResult);
                    resolve(tokenResult);
                }
            });
        });
    };
    AuthService.prototype.tnsOauthLogout = function () {
        if (this.client) {
            this.client.logout();
        }
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDJEQUc2QjtBQUc3QjtJQUdFO1FBRlEsV0FBTSxHQUFtQixJQUFJLENBQUM7SUFFdEIsQ0FBQztJQUVWLG1DQUFhLEdBQXBCLFVBQXFCLFlBQVk7UUFBakMsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQ0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRS9DLE9BQU8sSUFBSSxPQUFPLENBQXVCLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDdkQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDN0IsVUFBQyxXQUFpQyxFQUFFLEtBQUs7Z0JBQ3ZDLElBQUksS0FBSyxFQUFFO29CQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztvQkFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztvQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDekIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN0QjtZQUNILENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sb0NBQWMsR0FBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQTdCVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7O09BQ0EsV0FBVyxDQThCdkI7SUFBRCxrQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIFRuc09BdXRoQ2xpZW50LFxyXG4gIElUbnNPQXV0aFRva2VuUmVzdWx0XHJcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1vYXV0aDJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNsaWVudDogVG5zT0F1dGhDbGllbnQgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgdG5zT2F1dGhMb2dpbihwcm92aWRlclR5cGUpOiBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PiB7XHJcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBUbnNPQXV0aENsaWVudChwcm92aWRlclR5cGUpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxJVG5zT0F1dGhUb2tlblJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNsaWVudC5sb2dpbldpdGhDb21wbGV0aW9uKFxyXG4gICAgICAgICh0b2tlblJlc3VsdDogSVRuc09BdXRoVG9rZW5SZXN1bHQsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImJhY2sgdG8gbWFpbiBwYWdlIHdpdGggZXJyb3I6IFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhY2sgdG8gbWFpbiBwYWdlIHdpdGggYWNjZXNzIHRva2VuOiBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuUmVzdWx0KTtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0b2tlblJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG5zT2F1dGhMb2dvdXQoKSB7XHJcbiAgICBpZiAodGhpcy5jbGllbnQpIHtcclxuICAgICAgdGhpcy5jbGllbnQubG9nb3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19