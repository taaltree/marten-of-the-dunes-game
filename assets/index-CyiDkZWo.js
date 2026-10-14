(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,ee=1029,k=1030,te=1031,ne=1033,re=33776,A=33777,ie=33778,j=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,M=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,N=2300,Ie=2301,Le=2302,Re=2303,P=2400,ze=2401,F=2402,Be=2500,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=35048,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,I(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=1234567,lt=Math.PI/180,ut=180/Math.PI;function dt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function R(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(ct=e);let t=ct+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*lt}function Tt(e){return e*ut}function Et(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Mt={DEG2RAD:lt,RAD2DEG:ut,generateUUID:dt,clamp:R,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:jt,denormalize:At},z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(R(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new B,Ft=new Nt,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new V,Lt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return rt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return rt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Qe(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=dt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new B,Xt=class e extends ot{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=dt(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this.w=R(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this.w=R(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=new Xt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},H=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*A,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*j,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*A,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*j,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*A,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*j,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*A,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new B,rn=new H,an=new B(0,0,0),on=new B(1,1,1),sn=new B,cn=new B,ln=new B,un=new H,dn=new Nt,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(R(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-R(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(R(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-R(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(R(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},mn=0,hn=new B,gn=new Nt,_n=new H,vn=new B,yn=new B,bn=new B,xn=new Nt,Sn=new B(1,0,0),Cn=new B(0,1,0),wn=new B(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mn++}),this.uuid=dt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new fn,r=new Nt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new H},normalMatrix:{value:new V}}),this.matrix=new H,this.matrixWorld=new H,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};kn.DEFAULT_UP=new B(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=ft(e,1),t=R(t,0,1),n=R(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Nn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Bt.workingToColorSpace(Ln.copy(this),e),Math.round(R(Ln.r*255,0,255))*65536+Math.round(R(Ln.g*255,0,255))*256+Math.round(R(Ln.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=He){Bt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=ht(Pn.h,Fn.h,t),r=ht(Pn.s,Fn.s,t),i=ht(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new U;U.NAMES=Nn;var Rn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new U(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},zn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B,Yn=new B,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new B,new B,new B,new B,new B,new B,new B,new B],nr=new B,rr=new er,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new B,fr=new B,pr=new B;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=gr();function gr(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function _r(e){Math.abs(e)>65504&&I(`DataUtils.toHalfFloat(): Value out of range.`),e=R(e,-65504,65504),hr.floatView[0]=e;let t=hr.uint32View[0],n=t>>23&511;return hr.baseTable[n]+((t&8388607)>>hr.shiftTable[n])}function vr(e){let t=e>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[t]+(e&1023)]+hr.exponentTable[t],hr.floatView[0]}var yr=class{static toHalfFloat(e){return _r(e)}static fromHalfFloat(e){return vr(e)}},br=new B,xr=new z,Sr=0,Cr=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=At(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=At(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=At(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=At(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=new er,Or=new B,kr=new B,Ar=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(kr)),this.expandByPoint(Or.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jr=0,Mr=new H,Nr=new kn,Pr=new B,Fr=new er,Ir=new er,Lr=new B,Rr=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=dt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?Tr:wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,n){return Mr.makeTranslation(e,t,n),this.applyMatrix4(Mr),this}scale(e,t,n){return Mr.makeScale(e,t,n),this.applyMatrix4(Mr),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(this.boundingBox.min,Fr.min),this.boundingBox.expandByPoint(Lr),Lr.addVectors(this.boundingBox.max,Fr.max),this.boundingBox.expandByPoint(Lr)):(this.boundingBox.expandByPoint(Fr.min),this.boundingBox.expandByPoint(Fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(Fr.min,Ir.min),Fr.expandByPoint(Lr),Lr.addVectors(Fr.max,Ir.max),Fr.expandByPoint(Lr)):(Fr.expandByPoint(Ir.min),Fr.expandByPoint(Ir.max))}Fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Lr.fromBufferAttribute(a,t),o&&(Pr.fromBufferAttribute(e,t),Lr.add(Pr)),r=Math.max(r,n.distanceToSquared(Lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lr.fromBufferAttribute(e,t),Lr.normalize(),e.setXYZ(t,Lr.x,Lr.y,Lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=qe,this.updateRanges=[],this.version=0,this.uuid=dt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Br=new B,Vr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix4(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyNormalMatrix(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.transformDirection(e),this.setXYZ(t,Br.x,Br.y,Br.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=At(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=At(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=At(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=At(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Cr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hr=new B,Ur=new B,Wr=new V,Gr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Hr.subVectors(n,t).cross(Ur.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Hr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wr.getNormalMatrix(e),r=this.coplanarPoint(Hr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kr=0,qr=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kr++}),this.uuid=dt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Gr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Jr=new B,Yr=new B,Xr=new B,Zr=new B,Qr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jr.copy(this.origin).addScaledVector(this.direction,t),Jr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yr.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Yr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Xr),o=Zr.dot(this.direction),s=-Zr.dot(Xr),c=Zr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Yr).addScaledVector(Xr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Jr.subVectors(e.center,this.origin);let n=Jr.dot(this.direction),r=Jr.dot(Jr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,re;if(y>=b&&y>=x?(w=s,D=u,k=p,re=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,re=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,re=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=O-A*k,ce=ee-ie*k,le=te-A*re,ue=ne-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*k+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$r=class extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ei=new H,ti=new Qr,ni=new Ar,ri=new B,ii=new B,ai=new B,oi=new B,si=new B,ci=new B,li=new B,ui=new B,di=class extends kn{constructor(e=new Rr,t=new $r){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ci.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(si.fromBufferAttribute(s,e),a?ci.addScaledVector(si,r):ci.addScaledVector(si.sub(t),r))}t.add(ci)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ni.copy(n.boundingSphere),ni.applyMatrix4(i),ti.copy(e.ray).recast(e.near),!(ni.containsPoint(ti.origin)===!1&&(ti.intersectSphere(ni,ri)===null||ti.origin.distanceToSquared(ri)>(e.far-e.near)**2))&&(ei.copy(i).invert(),ti.copy(e.ray).applyMatrix4(ei),(n.boundingBox===null||ti.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=pi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=pi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=pi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=pi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function fi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ui.copy(s),ui.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ui);return l<n.near||l>n.far?null:{distance:l,point:ui.clone(),object:e}}function pi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ii),e.getVertexPosition(c,ai),e.getVertexPosition(l,oi);let u=fi(e,t,n,r,ii,ai,oi,li);if(u){let e=new B;$n.getBarycoord(li,ii,ai,oi,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};$n.getNormal(ii,ai,oi,t.normal),u.face=t,u.barycoord=e}return u}var mi=new Zt,hi=new Zt,gi=new Zt,_i=new Zt,vi=new H,yi=new B,bi=new Ar,xi=new H,Si=new Qr,Ci=class extends di{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new H,this.bindMatrixInverse=new H,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,yi),this.boundingBox.expandByPoint(yi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ar),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,yi),this.boundingSphere.expandByPoint(yi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bi.copy(this.boundingSphere),bi.applyMatrix4(r),e.ray.intersectsSphere(bi)!==!1&&(xi.copy(r).invert(),Si.copy(e.ray).applyMatrix4(xi),(this.boundingBox===null||Si.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Si)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Zt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():I(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;hi.fromBufferAttribute(r.attributes.skinIndex,e),gi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(mi.copy(t),t.set(0,0,0,0)):(mi.set(...t,1),t.set(0,0,0)),mi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=gi.getComponent(e);if(r!==0){let i=hi.getComponent(e);vi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(_i.copy(mi).applyMatrix4(vi),r)}}return t.isVector4&&(t.w=mi.w),t.applyMatrix4(this.bindMatrixInverse)}},wi=class extends kn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Ti=class extends Xt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ei=new H,Di=new H,Oi=class e{constructor(e=[],t=[]){this.uuid=dt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){I(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new H)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new H;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Di;Ei.multiplyMatrices(i,t[r]),Ei.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ti(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(I(`Skeleton: No bone found with UUID:`,r),i=new wi),this.bones.push(i),this.boneInverses.push(new H().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},ki=class extends Cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ai=new H,ji=new H,Mi=[],Ni=new er,Pi=new H,Fi=new di,Ii=new Ar,Li=class extends di{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Pi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),Ni.copy(e.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Ni)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ai),Ii.copy(e.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(Ii)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ii.copy(this.boundingSphere),Ii.applyMatrix4(n),e.ray.intersectsSphere(Ii)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ai),ji.multiplyMatrices(n,Ai),Fi.matrixWorld=ji,Fi.raycast(e,Mi);for(let e=0,n=Mi.length;e<n;e++){let n=Mi[e];n.instanceId=i,n.object=this,t.push(n)}Mi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ri=new Ar,zi=new z(.5,.5),Bi=new B,Vi=class{constructor(e=new Gr,t=new Gr,n=new Gr,r=new Gr,i=new Gr,a=new Gr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476+zi.distanceTo(e.center),Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Bi.x=r.normal.x>0?e.max.x:e.min.x,Bi.y=r.normal.y>0?e.max.y:e.min.y,Bi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hi=class extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ui=new B,Wi=new B,Gi=new H,Ki=new Qr,qi=new Ar,Ji=new B,Yi=new B,Xi=class extends kn{constructor(e=new Rr,t=new Hi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ui.fromBufferAttribute(t,e-1),Wi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ui.distanceTo(Wi);e.setAttribute(`lineDistance`,new Er(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),qi.radius+=i,e.ray.intersectsSphere(qi)===!1)return;Gi.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Gi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Zi(this,e,Ki,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Zi(this,e,Ki,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Zi(this,e,Ki,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Zi(this,e,Ki,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Zi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ui.fromBufferAttribute(s,i),Wi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ui,Wi,Ji,Yi)>r)return;Ji.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ji);if(!(c<t.near||c>t.far))return{distance:c,point:Yi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Qi=new B,$i=new B,ea=class extends Xi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Qi.fromBufferAttribute(t,e),$i.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Qi.distanceTo($i);e.setAttribute(`lineDistance`,new Er(n,1))}else I(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ta=class extends Xi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},na=class extends qr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ra=new H,ia=new Qr,aa=new Ar,oa=new B,sa=class extends kn{constructor(e=new Rr,t=new na){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),aa.radius+=i,e.ray.intersectsSphere(aa)===!1)return;ra.copy(r).invert(),ia.copy(e.ray).applyMatrix4(ra);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);oa.fromBufferAttribute(l,n),ca(oa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)oa.fromBufferAttribute(l,a),ca(oa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ca(e,t,n,r,i,a,o){let s=ia.distanceSqToPoint(e);if(s<n){let n=new B;ia.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var la=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ua=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},da=class extends Xt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fa=class extends da{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pa=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ma=class e extends Rr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ha=class e extends Rr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new B,g=new B;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Er(o,3)),this.setAttribute(`normal`,new Er(s,3)),this.setAttribute(`uv`,new Er(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ga=class e extends Rr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Er(a,3)),this.setAttribute(`normal`,new Er(o,3)),this.setAttribute(`uv`,new Er(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_a=class e extends Rr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Er(u,3)),this.setAttribute(`normal`,new Er(d,3)),this.setAttribute(`uv`,new Er(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},va=class e extends _a{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ya=class e extends Rr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Er(i,3)),this.setAttribute(`normal`,new Er(i.slice(),3)),this.setAttribute(`uv`,new Er(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new B,r=new B,i=new B;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new B;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new B;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new B,t=new B,n=new B,r=new B,o=new z,s=new z,c=new z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ba=class e extends ya{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},xa=class e extends Rr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Sa=class e extends Rr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ca(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ta(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ta(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function wa(e){let t={};for(let n=0;n<e.length;n++){let r=Ca(e[n]);for(let e in r)t[e]=r[e]}return t}function Ta(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ea(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Da(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Oa={clone:Ca,merge:wa},ka=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Aa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ja=class extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ka,this.fragmentShader=Aa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=Ea(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new H().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ma=class extends ja{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Na=class extends qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pa=class extends Na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return R(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new U(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new U(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new U(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Fa=class extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ia=class extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function La(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ra(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function za(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ba(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Va(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Ha=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ua=class extends Ha{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:P,endingEnd:P}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case F:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case F:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Wa=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ga=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ka=class extends Ha{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ya(n,t,g,y,r);i[p]=qa(x,o,_,b,m)}return i}};function qa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ja(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ya(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=qa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ja(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Xa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ra(e.settings)&&(n.settings={inTangents:La(e.settings.inTangents,Array),outTangents:La(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ka(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case N:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return N;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ra(this.settings)&&(Za(this.settings.inTangents,e),Za(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ra(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Za(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Xa.prototype.ValueTypeName=``,Xa.prototype.TimeBufferType=Float32Array,Xa.prototype.ValueBufferType=Float32Array,Xa.prototype.DefaultInterpolation=Ie;var Qa=class extends Xa{constructor(e,t,n){super(e,t,n)}};Qa.prototype.ValueTypeName=`bool`,Qa.prototype.ValueBufferType=Array,Qa.prototype.DefaultInterpolation=N,Qa.prototype.InterpolantFactoryMethodLinear=void 0,Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Xa{constructor(e,t,n,r){super(e,t,n,r)}};$a.prototype.ValueTypeName=`color`;var eo=class extends Xa{constructor(e,t,n,r){super(e,t,n,r)}};eo.prototype.ValueTypeName=`number`;var to=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},no=class extends Xa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new to(this.times,this.values,this.getValueSize(),e)}};no.prototype.ValueTypeName=`quaternion`,no.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends Xa{constructor(e,t,n){super(e,t,n)}};ro.prototype.ValueTypeName=`string`,ro.prototype.ValueBufferType=Array,ro.prototype.DefaultInterpolation=N,ro.prototype.InterpolantFactoryMethodLinear=void 0,ro.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends Xa{constructor(e,t,n,r){super(e,t,n,r)}};io.prototype.ValueTypeName=`vector`;var ao=class{constructor(e=``,t=-1,n=[],r=Be){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=dt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(so(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Xa.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=za(o);o=Ba(o,1,c),s=Ba(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new eo(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function oo(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return eo;case`vector`:case`vector2`:case`vector3`:case`vector4`:return io;case`color`:return $a;case`quaternion`:return no;case`bool`:case`boolean`:return Qa;case`string`:return ro}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function so(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=oo(e.type);if(e.times===void 0){let t=[],n=[];Va(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),Ra(e.settings)&&(n.settings={inTangents:La(e.settings.inTangents,Float32Array),outTangents:La(e.settings.outTangents,Float32Array)}),n}var co={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(lo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!lo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function lo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var uo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},fo=class{constructor(e){this.manager=e===void 0?uo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var po={},mo=class extends Error{constructor(e,t){super(e),this.response=t}},ho=class extends fo{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=co.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(po[e]!==void 0){po[e].push({onLoad:t,onProgress:n,onError:r});return}po[e]=[],po[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&I(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=po[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new mo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{co.add(`file:${e}`,t);let n=po[e];delete po[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=po[e];if(n===void 0)throw this.manager.itemError(e),t;delete po[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},go=new WeakMap,_o=class extends fo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=co.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=go.get(a);e===void 0&&(e=[],go.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Qe(`img`);function s(){l(),t&&t(this);let n=go.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}go.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),co.remove(`image:${e}`);let n=go.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}go.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),co.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},vo=class extends fo{constructor(e){super(e)}load(e,t,n,r){let i=new Xt,a=new _o(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},yo=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},bo=class extends yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xo=new H,So=new B,Co=new B,wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new H,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;So.setFromMatrixPosition(e.matrixWorld),t.position.copy(So),Co.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Co),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},To=new B,Eo=new Nt,Do=new B,Oo=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new H,this.projectionMatrix=new H,this.projectionMatrixInverse=new H,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(To,Eo,Do),Do.x===1&&Do.y===1&&Do.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Do.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(To,Eo,Do),Do.x===1&&Do.y===1&&Do.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Do.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ko=new B,Ao=new z,jo=new z,Mo=class extends Oo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ut*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ut*2*Math.atan(Math.tan(lt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ko.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ko.x,ko.y).multiplyScalar(-e/ko.z),ko.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ko.x,ko.y).multiplyScalar(-e/ko.z)}getViewSize(e,t){return this.getViewBounds(e,Ao,jo),t.subVectors(jo,Ao)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},No=class extends wo{constructor(){super(new Mo(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ut*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Po=class extends yo{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new No}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Fo=class extends wo{constructor(){super(new Mo(90,1,.5,500)),this.isPointLightShadow=!0}},Io=class extends yo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Fo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Lo=class extends Oo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ro=class extends wo{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zo=class extends yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Ro}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Bo=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Vo=new WeakMap,Ho=class extends fo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&I(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&I(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=co.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Vo.has(a)===!0?(r&&r(Vo.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return co.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),Vo.set(s,t),co.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});co.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Uo=-90,Wo=1,Go=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mo(Uo,Wo,e,t);r.layers=this.layers,this.add(r);let i=new Mo(Uo,Wo,e,t);i.layers=this.layers,this.add(i);let a=new Mo(Uo,Wo,e,t);a.layers=this.layers,this.add(a);let o=new Mo(Uo,Wo,e,t);o.layers=this.layers,this.add(o);let s=new Mo(Uo,Wo,e,t);s.layers=this.layers,this.add(s);let c=new Mo(Uo,Wo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ko=class extends Mo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},qo=`\\[\\]\\.:\\/`,Jo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Yo=`[^\\[\\]\\.:\\/]`,Xo=`[^`+qo.replace(`\\.`,``)+`]`,Zo=`((?:WC+[\\/:])*)`.replace(`WC`,Yo),Qo=`(WCOD+)?`.replace(`WCOD`,Xo),$o=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Yo),es=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Yo),ts=RegExp(`^`+Zo+Qo+$o+es+`$`),ns=[`material`,`materials`,`bones`,`map`],rs=class{constructor(e,t,n){let r=n||is.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},is=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Jo,``)}static parseTrackName(e){let t=ts.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ns.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};is.Composite=rs,is.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},is.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},is.prototype.GetterByBindingType=[is.prototype._getValue_direct,is.prototype._getValue_array,is.prototype._getValue_arrayElement,is.prototype._getValue_toArray],is.prototype.SetterByBindingTypeAndVersioning=[[is.prototype._setValue_direct,is.prototype._setValue_direct_setNeedsUpdate,is.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[is.prototype._setValue_array,is.prototype._setValue_array_setNeedsUpdate,is.prototype._setValue_array_setMatrixWorldNeedsUpdate],[is.prototype._setValue_arrayElement,is.prototype._setValue_arrayElement_setNeedsUpdate,is.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[is.prototype._setValue_fromArray,is.prototype._setValue_fromArray_setNeedsUpdate,is.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function as(e,t,n,r){let i=os(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case A:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case M:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function os(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function ss(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function cs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},ls={basic:{uniforms:wa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:wa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:wa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:wa([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:wa([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:wa([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:wa([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:wa([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:wa([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:wa([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:wa([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distance:{uniforms:wa([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distance_vert,fragmentShader:W.distance_frag},shadow:{uniforms:wa([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};ls.physical={uniforms:wa([ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var us={r:0,b:0,g:0},ds=new H,fs=new V;fs.set(-1,0,0,0,1,0,0,0,1);function ps(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new di(new ma(1,1,1),new ja({name:`BackgroundCubeMaterial`,uniforms:Ca(ls.backgroundCube.uniforms),vertexShader:ls.backgroundCube.vertexShader,fragmentShader:ls.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ds.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fs),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new di(new xa(2,2),new ja({name:`BackgroundMaterial`,uniforms:Ca(ls.background.uniforms),vertexShader:ls.background.vertexShader,fragmentShader:ls.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(us,Da(e)),n.buffers.color.setClear(us.r,us.g,us.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ms(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function hs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function gs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function _s(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Gr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var vs=4,ys=6,bs=20,xs=256,Ss=new Lo,Cs=new U,ws=null,Ts=0,Es=0,Ds=!1,Os=new B,ks=new B,As=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Os}=i;ws=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),Es=this._renderer.getActiveMipmapLevel(),Ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ls(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Is(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ws,Ts,Es),this._renderer.xr.enabled=Ds,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ws=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),Es=this._renderer.getActiveMipmapLevel(),Ds=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:Ue,depthBuffer:!1},r=Ms(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ms(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=js(r)),this._blurMaterial=Fs(r,e,t),this._ggxMaterial=Ps(r,e,t)}return r}_compileMaterial(e){let t=new di(new Rr,e);this._renderer.compile(t,Ss)}_sceneToCubeUV(e,t,n,r,i){let a=new Mo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Cs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new ma,new $r({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Cs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ns(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ls()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Is());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ns(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ss)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-vs?n-d+vs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ns(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ss),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ns(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ss)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ns(t,3*l*(r>this._lodMax-vs?r-this._lodMax+vs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ss)}};function js(e){let t=[],n=[],r=e,i=e-vs+1+ys;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ks.set(1,r,n):e===1?ks.set(-n,1,-r):e===2?ks.set(-n,r,1):e===3?ks.set(-1,r,-n):e===4?ks.set(-n,-1,r):ks.set(n,r,-1),ks.toArray(l,(e*6+t)*3)}}let u=new Rr;u.setAttribute(`position`,new Cr(c,3)),u.setAttribute(`outputDirection`,new Cr(l,3)),n.push(new di(u,null)),r>vs&&r--}return{lodMeshes:n,sizeLods:t}}function Ms(e,t,n){let r=new $t(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ns(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ps(e,t,n){return new ja({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fs(e,t,n){return new ja({name:`SphericalGaussianBlur`,defines:{SAMPLES:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Is(){return new ja({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ls(){return new ja({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zs=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new la(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ma(5,5,5),i=new ja({name:`CubemapFromEquirect`,uniforms:Ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new di(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new Go(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Bs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new zs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new As(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new As(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Vs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Hs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Tr:wr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Us(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ws(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Gs(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new en(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new z(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ks(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var qs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Js(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Rr;l.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Er([0,2,0,0,2,0],2));let u=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new di(l,u),f=new Lo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new $t(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Bt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=qs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ys=new Xt,Xs=new da(1,1),Zs=new en,Qs=new tn,$s=new la,ec=[],tc=[],nc=new Float32Array(16),rc=new Float32Array(9),ic=new Float32Array(4);function ac(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ec[i];if(a===void 0&&(a=new Float32Array(i),ec[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function oc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function sc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function cc(e,t){let n=tc[t];n===void 0&&(n=new Int32Array(t),tc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function lc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(oc(n,t))return;e.uniform2fv(this.addr,t),sc(n,t)}}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(oc(n,t))return;e.uniform3fv(this.addr,t),sc(n,t)}}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(oc(n,t))return;e.uniform4fv(this.addr,t),sc(n,t)}}function pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(oc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),sc(n,t)}else{if(oc(n,r))return;ic.set(r),e.uniformMatrix2fv(this.addr,!1,ic),sc(n,r)}}function mc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(oc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),sc(n,t)}else{if(oc(n,r))return;rc.set(r),e.uniformMatrix3fv(this.addr,!1,rc),sc(n,r)}}function hc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(oc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),sc(n,t)}else{if(oc(n,r))return;nc.set(r),e.uniformMatrix4fv(this.addr,!1,nc),sc(n,r)}}function gc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(oc(n,t))return;e.uniform2iv(this.addr,t),sc(n,t)}}function vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(oc(n,t))return;e.uniform3iv(this.addr,t),sc(n,t)}}function yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(oc(n,t))return;e.uniform4iv(this.addr,t),sc(n,t)}}function bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(oc(n,t))return;e.uniform2uiv(this.addr,t),sc(n,t)}}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(oc(n,t))return;e.uniform3uiv(this.addr,t),sc(n,t)}}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(oc(n,t))return;e.uniform4uiv(this.addr,t),sc(n,t)}}function wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Xs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Xs):a=Ys,n.setTexture2D(t||a,i)}function Tc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Qs,i)}function Ec(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||$s,i)}function Dc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Zs,i)}function Oc(e){switch(e){case 5126:return lc;case 35664:return uc;case 35665:return dc;case 35666:return fc;case 35674:return pc;case 35675:return mc;case 35676:return hc;case 5124:case 35670:return gc;case 35667:case 35671:return _c;case 35668:case 35672:return vc;case 35669:case 35673:return yc;case 5125:return bc;case 36294:return xc;case 36295:return Sc;case 36296:return Cc;case 35678:case 36198:case 36298:case 36306:case 35682:return wc;case 35679:case 36299:case 36307:return Tc;case 35680:case 36300:case 36308:case 36293:return Ec;case 36289:case 36303:case 36311:case 36292:return Dc}}function kc(e,t){e.uniform1fv(this.addr,t)}function Ac(e,t){let n=ac(t,this.size,2);e.uniform2fv(this.addr,n)}function jc(e,t){let n=ac(t,this.size,3);e.uniform3fv(this.addr,n)}function Mc(e,t){let n=ac(t,this.size,4);e.uniform4fv(this.addr,n)}function Nc(e,t){let n=ac(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Pc(e,t){let n=ac(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Fc(e,t){let n=ac(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ic(e,t){e.uniform1iv(this.addr,t)}function Lc(e,t){e.uniform2iv(this.addr,t)}function Rc(e,t){e.uniform3iv(this.addr,t)}function zc(e,t){e.uniform4iv(this.addr,t)}function Bc(e,t){e.uniform1uiv(this.addr,t)}function Vc(e,t){e.uniform2uiv(this.addr,t)}function Hc(e,t){e.uniform3uiv(this.addr,t)}function Uc(e,t){e.uniform4uiv(this.addr,t)}function Wc(e,t,n){let r=this.cache,i=t.length,a=cc(n,i);oc(r,a)||(e.uniform1iv(this.addr,a),sc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Xs:Ys;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Gc(e,t,n){let r=this.cache,i=t.length,a=cc(n,i);oc(r,a)||(e.uniform1iv(this.addr,a),sc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Qs,a[e])}function Kc(e,t,n){let r=this.cache,i=t.length,a=cc(n,i);oc(r,a)||(e.uniform1iv(this.addr,a),sc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||$s,a[e])}function qc(e,t,n){let r=this.cache,i=t.length,a=cc(n,i);oc(r,a)||(e.uniform1iv(this.addr,a),sc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Zs,a[e])}function Jc(e){switch(e){case 5126:return kc;case 35664:return Ac;case 35665:return jc;case 35666:return Mc;case 35674:return Nc;case 35675:return Pc;case 35676:return Fc;case 5124:case 35670:return Ic;case 35667:case 35671:return Lc;case 35668:case 35672:return Rc;case 35669:case 35673:return zc;case 5125:return Bc;case 36294:return Vc;case 36295:return Hc;case 36296:return Uc;case 35678:case 36198:case 36298:case 36306:case 35682:return Wc;case 35679:case 36299:case 36307:return Gc;case 35680:case 36300:case 36308:case 36293:return Kc;case 36289:case 36303:case 36311:case 36292:return qc}}var Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Oc(t.type)}},Xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jc(t.type)}},Zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function $c(e,t){e.seq.push(t),e.map[t.id]=t}function el(e,t,n){let r=e.name,i=r.length;for(Qc.lastIndex=0;;){let a=Qc.exec(r),o=Qc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){$c(n,l===void 0?new Yc(s,e,t):new Xc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Zc(s),$c(n,e)),n=e}}}var tl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);el(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function nl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var rl=37297,il=0;function al(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ol=new V;function sl(e){Bt._getMatrix(ol,Bt.workingColorSpace,e);let t=`mat3( ${ol.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function cl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+al(e.getShaderSource(t),r)}return i}function ll(e,t){let n=sl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ul={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function dl(e,t){let n=ul[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var fl=new B;function pl(){return Bt.getLuminanceCoefficients(fl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${fl.x.toFixed(4)}, ${fl.y.toFixed(4)}, ${fl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ml(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(_l).join(`
`)}function hl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function gl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function _l(e){return e!==``}function vl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bl=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(e){return e.replace(bl,Cl)}var Sl=new Map;function Cl(e,t){let n=W[t];if(n===void 0){let e=Sl.get(t);if(e!==void 0)n=W[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return xl(n)}var wl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(e){return e.replace(wl,El)}function El(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Dl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ol={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function kl(e){return Ol[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Al={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function jl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Al[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ml={302:`ENVMAP_MODE_REFRACTION`};function Nl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ml[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Pl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Fl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Pl[e.combine]||`ENVMAP_BLENDING_NONE`}function Il(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ll(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=kl(n),l=jl(n),u=Nl(n),d=Fl(n),f=Il(n),p=ml(n),m=hl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(_l).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(_l).join(`
`),_.length>0&&(_+=`
`)):(g=[Dl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(_l).join(`
`),_=[Dl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:dl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,ll(`linearToOutputTexel`,n.outputColorSpace),pl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(_l).join(`
`)),o=xl(o),o=vl(o,n),o=yl(o,n),s=xl(s),s=vl(s,n),s=yl(s,n),o=Tl(o),s=Tl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=nl(i,i.VERTEX_SHADER,y),S=nl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=cl(i,x,`vertex`),n=cl(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new tl(i,h),T=gl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,rl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=il++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Rl=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bl(e),t.set(e,n)),n}},Bl=class{constructor(e){this.id=Rl++,this.code=e,this.usedTimes=0}};function Vl(e){return e===1030||e===37490||e===36285}function Hl(e,t,n,r,i,a){let o=new pn,s=new zl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=ls[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Vl(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ls[t];n=Oa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ll(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ul(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Wl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Kl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Wl),r.length>1&&r.sort(t||Gl),i.length>1&&i.sort(t||Gl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ql(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Kl,e.set(t,[i])):n>=r.length?(i=new Kl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Jl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new U};break;case`SpotLight`:n={position:new B,direction:new B,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Yl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Xl=0;function Zl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ql(e){let t=new Jl,n=Yl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new H,o=new H;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Zl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Xl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function $l(e){let t=new Ql(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function eu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new $l(e),t.set(n,[a])):r>=i.length?(a=new $l(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var tu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ru=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],iu=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],au=new H,ou=new B,su=new B;function cu(e,t,n){let r=new Vi,a=new z,o=new z,c=new Zt,l=new Fa,u=new Ia,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:tu,fragmentShader:nu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Rr;y.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new di(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(a.x,a.y,{format:k,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new da(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new zs(a.x),p.map.depthTexture=new fa(a.x,h)):(p.map=new $t(a.x,a.y),p.map.depthTexture=new da(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ou.setFromMatrixPosition(d.matrixWorld),e.position.copy(ou),su.copy(e.position),su.add(ru[t]),e.up.copy(iu[t]),e.lookAt(su),e.updateMatrixWorld(),n.makeTranslation(-ou.x,-ou.y,-ou.z),au.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(au,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(a.x,a.y,{format:k,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function lu(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Zt().fromArray(oe),le=new Zt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function uu(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Qe(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?We:Bt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ae(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,n){let r=f.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Se(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function pe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Se(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?Ce(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},ge={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,he[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,he[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,he[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,ge[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,ge[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,_e[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=be(r.start,n.width,4),c=be(t.start,n.width,4);r.start<=i+1&&s===c&&be(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Se(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ye(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ie(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ve(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&xe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=as(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=as(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Le(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r){if(n.image.length!==6)return;let i=ye(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Bt.getPrimaries(Bt.workingColorSpace),s=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ie(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ve(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Le(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Pe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,re)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else M(n.depthTexture,0);let o=a.__webglTexture,s=Pe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ee(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(n.__webglFramebuffer[0],t,0):Ee(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Te(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,A);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Fe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)we(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ve(s,i),we(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ve(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else we(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(je.push(o),Me.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function du(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var fu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ja({vertexShader:fu,fragmentShader:pu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new mu,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new z,ee=null,k=null,te=new Mo;te.viewport=new Zt;let ne=new Mo;ne.viewport=new Zt;let re=[te,ne],A=new Ko,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getHandSpace()};function ae(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $t(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new da(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $t(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new B,le=new B;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ne.near=te.near=t,A.far=ne.far=te.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,te.layers.mask=A.layers.mask&-5,ne.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,te,ne):A.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new Mo,o.layers.enable(n),o.viewport=new Zt,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new pa,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let me=new ss;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},gu=new H,_u=new V;_u.set(-1,0,0,0,1,0,0,0,1);function vu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Da(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(gu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(_u),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function yu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var bu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xu=null;function Su(){return xu===null&&(xu=new Ti(bu,16,16,k,_),xu.name=`DFG_LUT`,xu.minFilter=s,xu.magFilter=s,xu.wrapS=n,xu.wrapT=n,xu.generateMipmaps=!1,xu.needsUpdate=!0),xu}var Cu=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ne,te,ee]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,O=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=He;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Zt,he=new Zt,ge=null,_e=new U(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Zt(0,0,ye,be),Te=new Zt(0,0,ye,be),Ee=!1,De=new Vi,Oe=!1,ke=!1,Ae=new H,je=new B,Me=new Zt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,F,Be,Ve,Ue,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt,rt,at,ot,st,ct;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,dt,!1),t.addEventListener(`webglcontextrestored`,R,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}lt()}catch(e){throw t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,R,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),L(`WebGLRenderer: `+e.message),e}function lt(){Le=new Vs(N),Le.init(),ot=new du(N,Le),Re=new gs(N,Le,e,ot),P=new lu(N,Le),Re.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new Ws(N),F=new Ul,Be=new uu(N,Le,P,F,Re,ot,ze),Ve=new Bs(j),Ue=new cs(N),st=new ms(N,Ue),We=new Hs(N,Ue,ze,st),Ge=new Ks(N,We,Ue,st,ze),nt=new Gs(N,Re,Be),Ze=new _s(F),Ke=new Hl(j,Ve,Le,Re,st,Ze),qe=new vu(j,F),Je=new ql,Xe=new eu(Le),et=new ps(j,Ve,P,Ge,x,s),Qe=new cu(j,Ge,Re),ct=new yu(N,ze,Re,P),rt=new hs(N,Le,ze),at=new Us(N,Le,ze),ze.programs=Ke.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=Je,j.shadowMap=Qe,j.state=P,j.info=ze}S!==1009&&(ie=new Js(S,t.width,t.height,o,r,i));let ut=new hu(j,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){ut.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,R,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),et.dispose(),Je.dispose(),Xe.dispose(),F.dispose(),Ve.dispose(),Ge.dispose(),st.dispose(),ct.dispose(),Ke.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,yt),ut.removeEventListener(`sessionend`,bt),xt.stop()};function dt(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),ae=!0}function R(){tt(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;lt(),ze.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ft(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),F.remove(e)}function ht(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),Oe===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Xe.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),Oe===!0&&Ze.setGlobalState(this.clippingPlanes,t),oe!==null&&Qe.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new ss;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,ut.setAnimationLoop(e),e===null?xt.stop():xt.start()},ut.addEventListener(`sessionstart`,yt),ut.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Xe.get(e,A.length),k.init(t),k.state.textureUnits=Be.getTextureUnits(),A.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Ye,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),O=Je.get(e,re.length),O.init(),re.push(O),ut.enabled===!0&&ut.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,j.sortObjects)}St(e,t,0,j.sortObjects),O.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&O.sort(Se,Ce),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&et.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ze.beginShadows();let i=k.state.shadowsArray;if(Qe.render(i,e,t),Oe===!0&&Ze.endShadows(),(r&&ie.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Pe&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(O,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Pe&&et.render(e),Ct(O,e,t)}M!==null&&de===0&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),st.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(k=A[A.length-1],Be.setTextureUnits(k.state.textureUnits),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),O=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Me.z,s,t)}}else a.visible&&O.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&et.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,r),Tt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ke.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),kt(e,s),r.needsLights=z(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=tl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=At(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,Be),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,Be),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,Be));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&nt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Su()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Mt(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}tl.upload(N,Ot(v),E,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(tl.upload(N,Ot(v),E,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,x),ct.bind(n,x)}}return x}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function z(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function Nt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await it(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},K={dayLengthSec:600,startHour:6.5,energy:{fmrKJPerDay:1e3,capacityKJ:1500,startFrac:.62,activity:{rest:.55,walk:.85,trot:1.3,sprint:3.2,crouch:.75,climb:2.4,swim:3.6,eat:.6,sniff:.6,air:1.6},softSandCost:1.25,lowFrac:.25,minSpeedFactor:.55,noSprintFrac:.08,starveGraceSec:9,cacheDecayDays:2},difficulty:{easy:{metabolism:.72,bobcatAware:.7,bobcatCount:.7,ohvCount:.7,preyAware:.8},normal:{metabolism:1,bobcatAware:1,bobcatCount:1,ohvCount:1,preyAware:1},realistic:{metabolism:1.3,bobcatAware:1.25,bobcatCount:1.2,ohvCount:1.3,preyAware:1.2}},marten:{walk:1.4,trot:3.4,sprint:7.6,crouch:.85,swim:.75,climb:1.7,limb:1.8,accel:9,turnRate:9,jumpV:3.4,gravity:13.5,pounceRange:2.3,chargedPounceRange:3.6,pounceCooldown:.75,chargeTime:.7,staminaSprintSec:6.5,staminaRegenSec:4.5,staminaPounce:.18,biteRadius:.55,eyeHeight:.17,shrubSlow:.16,herbSlow:.08},berries:{mouthfulG:5,biteSec:2,shrubFruitG:[20,60],fruitingFrac:{huckleberry:.42,salal:.38,kinnikinnick:.3},canopyPenalty:.6,reach:1.25,drawDist:20},prey:{maxActive:36,spawnMin:7,spawnMax:38,despawn:62,maxFlocks:2,visScaleMax:1.3,feedSec:[1.8,5],watchSec:[.7,1.9],watchMul:1.6,feedMul:.3,stillMul:.35,dodgeFrom:.35,dodgeTo:.95,dodgeMax:.85,watchingAlert:.25,treeSquirrelFrac:.6,logChipmunkFrac:.45,shrubMouseFrac:.45,viewMin:11,viewBias:.55,startPrey:10,flyInFrac:.5,spawnInterval:.3,densityPerHa:9,eatSecPer100g:2.6,minEatSec:1.4,maxEatSec:9},bobcat:{maxActive:1,firstSpawnSec:60,respawnSec:[80,170],spawnDist:[60,95],despawnDist:220,passOffset:[12,30],visitSec:200,distressRange:120,distressChance:.4,distressArrive:[15,35],sightingDist:45,walk:1.6,travel:2.4,stalk:1.1,chase:12.5,shrubSpeedFloor:.16,sandSpeed:.85,sightRange:46,hearRange:22,fov:Math.PI*.66,awareRise:.95,awareDecay:.2,stalkAt:.45,chaseAt:.85,rushDist:14,pounceRange:3.4,pounceWindup:.42,pounceTime:.36,killRadius:.75,grazeRadius:1.25,grazeKJ:220,giveUpSec:9,treeWaitSec:[12,22],treeClimbHeight:2.6,thicket:.6,swipeRange:1.3,thicketGiveUpSec:4.5},ohv:{visitGapSec:170,firstVisitSec:[45,100],visitSec:[60,140],party:[1,3],sandRadius:330,maxActive:5,nightFactor:.25,spawnDist:[170,380],despawnDist:560,speed:[9,19],killRadius:1.25,engineHearRange:220},senses:{range:32,predatorRange:70,slowFactor:.4,hearRange:16,songCueRange:34,spotRange:16,senseRange:36,flashSec:1.5,trailSec:14,trackRange:45,trackKeep:75},flocks:{moveSec:[10,22],moveDist:[6,13],flushDist:[10,20],leaveChance:.12,radius:{ground:3,shrub:4,berry:3.5,canopy:5,tree:5},callSec:{bushtit:1.6,gc_kinglet:2.2,chickadee:2.6,yr_warbler:3,cedar_waxwing:2.4,robin:4.5,varied_thrush:5,bandtailed_pigeon:7}},arboreal:{speed:3,leapDist:3.8,chatterRange:24,calmSec:14},scat:{everyGameHours:4.5,gutPassageHours:6}},q={OCEAN:0,SWASH:1,BEACH:2,FOREDUNE:3,OPEN_SAND:4,SPARSE:5,MEADOW:6,THICKET:7,FOREST:8,WET_FOREST:9,LAKE:10,MARSH:11,ROAD:12,DEVELOPED:13},wu={mammal:6.8,lagomorph:6.2,bird:7.5,fish_oily:7,fish_lean:4.2,amphibian:4},Tu=.85,Eu=e=>{let t=new Float32Array(14);for(let[n,r]of Object.entries(e))t[q[n]]=r;return t},Du=Eu({FOREST:1,THICKET:1,WET_FOREST:.6,SPARSE:.25,MEADOW:.2}),Ou=Eu({FOREST:1,WET_FOREST:.9,THICKET:.5,MEADOW:.15}),ku=Eu({MEADOW:1,MARSH:.9,WET_FOREST:.8,FOREDUNE:.25,THICKET:.2,FOREST:.15}),Au=Eu({FOREST:1,THICKET:1,WET_FOREST:.9,MEADOW:.7,SPARSE:.8,FOREDUNE:.7,MARSH:.3,BEACH:.1}),ju=Eu({THICKET:1,SPARSE:.8,FOREST:.6,MEADOW:.7,WET_FOREST:.5,FOREDUNE:.3,ROAD:.3}),Mu=Eu({FOREST:1,WET_FOREST:.8,THICKET:.6,SPARSE:.3,MEADOW:.2}),Nu=Eu({SWASH:1,BEACH:.6}),Pu=[1,1,1,1];function Fu(e){let t=wu[e.edKey];return e.kJ=Math.round(e.massG*e.edible*t*Tu),e.spawnable=e.spawnable!==!1,e}var Iu=[Fu({id:`wrentit`,name:`Wrentit`,sci:`Chamaea fasciata`,group:`bird`,model:`wrentit`,massG:14,edible:.85,edKey:`bird`,rra:null,fo:20,eriksson:4.4,efo:[5.9,6.5,0],archetype:`shrubBird`,habitat:Du,season:Pu,activity:`day`,flock:[1,2],flushDist:2.6,speed:3.5,note:`A weak flier that almost never leaves dense shrubs — it flutters from bush to bush instead of flying away, which may be exactly why martens catch so many.`}),Fu({id:`towhee`,name:`Spotted towhee`,sci:`Pipilo maculatus`,group:`bird`,model:`towhee`,massG:40,edible:.85,edKey:`bird`,rra:null,fo:10,archetype:`groundBird`,habitat:Eu({THICKET:1,FOREST:.8,SPARSE:.6,WET_FOREST:.5,MEADOW:.4}),season:Pu,activity:`day`,flock:[1,2],flushDist:4.5,speed:3,berryVisitor:25,note:`Scratches for food in leaf litter under shrubs and eats huckleberries.`}),Fu({id:`sparrow`,name:`Sparrow (song/fox)`,sci:`Passerellidae`,group:`bird`,model:`sparrow`,massG:25,edible:.85,edKey:`bird`,rra:null,fo:10,archetype:`groundBird`,habitat:Eu({THICKET:1,MEADOW:.9,SPARSE:.8,FOREDUNE:.5,WET_FOREST:.5,FOREST:.4}),season:[1,1,1.2,1.2],activity:`day`,flock:[1,3],flushDist:4,speed:3,berryVisitor:10,note:`Song and fox sparrows forage on the ground at shrub edges and in the deflation-plain thickets.`}),Fu({id:`chickadee`,name:`Black-capped chickadee`,sci:`Poecile atricapillus`,group:`bird`,model:`chickadee`,massG:11,edible:.85,edKey:`bird`,rra:null,fo:5,archetype:`shrubBird`,habitat:Mu,season:Pu,activity:`day`,flock:[3,6],flockMode:`canopy`,flushDist:3.5,speed:4,note:`Small flocks glean insects through shore pine, willow and shrubs.`}),Fu({id:`bandtailed_pigeon`,name:`Band-tailed pigeon`,sci:`Patagioenas fasciata`,group:`bird`,model:`band_tailed_pigeon`,massG:350,edible:.8,edKey:`bird`,rra:null,fo:5,archetype:`treeBird`,habitat:Eu({FOREST:1,THICKET:.8,WET_FOREST:.5}),season:[.6,1,1.3,.1],activity:`day`,flock:[3,8],flockMode:`tree`,flushDist:9,speed:9,berryVisitor:4,note:`A big, berry-eating pigeon that feeds in huckleberry and cascara in late summer and fall. A huge meal if you can ambush one.`}),Fu({id:`stellers_jay`,name:`Steller's jay`,sci:`Cyanocitta stelleri`,group:`bird`,model:`stellers_jay`,massG:120,edible:.85,edKey:`bird`,rra:null,fo:5,eriksson:1.1,efo:[2.9,0,0],archetype:`treeBird`,habitat:Eu({FOREST:1,WET_FOREST:.6,THICKET:.6,SPARSE:.3}),season:Pu,activity:`day`,flock:[1,2],flushDist:7,speed:7,berryVisitor:4,scolds:!0,note:`Loud and wary. Jays scold predators — listen for their harsh "shaack-shaack": it often means a bobcat is near.`}),Fu({id:`swainsons_thrush`,name:`Swainson's thrush`,sci:`Catharus ustulatus`,group:`bird`,model:`swainsons_thrush`,massG:30,edible:.85,edKey:`bird`,rra:null,fo:10,eriksson:1.1,efo:[0,0,4],archetype:`groundBird`,habitat:Eu({FOREST:1,THICKET:.9,WET_FOREST:.7}),season:[.5,1.3,.6,0],activity:`day`,flock:[1,1],flushDist:4,speed:4,berryVisitor:10,note:`A summer visitor of dense, shady understory; fattens on berries in late summer before migrating to the tropics.`}),Fu({id:`yr_warbler`,name:`Yellow-rumped warbler`,sci:`Setophaga coronata`,group:`bird`,model:`yellowrumped_warbler`,massG:12.5,edible:.85,edKey:`bird`,rra:null,fo:5,eriksson:3.3,efo:[0,3.2,8],archetype:`shrubBird`,habitat:Eu({THICKET:1,FOREST:.7,WET_FOREST:.6,SPARSE:.4}),season:[1,.1,1,1.3],activity:`day`,flock:[3,7],flockMode:`shrub`,flushDist:3.5,speed:4,note:`Winters on the coast in flocks — famously able to digest the waxy fruit of wax myrtle (the "myrtle warbler").`}),Fu({id:`bushtit`,name:`Bushtit`,sci:`Psaltriparus minimus`,group:`bird`,model:`chickadee`,tint:`#9a958a`,scale:.8,massG:5.5,edible:.85,edKey:`bird`,rra:null,fo:5,archetype:`shrubBird`,habitat:Eu({THICKET:1,WET_FOREST:.7,FOREST:.5,MEADOW:.4}),season:Pu,activity:`day`,flock:[8,14],flockMode:`shrub`,flushDist:3,speed:3.5,note:`Tiny, chattering flocks that roam through wax myrtle and willow thickets.`}),Fu({id:`robin`,name:`American robin`,sci:`Turdus migratorius`,group:`bird`,model:`robin`,massG:77,edible:.85,edKey:`bird`,rra:null,fo:2.5,eriksson:2.2,efo:[0,0,8],archetype:`groundBird`,habitat:Eu({SPARSE:1,MEADOW:.9,FOREST:.7,THICKET:.7,ROAD:.5}),season:Pu,activity:`day`,flock:[3,8],flockMode:`ground`,flockSeasons:[`fall`,`winter`,`spring`],flushDist:6,speed:6,berryVisitor:25,note:`A berry eater that visits fruiting huckleberry.`}),Fu({id:`varied_thrush`,name:`Varied thrush`,sci:`Ixoreus naevius`,group:`bird`,model:`varied_thrush`,massG:78,edible:.85,edKey:`bird`,rra:null,fo:2.5,eriksson:45.6,efo:[26.5,35.5,84],archetype:`groundBird`,habitat:Eu({FOREST:1,WET_FOREST:.8,THICKET:.7}),season:[.5,0,.6,1.6],activity:`day`,flock:[2,5],flockMode:`ground`,flockSeasons:[`fall`,`winter`,`spring`],flushDist:5,speed:5,berryVisitor:4,note:`A winter visitor from the mountains. In Eriksson et al. (2019) it was the single most frequent prey, in 84% of winter scats.`}),Fu({id:`flicker`,name:`Northern flicker`,sci:`Colaptes auratus`,group:`bird`,model:`robin`,tint:`#8a6f55`,scale:1.15,massG:130,edible:.85,edKey:`bird`,rra:null,fo:2.5,eriksson:2.2,efo:[0,0,8],archetype:`groundBird`,habitat:Eu({SPARSE:1,FOREST:.6,MEADOW:.5,FOREDUNE:.3}),season:Pu,activity:`day`,flock:[1,1],flushDist:7,speed:7,berryVisitor:4,note:`A ground-feeding woodpecker that probes sandy soil for ants along forest edges.`}),Fu({id:`dove`,name:`Pigeon / mourning dove`,sci:`Columbidae`,group:`bird`,model:`band_tailed_pigeon`,tint:`#b8a38a`,scale:.7,massG:120,edible:.8,edKey:`bird`,rra:null,fo:2.5,archetype:`groundBird`,habitat:Eu({SPARSE:1,ROAD:.8,MEADOW:.5,FOREDUNE:.4}),season:[.8,1,.6,.2],activity:`day`,flock:[1,3],flushDist:7,speed:8,note:`Assigned only to "pigeon/mourning dove" by DNA; doves feed on seeds in open, sandy areas.`}),Fu({id:`ruffed_grouse`,name:`Ruffed grouse`,sci:`Bonasa umbellus`,group:`bird`,model:`band_tailed_pigeon`,tint:`#7a5f43`,scale:1.15,massG:550,edible:.8,edKey:`bird`,rra:null,fo:2.5,eriksson:1.1,efo:[2.9,0,0],archetype:`groundBird`,habitat:Eu({FOREST:1,WET_FOREST:.6}),season:Pu,activity:`day`,flock:[1,1],flushDist:3,speed:8,rare:!0,note:`Rare in the dunes. Relies on camouflage and explodes into flight at the last moment.`}),Fu({id:`cedar_waxwing`,name:`Cedar waxwing`,sci:`Bombycilla cedrorum`,group:`bird`,model:`sparrow`,tint:`#a8916c`,scale:1.05,massG:32,edible:.85,edKey:`bird`,rra:null,fo:2.5,archetype:`shrubBird`,habitat:Eu({THICKET:1,FOREST:.6,WET_FOREST:.6}),season:[.5,1,1,.3],activity:`day`,flock:[6,12],flockMode:`berry`,flushDist:5,speed:6,berryVisitor:4,note:`Sociable fruit specialists that strip berries from shrubs in roving flocks.`}),Fu({id:`vireo`,name:`Hutton's vireo`,sci:`Vireo sp.`,group:`bird`,model:`yellowrumped_warbler`,tint:`#8f9468`,scale:.95,massG:11,edible:.85,edKey:`bird`,rra:null,fo:2.5,archetype:`shrubBird`,habitat:Mu,season:Pu,activity:`day`,flock:[1,2],flushDist:3.5,speed:4,note:`Assigned to Vireo sp.; Hutton's vireo is the resident vireo of coastal evergreen forest.`}),Fu({id:`gc_kinglet`,name:`Golden-crowned kinglet`,sci:`Regulus satrapa`,group:`bird`,model:`chickadee`,tint:`#8c9a62`,scale:.72,massG:6,edible:.85,edKey:`bird`,rra:null,fo:null,eriksson:5.6,efo:[0,6.5,12],archetype:`shrubBird`,habitat:Eu({FOREST:1,WET_FOREST:.8,THICKET:.4}),season:[.6,.3,1,1.4],activity:`day`,flock:[4,8],flockMode:`canopy`,flushDist:3,speed:4,note:`Found only by Eriksson et al. (2019): a tiny conifer-gleaner, in 12% of winter scats. Travels in restless winter flocks.`}),Fu({id:`pacific_wren`,name:`Pacific wren`,sci:`Troglodytes pacificus`,group:`bird`,model:`wrentit`,tint:`#5e4632`,scale:.7,massG:9,edible:.85,edKey:`bird`,rra:null,fo:null,eriksson:1.1,efo:[0,0,4],archetype:`shrubBird`,habitat:Eu({FOREST:1,WET_FOREST:.8,THICKET:.5}),season:[1,1,1,1.2],activity:`day`,flock:[1,1],flushDist:2.4,speed:3,note:`A mouse-like little wren of logs and root wads on the forest floor (Eriksson et al. 2019, winter scats).`}),Fu({id:`warbler_sp`,name:`Warbler (unidentified)`,sci:`Phylloscopus sp.?`,group:`bird`,model:`yellowrumped_warbler`,tint:`#9a9a6a`,scale:.9,massG:8,edible:.85,edKey:`bird`,rra:null,fo:2.5,spawnable:!1,archetype:`shrubBird`,habitat:Mu,season:Pu,activity:`day`,flock:[1,1],flushDist:3.5,speed:4,note:`Assigned to an Old World warbler genus — likely a reference-database artifact; not spawned.`}),Fu({id:`eastern_phoebe`,name:`Phoebe`,sci:`Sayornis sp. (assigned E. phoebe)`,group:`bird`,model:`sparrow`,tint:`#6f6a5f`,massG:20,edible:.85,edKey:`bird`,rra:null,fo:2.5,spawnable:!1,archetype:`groundBird`,habitat:ju,season:Pu,activity:`day`,flock:[1,1],flushDist:5,speed:5,note:`DNA matched eastern phoebe, which does not occur here — probably a black phoebe or a database artifact; not spawned.`}),Fu({id:`oriole`,name:`Oriole`,sci:`Icterus sp.`,group:`bird`,model:`robin`,tint:`#d49a2a`,scale:.8,massG:34,edible:.85,edKey:`bird`,rra:null,fo:2.5,spawnable:!1,archetype:`treeBird`,habitat:Mu,season:[.5,1,.3,0],activity:`day`,flock:[1,1],flushDist:6,speed:6,note:`Bullock's oriole is a rare migrant on the coast; kept in the diet chart, not spawned.`}),Fu({id:`phainopepla`,name:`Phainopepla`,sci:`Phainopepla nitens`,group:`bird`,model:`stellers_jay`,tint:`#222222`,scale:.6,massG:24,edible:.85,edKey:`bird`,rra:null,fo:2.5,spawnable:!1,archetype:`treeBird`,habitat:Mu,season:Pu,activity:`day`,flock:[1,1],flushDist:6,speed:6,note:`A desert species — almost certainly a reference-database mis-assignment; not spawned.`}),Fu({id:`chipmunk`,name:`Townsend's chipmunk`,sci:`Neotamias townsendii`,group:`mammal`,model:`chipmunk`,massG:75,edible:.95,edKey:`mammal`,rra:null,fo:5,eriksson:2.2,efo:[0,3.2,0],archetype:`climber`,habitat:Eu({FOREST:1,THICKET:.9,WET_FOREST:.6,SPARSE:.4}),season:[1,1,1,.3],activity:`day`,flock:[1,1],flushDist:6,speed:4.2,berryVisitor:25,note:`Abundant in the coastal forest and eats huckleberries. Flees up shrubs and trees.`}),Fu({id:`brush_rabbit`,name:`Brush rabbit`,sci:`Sylvilagus bachmani`,group:`mammal`,model:`brush_rabbit`,massG:700,edible:.75,edKey:`lagomorph`,rra:null,fo:5,eriksson:1.1,efo:[0,0,4],archetype:`rabbit`,habitat:Eu({THICKET:1,SPARSE:.8,MEADOW:.8,WET_FOREST:.6,FOREST:.4,FOREDUNE:.3,ROAD:.4}),season:Pu,activity:`dusk`,flock:[1,1],flushDist:5,speed:9,berryVisitor:4,note:`Nearly the marten's own weight — the jackpot. Freezes first, then bolts in zig-zags for the nearest thicket. Feeds at shrub edges at dawn and dusk.`}),Fu({id:`townsends_vole`,name:`Townsend's vole`,sci:`Microtus townsendii`,group:`mammal`,model:`vole`,tint:`#5b4a3a`,scale:1.15,massG:60,edible:.95,edKey:`mammal`,rra:null,fo:5,archetype:`rodent`,habitat:ku,season:[.8,1,1.2,1],activity:`any`,flock:[1,2],flushDist:3.2,speed:2.6,note:`A big, dark vole of wet meadows, sedge and marsh edges in the deflation plain.`}),Fu({id:`trowbridge_shrew`,name:`Trowbridge's shrew`,sci:`Sorex trowbridgii`,group:`mammal`,model:`shrew`,massG:5,edible:.95,edKey:`mammal`,rra:null,fo:5,eriksson:2.2,efo:[5.9,0,0],archetype:`rodent`,habitat:Ou,season:Pu,activity:`any`,flock:[1,1],flushDist:2,speed:1.6,note:`Tiny and fast-metabolising; patrols the forest floor litter for invertebrates day and night.`}),Fu({id:`whitefooted_vole`,name:`White-footed vole`,sci:`Arborimus albipes`,group:`mammal`,model:`vole`,tint:`#7a5a3f`,massG:25,edible:.95,edKey:`mammal`,rra:null,fo:10,eriksson:13.3,efo:[11.8,22.6,4],archetype:`rodent`,habitat:Eu({WET_FOREST:1,MEADOW:.6,MARSH:.5,FOREST:.5,THICKET:.4}),season:Pu,activity:`any`,flock:[1,1],flushDist:3,speed:2.2,note:`A little-known, partly arboreal vole of moist forest and streamside alder. Common in marten diets, rarely seen by people.`}),Fu({id:`deer_mouse`,name:`Deer mouse`,sci:`Peromyscus maniculatus`,group:`mammal`,model:`deermouse`,massG:20,edible:.95,edKey:`mammal`,rra:null,fo:5,eriksson:17.8,efo:[3.4,25.8,28],archetype:`rodent`,habitat:Au,season:Pu,activity:`night`,flock:[1,2],flushDist:3.5,speed:3.2,berryVisitor:10,note:`Found in every habitat, including the beachgrass. Nocturnal — and eats fallen berries.`}),Fu({id:`redbacked_vole`,name:`Western red-backed vole`,sci:`Myodes californicus`,group:`mammal`,model:`vole`,tint:`#8a5a3a`,massG:25,edible:.95,edKey:`mammal`,rra:null,fo:5,eriksson:32.2,efo:[26.5,22.6,52],archetype:`rodent`,habitat:Ou,season:[1,1,1,1.3],activity:`any`,flock:[1,1],flushDist:3,speed:2.4,note:`A forest-floor vole that eats truffles of mycorrhizal fungi. Seven of these is roughly a marten's daily need.`}),Fu({id:`douglas_squirrel`,name:`Douglas squirrel`,sci:`Tamiasciurus douglasii`,group:`mammal`,model:`douglas_squirrel`,massG:200,edible:.85,edKey:`mammal`,rra:null,fo:5,eriksson:4.4,efo:[11.8,0,0],archetype:`climber`,habitat:Eu({FOREST:1,WET_FOREST:.5,THICKET:.3}),season:Pu,activity:`day`,flock:[1,1],flushDist:9,speed:5,berryVisitor:4,note:`A noisy conifer specialist that flees up the trunk — but martens are better climbers.`}),Fu({id:`creeping_vole`,name:`Creeping vole`,sci:`Microtus oregoni`,group:`mammal`,model:`vole`,tint:`#4f4a43`,scale:.85,massG:20,edible:.95,edKey:`mammal`,rra:null,fo:2.5,eriksson:6.7,efo:[0,3.2,20],archetype:`rodent`,habitat:Eu({MEADOW:1,FOREST:.5,SPARSE:.5,WET_FOREST:.5}),season:Pu,activity:`any`,flock:[1,1],flushDist:2.8,speed:2.2,note:`A small vole that runs in shallow tunnels under grass and litter.`}),Fu({id:`shrew_mole`,name:`Shrew-mole`,sci:`Neurotrichus gibbsii`,group:`mammal`,model:`shrew`,tint:`#2c2a2a`,scale:1.4,massG:10,edible:.95,edKey:`mammal`,rra:null,fo:2.5,archetype:`rodent`,habitat:Ou,season:Pu,activity:`any`,flock:[1,1],flushDist:1.8,speed:1.2,note:`The smallest American mole; forages in loose litter on the forest floor.`}),Fu({id:`deer_carrion`,name:`Black-tailed deer carcass`,sci:`Odocoileus hemionus (carrion)`,group:`mammal`,model:`blacktailed_deer`,massG:2500,edible:.6,edKey:`mammal`,rra:null,fo:null,eriksson:12.2,efo:[0,35.5,0],archetype:`carrion`,habitat:Eu({FOREST:1,WET_FOREST:.8,THICKET:.6}),season:[.1,.1,1,.3],activity:`any`,flock:[1,1],note:`Deer appeared in 35.5% of fall scats in Eriksson et al. (2019) — almost certainly scavenged from carcasses and gut piles in the fall hunting season. A feast, if nothing bigger claims it first.`}),Fu({id:`anchovy`,name:`Northern anchovy (washed up)`,sci:`Engraulis mordax`,group:`fish`,model:`fish_anchovy`,massG:20,edible:.9,edKey:`fish_oily`,rra:null,fo:2.5,archetype:`carrion`,habitat:Nu,season:[.7,1,1,.7],activity:`any`,flock:[3,8],note:`Marine fish appear in a few scats — probably scavenged from the wrack line. The beach is open and dangerous.`}),Fu({id:`hake`,name:`Pacific hake (washed up)`,sci:`Merluccius productus`,group:`fish`,model:`fish_hake`,massG:500,edible:.9,edKey:`fish_lean`,rra:null,fo:2.5,archetype:`carrion`,habitat:Nu,season:[.7,1,1,.7],activity:`any`,flock:[1,1],note:`A beach-cast hake is a big, free meal — if you dare to cross the open sand and the vehicle-filled beach to get it.`})],Lu=Object.fromEntries(Iu.map(e=>[e.id,e]));function Ru(e,t){let n=Uu.indexOf(t),r=(e.fo||0)*e.season[n],i=e.efo;return t===`summer`?e.fo==null?i?Math.max(...i)*.25*e.season[n]:0:r:t===`fall`?i?.5*r+.5*i[1]+(r?0:.2):r:(i?i[t===`winter`?2:0]:0)+r*(i?.15:.5)}var zu=Iu.filter(e=>e.spawnable);function Bu(e,t){let n={spring:0,fall:1,winter:2}[t];return e.efo&&n!=null?e.efo[n]:null}function Vu(e,t){return Bu(e,t)}var Hu={huckleberry:{name:`Evergreen huckleberry`,sci:`Vaccinium ovatum`,berryG:.3,kJPerG:2.6*.65,ripeness:[0,.25,1,.6],note:`The dominant fruit in marten scats in fall and winter. Many birds and mammals eat it too.`},salal:{name:`Salal`,sci:`Gaultheria shallon`,berryG:.6,kJPerG:1.44,ripeness:[0,.85,.7,.05],note:`Ripens earlier (Aug–Sept). Eaten from the shrub and when fallen.`},kinnikinnick:{name:`Kinnikinnick`,sci:`Arctostaphylos uva-ursi`,berryG:.35,kJPerG:1,ripeness:[.2,.2,.6,.6],note:`Dry, mealy berries on low mats of the stabilised dunes — poor food.`}},Uu=[`spring`,`summer`,`fall`,`winter`],Wu=[{id:0,key:`OCEAN`,name:`Pacific Ocean`,color:`#1d3b57`,preyDensity:0,desc:`Cold surf. Martens do not go to sea.`},{id:1,key:`SWASH`,name:`Wet sand (swash zone)`,color:`#9d9a86`,preyDensity:.2,sand:.95,desc:`Hard-packed wet sand where waves run up. Vehicles drive the beach — and beach-cast fish wash up here.`},{id:2,key:`BEACH`,name:`Dry beach`,color:`#d8cfb0`,preyDensity:.12,sand:.8,desc:`Open, soft sand. Nowhere to hide.`},{id:3,key:`FOREDUNE`,name:`Foredune — European beachgrass`,color:`#b9b678`,preyDensity:.3,sand:.85,desc:`A ridge of introduced European beachgrass (Ammophila arenaria) that traps sand along the beach. Deer mice and voles live in the grass.`},{id:4,key:`OPEN_SAND`,name:`Open sand dunes`,color:`#e6dcc0`,preyDensity:.02,sand:.78,desc:`Bare, shifting oblique dunes — an off-highway-vehicle riding area. The most dangerous place for a marten: no cover from bobcats, raptors or vehicles.`},{id:5,key:`SPARSE`,name:`Sparse dune vegetation`,color:`#b8b48c`,preyDensity:.4,sand:.88,desc:`Young shore pine, kinnikinnick and beachgrass colonising the sand. Patchy cover.`},{id:6,key:`MEADOW`,name:`Deflation-plain meadow`,color:`#7f9a5a`,preyDensity:.7,desc:`Seasonally flooded sedge and rush meadow, scoured down to the water table by wind. Prime vole habitat.`},{id:7,key:`THICKET`,name:`Evergreen shrub thicket`,color:`#3f6a34`,preyDensity:1,desc:`Head-high evergreen huckleberry, salal and wax myrtle. Bobcats can barely push through — a marten slips through easily.`},{id:8,key:`FOREST`,name:`Coastal shrub forest`,color:`#24502b`,preyDensity:1,desc:`Shore pine and Sitka spruce over a dense huckleberry–salal understory: the core habitat of the Oregon Dunes martens, with the most prey and fruit and the fewest bobcats.`},{id:9,key:`WET_FOREST`,name:`Seasonally flooded shore-pine forest`,color:`#4a6b3c`,preyDensity:.8,desc:`Slender shore pine over slough sedge in the deflation plain. Floods in winter — martens travel through the canopy.`},{id:10,key:`LAKE`,name:`Dune lake`,color:`#2e4f63`,preyDensity:0,desc:`A freshwater dune lake. Martens can swim, but slowly and at a high energy cost.`},{id:11,key:`MARSH`,name:`Lake-edge marsh`,color:`#5c7c55`,preyDensity:.5,desc:`Emergent sedges and rushes in shallow water around the lakes. Chorus frogs call here at night.`},{id:12,key:`ROAD`,name:`Sand road / trail`,color:`#c9b99a`,preyDensity:.05,sand:.95,desc:`Trails and sand roads. Bobcats like to travel along them.`},{id:13,key:`DEVELOPED`,name:`Cabin`,color:`#8a8a8a`,preyDensity:0,desc:`A cabin by the lake causeway — the only building in the map.`}],Gu={8:{trees:{shorepine_forest:.42,shorepine_mossy:.26,spruce_mature:.14,spruce_young:.1,waxmyrtle:.08},shrubs:{huckleberry:.55,salal:.32,waxmyrtle:.05,rhododendron:.08},herbs:{bracken:.45,sword_fern:.35,salal:.2},logs:.45},7:{trees:{shorepine_dune:.5,waxmyrtle:.38,shorepine_mossy:.12},shrubs:{huckleberry:.36,salal:.36,waxmyrtle:.18,rhododendron:.1},herbs:{bracken:.4,kinnikinnick:.35,beachgrass:.25},logs:.15},9:{trees:{shorepine_wet:.74,shorepine_mossy:.1,spruce_young:.06,willow:.1},shrubs:{huckleberry:.32,salal:.24,waxmyrtle:.24,willow:.2},herbs:{sedge:.8,rush:.15,bracken:.05},logs:.3},6:{trees:{shorepine_wet:.5,willow:.3,waxmyrtle:.2},shrubs:{waxmyrtle:.4,willow:.3,salal:.15,huckleberry:.15},herbs:{sedge:.55,rush:.45},logs:.05},11:{trees:{willow:1},shrubs:{willow:.6,waxmyrtle:.4},herbs:{sedge:.6,rush:.4}},5:{trees:{shorepine_dune:1},shrubs:{salal:.3,huckleberry:.2,waxmyrtle:.2,kinnikinnick:.3},herbs:{beachgrass:.6,kinnikinnick:.4}},3:{trees:{shorepine_dune:1},shrubs:{kinnikinnick:1},herbs:{beachgrass:1}},4:{herbs:{beachgrass:1}},2:{herbs:{beachgrass:1}}},Ku={8:[.42,.8,.12,.05],7:[.12,.88,.15,.05],9:[.5,.4,.8,.4],6:[.04,.12,.85,.5],11:[.02,.08,.9,.85],5:[.06,.15,.35,0],3:[.003,.01,.9,0],4:[0,0,.004,0],2:[0,0,.002,0]},qu=64,Ju=[1,2,4,8];async function Yu(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: ${t.status}`);if((t.headers.get(`content-type`)||``).includes(`text/html`))throw Error(`${e}: not found`);return t.arrayBuffer()}async function Xu(e){let t=new Uint8Array(e);if(t[0]!==31||t[1]!==139)return e;let n=new Blob([e]).stream().pipeThrough(new DecompressionStream(`gzip`));return new Response(n).arrayBuffer()}async function Zu(e){if(window.DEPLOY?.terrain===`gz-b64`){let t=await fetch(e+`.gz.b64.txt`);if(!t.ok)throw Error(`${e}: ${t.status}`);return Xu(Uint8Array.from(atob((await t.text()).trim()),e=>e.charCodeAt(0)).buffer)}if(typeof DecompressionStream<`u`)try{let t=await Yu(e+`.gz`),n=new Uint8Array(t);if(n[0]!==31||n[1]!==139)return t;let r=new Blob([t]).stream().pipeThrough(new DecompressionStream(`gzip`));return await new Response(r).arrayBuffer()}catch{}return Yu(e)}async function Qu(e=`data/terrain/`){for(let t of[e,`data/terrain_dev/`])try{let e=await(await fetch(t+`meta.json`)).json(),[n,r,i]=await Promise.all([Zu(t+`height.u16`),Zu(t+`habitat.u8`),Zu(t+`cover.rgba`)]),a=null;if(e.lake_id_file)try{a=new Uint8Array(await Zu(t+(e.lake_id_file.file||`lake_id.u8`)))}catch{a=null}return{dir:t,meta:e,height:new Uint16Array(n),habitat:new Uint8Array(r),cover:new Uint8Array(i),lakeId:a}}catch(e){console.warn(`terrain data not found in`,t,e.message)}throw Error(`No terrain data`)}var $u=class{constructor(e){let t=e.meta;this.dir=e.dir,this.meta=t,this.W=t.width,this.H=t.height,this.res=t.res_m,this.worldW=this.W*this.res,this.worldH=this.H*this.res,this.x0=-this.worldW/2,this.z0=-this.worldH/2,this.seaLevel=t.sea_level_m??1;let n=t.height_encoding?.scale??.001,r=t.height_encoding?.offset??-10,i=this.W*this.H;this.h=new Float32Array(i);for(let t=0;t<i;t++)this.h[t]=e.height[t]*n+r;this.hab=e.habitat,this.cover=e.cover,this.lakeId=e.lakeId,this._fillMissingCover(),this._buildWaterLevels(),this._buildSplat(),this._buildOceanDistance(),this.chunks=new Map,this.group=new An,this.group.name=`terrain`}_cell(e,t){let n=Math.floor((e-this.x0)/this.res),r=Math.floor((t-this.z0)/this.res);return n=n<0?0:n>=this.W?this.W-1:n,r=r<0?0:r>=this.H?this.H-1:r,r*this.W+n}inMap(e,t,n=0){return e>this.x0+n&&e<this.x0+this.worldW-n&&t>this.z0+n&&t<this.z0+this.worldH-n}heightAt(e,t){let n=(e-this.x0)/this.res-.5,r=(t-this.z0)/this.res-.5,i=Math.floor(n),a=Math.floor(r),o=n-i,s=r-a,c=this.W,l=this.H;i<0?(i=0,o=0):i>=c-1&&(i=c-2,o=1),a<0?(a=0,s=0):a>=l-1&&(a=l-2,s=1);let u=a*c+i,d=this.h,f=d[u]+(d[u+1]-d[u])*o;return f+(d[u+c]+(d[u+c+1]-d[u+c])*o-f)*s}normalAt(e,t,n=new B,r=1){let i=this.heightAt(e-r,t),a=this.heightAt(e+r,t),o=this.heightAt(e,t-r),s=this.heightAt(e,t+r);return n.set(i-a,2*r,o-s).normalize()}slopeAt(e,t){let n=this.normalAt(e,t,ed);return Math.acos(Math.min(1,n.y))}habitatAt(e,t){return this.hab[this._cell(e,t)]}habitatInfo(e,t){return Wu[this.habitatAt(e,t)]||Wu[4]}coverAt(e,t,n=td){let r=this._cell(e,t)*4,i=this.cover;return n.tree=i[r]/255,n.shrub=i[r+1]/255,n.herb=i[r+2]/255,n.wet=i[r+3]/255,n}waterLevelAt(e,t){return this.water[this._cell(e,t)]}waterDepthAt(e,t){let n=this.waterLevelAt(e,t);return n>-50?n-this.heightAt(e,t):-1}isSand(e){return e===q.BEACH||e===q.OPEN_SAND||e===q.SWASH||e===q.ROAD}oceanDistanceAt(e,t){let n=this.oceanDistStep,r=Math.floor((e-this.x0)/(this.res*n)),i=Math.floor((t-this.z0)/(this.res*n));return r=Math.max(0,Math.min(this.oW-1,r)),i=Math.max(0,Math.min(this.oH-1,i)),this.oceanDist[i*this.oW+r]}concealmentAt(e,t){let n=this.coverAt(e,t);return Math.min(.96,.92*n.shrub+.45*n.herb+.12*n.tree)}_fillMissingCover(){let e=this.W*this.H,t=this.cover,n=this.hab,r=0;for(let n=0;n<e;n+=97)r+=t[n*4]+t[n*4+1]+t[n*4+2];if(!(r>0&&!this.meta.provisional))for(let r=0;r<e;r++){let e=Ku[n[r]];if(!e)continue;let i=r*4;this.meta.provisional?(t[i]=Math.min(255,t[i]*.4+e[0]*255*.6|0),t[i+1]=Math.min(255,t[i+1]*.4+e[1]*255*.6|0),t[i+2]=Math.min(255,t[i+2]*.3+e[2]*255*.7|0)):(t[i]=e[0]*255,t[i+1]=e[1]*255,t[i+2]=e[2]*255,t[i+3]=e[3]*255)}}_buildWaterLevels(){let e=this.W*this.H;this.water=new Float32Array(e).fill(-100);let t=this.meta.lakes||[];if(this.lakeId){let n=new Map(t.map((e,t)=>[e.id??t+1,e]));for(let r=0;r<e;r++){let e=this.lakeId[r];if(e){let i=n.get(e)||t[e-1];i&&(this.water[r]=i.level_m)}else(this.hab[r]===q.OCEAN||this.hab[r]===q.SWASH&&this.h[r]<this.seaLevel)&&(this.water[r]=this.seaLevel)}return}let n=this.W;for(let r=0;r<e;r++){let e=this.hab[r];if(e===q.OCEAN||e===q.SWASH){this.h[r]<this.seaLevel+.05&&(this.water[r]=this.seaLevel);continue}if(e!==q.LAKE&&e!==q.MARSH)continue;let i=this.x0+(r%n+.5)*this.res,a=this.z0+((r/n|0)+.5)*this.res,o=null,s=0xde0b6b3a7640000;for(let e of t){let t=e.bbox_m;if(i<t[0]-4||i>t[2]+4||a<t[1]-4||a>t[3]+4)continue;let n=(i-e.centroid_x_m)**2+(a-e.centroid_z_m)**2;n<s&&(s=n,o=e)}o&&this.h[r]<o.level_m+.02&&(this.water[r]=o.level_m)}for(let t=0;t<e;t++)this.hab[t]===q.OCEAN&&(this.water[t]=this.seaLevel)}_buildSplat(){let e=this.W,t=this.H,n=e*t,r={0:[0,0,0,1],1:[.25,0,0,.75],2:[1,0,0,0],3:[.62,0,.38,0],4:[1,0,0,0],5:[.6,.12,.28,0],6:[.05,.05,.62,.28],7:[.06,.78,.16,0],8:[0,1,0,0],9:[0,.55,.28,.17],10:[.1,0,0,.9],11:[0,.05,.45,.5],12:[.78,.05,0,.17],13:[.3,0,0,.7]},i=new Float32Array(n*4);for(let e=0;e<n;e++){let t=r[this.hab[e]]||r[4];i[e*4]=t[0],i[e*4+1]=t[1],i[e*4+2]=t[2],i[e*4+3]=t[3]}let a=new Float32Array(n*4),o=[1,4,6,4,1],s=(n,r,i,a)=>{for(let s=0;s<t;s++)for(let c=0;c<e;c++){let l=0,u=0,d=0,f=0,p=0;for(let r=-2;r<=2;r++){let m=c+r*i,h=s+r*a;if(m<0||m>=e||h<0||h>=t)continue;let g=(h*e+m)*4,_=o[r+2];l+=n[g]*_,u+=n[g+1]*_,d+=n[g+2]*_,f+=n[g+3]*_,p+=_}let m=(s*e+c)*4;r[m]=l/p,r[m+1]=u/p,r[m+2]=d/p,r[m+3]=f/p}};s(i,a,1,0),s(a,i,0,1),this.splat=new Uint8Array(n*4);for(let e=0;e<n*4;e++)this.splat[e]=Math.round(i[e]*255)}_buildOceanDistance(){this.oceanDistStep=4;let e=Math.ceil(this.W/4),t=Math.ceil(this.H/4);this.oW=e,this.oH=t;let n=new Float32Array(e*t).fill(1e9);for(let r=0;r<t;r++)for(let t=0;t<e;t++){let i=Math.min(this.H-1,r*4)*this.W+Math.min(this.W-1,t*4);this.hab[i]===q.OCEAN&&(n[r*e+t]=0)}let r=this.res*4,i=r*Math.SQRT2;for(let a=0;a<t;a++)for(let t=0;t<e;t++){let o=a*e+t,s=n[o];t>0&&(s=Math.min(s,n[o-1]+r)),a>0&&(s=Math.min(s,n[o-e]+r)),a>0&&t>0&&(s=Math.min(s,n[o-e-1]+i)),a>0&&t<e-1&&(s=Math.min(s,n[o-e+1]+i)),n[o]=s}for(let a=t-1;a>=0;a--)for(let o=e-1;o>=0;o--){let s=a*e+o,c=n[s];o<e-1&&(c=Math.min(c,n[s+1]+r)),a<t-1&&(c=Math.min(c,n[s+e]+r)),a<t-1&&o<e-1&&(c=Math.min(c,n[s+e+1]+i)),a<t-1&&o>0&&(c=Math.min(c,n[s+e-1]+i)),n[s]=c}this.oceanDist=n}makeDataTextures(){let e=this.W,t=this.H,r=e*t,i=new Uint16Array(r*2);for(let e=0;e<r;e++)i[e*2]=yr.toHalfFloat(this.h[e]),i[e*2+1]=yr.toHalfFloat(this.water[e]);let a=new Ti(i,e,t,k,_);return a.magFilter=s,a.minFilter=s,a.wrapS=a.wrapT=n,a.flipY=!1,a.needsUpdate=!0,this.heightWaterTex=a,a}_buildChunkGeometry(e,t,n){let r=this.W,i=this.H,a=e*qu,o=t*qu,s=qu/n+1,c=s*s+4*s,l=new Float32Array(c*3),u=new Float32Array(c*3),d=new Float32Array(c*2),f=new Uint8Array(c*4),p=this.res,m=(e,t)=>t*s+e,h=(e,t,a)=>{let o=Math.max(0,Math.min(r-1,e)),s=Math.max(0,Math.min(i-1,t)),c=this.x0+(e+.5)*p,m=this.z0+(t+.5)*p,h=s*r+o,g=this.h[h];if(e!==o||t!==s){let n=Math.max(Math.abs(e-o),Math.abs(t-s))*p;g=g-Math.min(6,n*.004)+Math.sin(c*.013)*Math.cos(m*.011)*Math.min(1,n/200)*3}l[a*3]=c,l[a*3+1]=g,l[a*3+2]=m;let _=Math.max(0,o-n),v=Math.min(r-1,o+n),y=Math.max(0,s-n),b=Math.min(i-1,s+n),x=(this.h[s*r+v]-this.h[s*r+_])/((v-_)*p||1),S=(this.h[b*r+o]-this.h[y*r+o])/((b-y)*p||1),C=Math.hypot(x,1,S);u[a*3]=-x/C,u[a*3+1]=1/C,u[a*3+2]=-S/C,d[a*2]=c,d[a*2+1]=m,f[a*4]=this.splat[h*4],f[a*4+1]=this.splat[h*4+1],f[a*4+2]=this.splat[h*4+2],f[a*4+3]=this.splat[h*4+3]};for(let e=0;e<s;e++)for(let t=0;t<s;t++)h(a+t*n,o+e*n,m(t,e));let g=[];for(let e=0;e<s-1;e++)for(let t=0;t<s-1;t++){let n=m(t,e),r=m(t+1,e),i=m(t,e+1),a=m(t+1,e+1);g.push(n,i,r,r,i,a)}let _=n*1.5+.5,v=s*s,y=[Array.from({length:s},(e,t)=>m(t,0)),Array.from({length:s},(e,t)=>m(s-1,t)),Array.from({length:s},(e,t)=>m(s-1-t,s-1)),Array.from({length:s},(e,t)=>m(0,s-1-t))];for(let e of y){let t=v;for(let t of e){l[v*3]=l[t*3],l[v*3+1]=l[t*3+1]-_,l[v*3+2]=l[t*3+2],u[v*3]=u[t*3],u[v*3+1]=u[t*3+1],u[v*3+2]=u[t*3+2],d[v*2]=d[t*2],d[v*2+1]=d[t*2+1];for(let e=0;e<4;e++)f[v*4+e]=f[t*4+e];v++}for(let n=0;n<s-1;n++){let r=e[n],i=e[n+1],a=t+n,o=t+n+1;g.push(r,i,a,i,o,a)}}let b=new Rr;return b.setAttribute(`position`,new Cr(l,3)),b.setAttribute(`normal`,new Cr(u,3)),b.setAttribute(`uv`,new Cr(d,2)),b.setAttribute(`splat`,new Cr(f,4,!0)),b.setIndex(g),b.computeBoundingSphere(),b.computeBoundingBox(),b}initMeshes(e,t=5){this.material=e;let n=Math.ceil((this.W-1)/qu),r=Math.ceil((this.H-1)/qu);this.chunkRange={i0:-t,i1:n+t-1,j0:-t,j1:r+t-1};for(let t=this.chunkRange.j0;t<=this.chunkRange.j1;t++)for(let i=this.chunkRange.i0;i<=this.chunkRange.i1;i++){let a=this.x0+(i*qu+qu/2)*this.res,o=this.z0+(t*qu+qu/2)*this.res,s=i<0||t<0||i>=n||t>=r,c=new di(void 0,e);c.receiveShadow=!0,c.castShadow=!1,c.matrixAutoUpdate=!1,c.visible=!1,c.name=`terrain_${i}_${t}`,this.group.add(c),this.chunks.set(`${i},${t}`,{i,j:t,cx:a,cz:o,outside:s,mesh:c,lod:-1,geos:{}})}return this.group}updateLOD(e,t=900){let n=qu*this.res*.5,r=0;for(let i of this.chunks.values()){let a=Math.max(0,Math.abs(e.x-i.cx)-n),o=Math.max(0,Math.abs(e.z-i.cz)-n),s=Math.hypot(a,o);if(s>t){i.mesh.visible=!1;continue}let c=s<150?0:s<340?1:s<700?2:3;if(i.outside&&(c=Math.max(c,2)),i.lod!==c){if(!i.geos[c]){if(r>6&&i.lod>=0){i.mesh.visible=!0;continue}i.geos[c]=this._buildChunkGeometry(i.i,i.j,Ju[c]),r++}i.mesh.geometry=i.geos[c],i.lod=c}i.mesh.visible=!0}}},ed=new B,td={tree:0,shrub:0,herb:0,wet:0};function nd(e,t){let n=new Na({roughness:.92,metalness:0,color:16777215});n.normalMap=t.normals[0],n.normalScale=new z(1,1);let r={tSand:{value:t.albedo[0]},tForest:{value:t.albedo[1]},tGrass:{value:t.albedo[2]},tWet:{value:t.albedo[3]},nSand:{value:t.normals[0]},nForest:{value:t.normals[1]},nGrass:{value:t.normals[2]},nWet:{value:t.normals[3]},tMacro:{value:t.macro},tHW:{value:e.heightWaterTex},uMapOrigin:{value:new z(e.x0,e.z0)},uMapSize:{value:new z(e.worldW,e.worldH)},uMacroStrength:{value:.55},uWetness:{value:0},uTime:{value:0}};return n.userData.uniforms=r,n.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        attribute vec4 splat;
        varying vec4 vSplat;
        varying vec3 vWPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vSplat = splat;
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform sampler2D tSand, tForest, tGrass, tWet, nSand, nForest, nGrass, nWet, tMacro, tHW;
        uniform vec2 uMapOrigin, uMapSize;
        uniform float uMacroStrength, uWetness, uTime;
        varying vec4 vSplat;
        varying vec3 vWPos;
        vec4 gWeights;
        vec2 gUv1, gUv2;
        float gWetEdge;
        vec4 blendW(vec4 w, vec4 hts) {
          vec4 s = w * (0.35 + hts);
          float m = max(max(s.x, s.y), max(s.z, s.w)) - 0.22;
          vec4 b = max(s - vec4(m), vec4(0.0));
          return b / max(dot(b, vec4(1.0)), 1e-4);
        }`).replace(`#include <map_fragment>`,`
        vec2 mapUv = (vWPos.xz - uMapOrigin) / uMapSize;
        gUv1 = vWPos.xz * 0.85;
        gUv2 = vWPos.xz * 0.17 + vec2(0.37, 0.11);
        vec4 s1 = texture2D(tSand, gUv1), f1 = texture2D(tForest, gUv1), g1 = texture2D(tGrass, gUv1), w1 = texture2D(tWet, gUv1);
        vec4 s2 = texture2D(tSand, gUv2), f2 = texture2D(tForest, gUv2), g2 = texture2D(tGrass, gUv2), w2 = texture2D(tWet, gUv2);
        vec4 sA = mix(s1, s2, 0.35), fA = mix(f1, f2, 0.3), gA = mix(g1, g2, 0.3), wA = mix(w1, w2, 0.3);
        vec4 hw = texture2D(tHW, mapUv);
        float above = vWPos.y - hw.g;
        gWetEdge = (hw.g > -50.0) ? 1.0 - smoothstep(0.05, 0.6, above) : 0.0;
        vec4 sw = vSplat;
        sw.w = max(sw.w, gWetEdge * 0.9);
        gWeights = blendW(sw, vec4(sA.a, fA.a, gA.a, wA.a));
        vec3 detail = sA.rgb * gWeights.x + fA.rgb * gWeights.y + gA.rgb * gWeights.z + wA.rgb * gWeights.w;
        vec3 macro = texture2D(tMacro, mapUv).rgb;
        float ml = max(dot(macro, vec3(0.299, 0.587, 0.114)), 0.04);
        float dist = length(vWPos - cameraPosition);
        float far = smoothstep(45.0, 320.0, dist);
        // tint the close-up detail by the aerial photo's local hue, then fade to the photo at distance
        vec3 tinted = detail * mix(vec3(1.0), clamp(macro / ml, 0.4, 1.8), uMacroStrength * 0.35);
        vec3 col = mix(tinted, macro * 0.95, far * 0.8);
        // darken underwater/wet edge
        col *= mix(1.0, 0.72, gWetEdge * (1.0 - gWeights.y));
        diffuseColor.rgb *= col;`).replace(`#include <roughnessmap_fragment>`,`
        float roughnessFactor = roughness;
        roughnessFactor = mix(roughnessFactor, 0.45, gWeights.w * 0.8 + uWetness * 0.4);`).replace(`#include <normal_fragment_maps>`,`
        vec3 nS = texture2D(nSand, gUv1).xyz * 2.0 - 1.0;
        vec3 nF = texture2D(nForest, gUv1).xyz * 2.0 - 1.0;
        vec3 nG = texture2D(nGrass, gUv1).xyz * 2.0 - 1.0;
        vec3 nW = texture2D(nWet, gUv1).xyz * 2.0 - 1.0;
        vec3 mapN = normalize(nS * gWeights.x + nF * gWeights.y + nG * gWeights.z + nW * gWeights.w + vec3(0.0, 0.0, 0.001));
        float nfade = 1.0 - smoothstep(30.0, 120.0, length(vWPos - cameraPosition));
        mapN.xy *= normalScale * nfade;
        normal = normalize( tbn * mapN );`)},n.customProgramCacheKey=()=>`terrain-v3`,n}function rd(e){let t=e>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function id(e,t,n=0){let r=e*374761393+t*668265263+n*2147483647>>>0;return r=Math.imul(r^r>>>13,1274126177)>>>0,(r^r>>>16)>>>0}var ad=class{constructor(e=1){let t=rd(e);this.perm=new Uint8Array(512);let n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}for(let e=0;e<512;e++)this.perm[e]=n[e&255];this.gx=new Float32Array(256),this.gy=new Float32Array(256);for(let e=0;e<256;e++){let n=t()*Math.PI*2;this.gx[e]=Math.cos(n),this.gy[e]=Math.sin(n)}}noise(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*a*(a*(a*6-15)+10),c=o*o*o*(o*(o*6-15)+10),l=this.perm,u=e=>(n?(e%n+n)%n:e)&255,d=u(r),f=u(r+1),p=u(i),m=u(i+1),h=(e,t,n,r)=>{let i=l[l[e]+t];return this.gx[i]*n+this.gy[i]*r},g=h(d,p,a,o),_=h(f,p,a-1,o),v=h(d,m,a,o-1),y=h(f,m,a-1,o-1),b=g+s*(_-g);return(b+c*(v+s*(y-v)-b))*1.414}fbm(e,t,n=4,r=2,i=.5,a=0){let o=1,s=1,c=0,l=0;for(let u=0;u<n;u++)c+=o*this.noise(e*s,t*s,a?a*s:0),l+=o,o*=i,s*=r;return c/l}},od=512;function sd(e,t=e){if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(e,t);let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function cd(e,t,n){for(let r of[-t,0,t])for(let i of[-t,0,t])e.save(),e.translate(r,i),n(e),e.restore()}function ld(e,t,n){let r=new Uint8ClampedArray(t*t*4);for(let i=0;i<t;i++)for(let a=0;a<t;a++){let o=(n,r)=>e[(r+t)%t*t+(n+t)%t],s=(o(a+1,i)-o(a-1,i))*n,c=(o(a,i+1)-o(a,i-1))*n,l=Math.hypot(s,c,1),u=(i*t+a)*4;r[u]=(-s/l*.5+.5)*255,r[u+1]=(c/l*.5+.5)*255,r[u+2]=(1/l*.5+.5)*255,r[u+3]=255}return r}function ud(e,n){let r=new ua(e);return r.wrapS=r.wrapT=t,r.colorSpace=n?He:``,r.generateMipmaps=!0,r.minFilter=l,r.magFilter=s,r.needsUpdate=!0,r}function dd(e,t,n,r){let i=sd(t),a=i.getContext(`2d`,{willReadFrequently:!0}),o=a.createImageData(t,t),s=new Float32Array(t*t);e(o.data,s),a.putImageData(o,0,0);let c=sd(t),l=c.getContext(`2d`),u=l.createImageData(t,t);return u.data.set(ld(s,t,n)),l.putImageData(u,0,0),{albedo:i,normal:c,seed:r}}function fd(e){let t=new ad(11),n=rd(5);return dd((r,i)=>{let a=[216,202,166];for(let o=0;o<e;o++)for(let s=0;s<e;s++){let c=s/e,l=o/e,u=t.fbm(c*4,l*4,3,2,.5,4)*1.6,d=.5+.5*Math.sin((c*11+u*.6)*Math.PI*2+t.noise(c*8,l*8,8)*.8),f=t.fbm(c*3+7,l*3+3,4,2,.5,3),p=(n()-.5)*.09,m=Math.max(0,t.noise(c*6+20,l*30,6)-.55)*.5,h=1+f*.07+p+(d-.5)*.07-m*.35,g=(o*e+s)*4;r[g]=a[0]*h,r[g+1]=a[1]*h,r[g+2]=a[2]*(h-m*.1);let _=d*.7+f*.15+.15;i[o*e+s]=_*2.2,r[g+3]=Math.max(0,Math.min(255,_*255))}},e,1.6)}function pd(e){let t=new ad(23),n=rd(9),r=sd(e),i=r.getContext(`2d`,{willReadFrequently:!0});i.fillStyle=`#3e3020`,i.fillRect(0,0,e,e);let a=i.getImageData(0,0,e,e),o=a.data;for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=t.fbm(r/e*5,n/e*5,4,2,.5,5),a=(n*e+r)*4;o[a]=62+i*22,o[a+1]=48+i*16,o[a+2]=32+i*10}i.putImageData(a,0,0);let s=[`#7a5230`,`#94653a`,`#6a4a2e`,`#a9794a`,`#5e4a36`,`#806248`,`#b08a5a`];for(let t=0;t<5200;t++){let t=n()*e,r=n()*e,a=n()*Math.PI,o=14+n()*22,c=s[n()*s.length|0];cd(i,e,e=>{e.strokeStyle=c,e.globalAlpha=.55+n()*.45,e.lineWidth=.8+n()*.9,e.beginPath(),e.moveTo(t,r),e.lineTo(t+Math.cos(a)*o,r+Math.sin(a)*o),e.stroke()})}i.globalAlpha=1;for(let t=0;t<40;t++){let t=n()*e,r=n()*e,a=n()*Math.PI,o=30+n()*70;cd(i,e,e=>{e.strokeStyle=`#4a3a2a`,e.lineWidth=2+n()*2,e.beginPath(),e.moveTo(t,r),e.lineTo(t+Math.cos(a)*o,r+Math.sin(a)*o),e.stroke()})}for(let t=0;t<10;t++){let t=n()*e,r=n()*e;cd(i,e,e=>{e.fillStyle=`#5a3f26`,e.beginPath(),e.ellipse(t,r,7,11,n()*3,0,Math.PI*2),e.fill(),e.strokeStyle=`#3a2817`,e.lineWidth=1,e.stroke()})}let c=i.getImageData(0,0,e,e),l=c.data,u=new Float32Array(e*e);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=r/e,a=n/e,o=t.fbm(i*4+11,a*4+5,5,2,.55,4),s=Math.max(0,Math.min(1,(o-.05)*3.2)),c=t.noise(i*90,a*90,90)*.5+.5,d=(n*e+r)*4,f=[72+c*40,98+c*46,38+c*14];l[d]=l[d]*(1-s)+f[0]*s,l[d+1]=l[d+1]*(1-s)+f[1]*s,l[d+2]=l[d+2]*(1-s)+f[2]*s;let p=(l[d]+l[d+1]+l[d+2])/765,m=.25+s*.5+p*.4+c*s*.1;u[n*e+r]=m*3,l[d+3]=Math.min(255,m*230)}i.putImageData(c,0,0);let d=sd(e),f=d.getContext(`2d`),p=f.createImageData(e,e);return p.data.set(ld(u,e,1.4)),f.putImageData(p,0,0),{albedo:r,normal:d}}function md(e){let t=new ad(37),n=rd(13),r=sd(e),i=r.getContext(`2d`,{willReadFrequently:!0});i.fillStyle=`#4c4428`,i.fillRect(0,0,e,e);let a=[`#6f7a3c`,`#7f8a46`,`#5d6a32`,`#9a9659`,`#a8a06a`,`#c2b483`,`#566236`,`#8a8f52`];for(let r=0;r<9e3;r++){let r=n()*e,o=n()*e,s=t.fbm(r/e*3,o/e*3,3,2,.5,3)*.5+.5,c=a[Math.min(a.length-1,n()*5+s*3|0)],l=-Math.PI/2+(n()-.5)*1.2,u=8+n()*22;cd(i,e,e=>{e.strokeStyle=c,e.globalAlpha=.7+n()*.3,e.lineWidth=1+n()*1.3,e.beginPath(),e.moveTo(r,o),e.quadraticCurveTo(r+Math.cos(l)*u*.5+(n()-.5)*6,o+Math.sin(l)*u*.5,r+Math.cos(l)*u,o+Math.sin(l)*u),e.stroke()})}i.globalAlpha=1;let o=i.getImageData(0,0,e,e),s=o.data,c=new Float32Array(e*e);for(let t=0;t<e*e;t++){let e=(s[t*4]+s[t*4+1]+s[t*4+2])/765;c[t]=e*3.2,s[t*4+3]=Math.min(255,60+e*300)}i.putImageData(o,0,0);let l=sd(e),u=l.getContext(`2d`),d=u.createImageData(e,e);return d.data.set(ld(c,e,1.2)),u.putImageData(d,0,0),{albedo:r,normal:l}}function hd(e){let t=new ad(53),n=rd(17);return dd((r,i)=>{for(let a=0;a<e;a++)for(let o=0;o<e;o++){let s=o/e,c=a/e,l=t.fbm(s*6,c*6,5,2,.5,6),u=Math.max(0,t.noise(s*40,c*40,40)-.5),d=1+l*.12-u*.3+(n()-.5)*.05,f=(a*e+o)*4;r[f]=104*d,r[f+1]=96*d,r[f+2]=80*d;let p=.3+l*.2-u*.3;i[a*e+o]=p*1.5,r[f+3]=Math.max(0,Math.min(255,p*255))}},e,1)}function gd(e){let t=Math.min(8,e.capabilities.getMaxAnisotropy()),n=[fd(od),pd(od),md(od),hd(od)];return{albedo:n.map(e=>{let n=ud(e.albedo,!0);return n.anisotropy=t,n}),normals:n.map(e=>{let n=ud(e.normal,!1);return n.anisotropy=t,n})}}function _d(e,t=!0){return new Promise((n,r)=>{new vo().load(e,e=>{e.colorSpace=t?He:``,n(e)},void 0,r)})}function vd(e,t=256){let n=sd(t),r=n.getContext(`2d`),i=rd(e.length*977+3);r.clearRect(0,0,t,t);let a=(e,t,n,i,a,o,s=!0)=>{r.save(),r.translate(e,t),r.rotate(a),r.fillStyle=o,r.beginPath(),r.moveTo(0,0),r.quadraticCurveTo(i,-n*.45,0,-n),r.quadraticCurveTo(-i,-n*.45,0,0),r.fill(),s&&(r.strokeStyle=`rgba(255,255,230,0.25)`,r.lineWidth=.8,r.beginPath(),r.moveTo(0,0),r.lineTo(0,-n*.9),r.stroke()),r.restore()};if(e===`needle`||e===`spruce`){let n=e===`spruce`?[`#2f4a3f`,`#3d5a4a`,`#27403a`]:[`#3b4a22`,`#4c5c2a`,`#56682e`,`#33421d`];for(let e=0;e<7;e++){let e=t*(.15+i()*.7),a=t*(.15+i()*.7);r.strokeStyle=`#4a3b2a`,r.lineWidth=2;for(let o=0;o<70;o++){let o=i()*Math.PI*2,s=t*(.05+i()*.09);r.strokeStyle=n[i()*n.length|0],r.lineWidth=1.2,r.beginPath(),r.moveTo(e,a),r.lineTo(e+Math.cos(o)*s,a+Math.sin(o)*s),r.stroke()}}}else if(e===`grass`||e===`sedge`){let n=e===`grass`?[`#9aa06a`,`#b3ad7a`,`#8a925c`,`#c8bb8a`]:[`#3d5a2e`,`#4a6a36`,`#2f4a26`,`#56743e`];for(let e=0;e<60;e++){let e=t*(.2+i()*.6),a=(i()-.5)*t*.5;r.strokeStyle=n[i()*n.length|0],r.lineWidth=1.5+i()*1.5,r.beginPath(),r.moveTo(e,t),r.quadraticCurveTo(e+a*.3,t*.5,e+a,t*(.05+i()*.3)),r.stroke()}}else{let n=e===`salal`,o=n?[`#2a4a22`,`#335a2a`,`#3c6630`,`#24401e`]:[`#2c4a24`,`#365a2a`,`#40682f`,`#5a3a24`];r.strokeStyle=`#5a3a28`,r.lineWidth=2;for(let e=0;e<5;e++){let e=t*(.1+i()*.8),s=t,c=t*(.1+i()*.8),l=t*(.05+i()*.3);r.beginPath(),r.moveTo(e,s),r.lineTo(c,l),r.stroke();let u=n?7:16;for(let r=0;r<u;r++){let r=i(),u=e+(c-e)*r,d=s+(l-s)*r,f=n?t*(.12+i()*.08):t*(.05+i()*.04);a(u,d,f,f*(n?.45:.38),(i()-.5)*2.6,o[i()*o.length|0])}}}let o=new ua(n);return o.colorSpace=He,o}var J=(e,t,n)=>e<t?t:e>n?n:e,Y=(e,t,n)=>e+(t-e)*n,yd=(e,t,n)=>J((n-e)/(t-e),0,1),bd=(e,t,n)=>{let r=yd(e,t,n);return r*r*(3-2*r)},xd=(e,t,n,r)=>Y(e,t,1-Math.exp(-n*r)),Sd=e=>{for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},Cd=(e,t,n,r)=>e+Sd(t-e)*(1-Math.exp(-n*r));function wd(e,t,n,r,i,a,o,s,c){let l=r-e,u=i-t,d=a-n,f=l*l+u*u+d*d;return f<1e-9?0:J(((o-e)*l+(s-t)*u+(c-n)*d)/f,0,1)}var Td={spring:[6.6,19.6],summer:[5.7,20.8],fall:[7.3,18.6],winter:[7.8,16.9]},Ed={spring:50,summer:68,fall:38,winter:24},Dd=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Od=`
uniform vec3 uZenith, uHorizon, uGround, uSunDir, uSunColor, uMoonDir;
uniform float uCloud, uTime, uNight, uFog;
varying vec3 vDir;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.55));
  col = mix(col, uGround, smoothstep(0.0, -0.12, h));
  // sun glow + disc
  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunColor * (pow(sd, 6.0) * 0.25 + pow(sd, 64.0) * 0.6) * (1.0 - uFog * 0.6);
  col += uSunColor * smoothstep(0.9993, 0.9997, sd) * 6.0 * (1.0 - uFog * 0.9);
  // clouds: stratus decks typical of the marine layer
  if (h > 0.0) {
    vec2 uv = d.xz / (h + 0.12) * 1.4 + vec2(uTime * 0.004, uTime * 0.0015);
    float c = fbm(uv * 1.3);
    float cov = smoothstep(0.62 - uCloud * 0.45, 0.95 - uCloud * 0.2, c);
    vec3 cloudCol = mix(uHorizon * 1.05, vec3(1.0), 0.25) * (1.0 - uNight * 0.85);
    cloudCol += uSunColor * pow(sd, 4.0) * 0.3;
    col = mix(col, cloudCol, cov * smoothstep(0.0, 0.25, h) * 0.85);
  }
  // stars + moon at night
  if (uNight > 0.01 && h > 0.0) {
    vec2 sp = d.xz / (h + 0.3) * 160.0;
    float st = step(0.9965, hash(floor(sp))) * hash(floor(sp) + 3.1);
    col += vec3(st) * uNight * (1.0 - uCloud) * 0.9;
    float md = max(dot(d, uMoonDir), 0.0);
    col += vec3(0.75, 0.8, 0.9) * (smoothstep(0.9995, 0.9998, md) * 1.5 + pow(md, 80.0) * 0.08) * uNight;
  }
  // fog veil toward the horizon
  col = mix(col, uHorizon, uFog * (1.0 - smoothstep(0.0, 0.5, h)) * 0.8);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,kd=class{constructor(e,t,n=`fall`){this.scene=e,this.season=n,this.hour=6.5,this.fogAmount=.6,this.cloud=.6,this.rain=0,this._fogTarget=.6,this._weatherTimer=0,this.uniforms={uZenith:{value:new U},uHorizon:{value:new U},uGround:{value:new U},uSunDir:{value:new B(0,1,0)},uSunColor:{value:new U(1,.95,.85)},uMoonDir:{value:new B(0,1,0)},uCloud:{value:.6},uTime:{value:0},uNight:{value:0},uFog:{value:.5}};let r=new Sa(2500,48,24),i=new ja({uniforms:this.uniforms,vertexShader:Dd,fragmentShader:Od,side:1,depthWrite:!1,fog:!1});this.dome=new di(r,i),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,e.add(this.dome),this.sun=new zo(16773856,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.sun.shadow.radius=3,e.add(this.sun),e.add(this.sun.target),this.hemi=new bo(12571878,4867634,.9),e.add(this.hemi),e.fog=new Rn(13160660,.006),this.fogColor=new U,this.pmrem=new As(t),this.envScene=new zn,this.envDome=new di(new Sa(10,32,16),this.dome.material),this.envScene.add(this.envDome),this.envGround=new di(new ga(9.5,24).rotateX(-Math.PI/2).translate(0,-.5,0),new $r({color:4867124})),this.envScene.add(this.envGround),this.envTimer=0,this.scene.environmentIntensity=.35}_refreshEnv(e){if(this.envTimer-=e,this.envTimer>0)return;this.envTimer=4,this.envGround.material.color.copy(this.hemi.groundColor).multiplyScalar(.8);let t=this.pmrem.fromScene(this.envScene,.04);this.envRT&&this.envRT.dispose(),this.envRT=t,this.scene.environment=t.texture}setSeason(e){this.season=e}get isNight(){return this.uniforms.uNight.value>.6}get daylight(){return 1-this.uniforms.uNight.value}_updateWeather(e){if(this._weatherTimer-=e,this._weatherTimer<=0){this._weatherTimer=40+Math.random()*60;let e=this.hour,t=e<11||e>19?.7:.35;this.season===`winter`&&(t=.75),this.season===`spring`&&(t-=.05),this._fogTarget=J(t+(Math.random()-.5)*.5,.08,1),this.rainTarget=this.season===`winter`?Math.random()<.5?Math.random():0:Math.random()<.08?Math.random()*.5:0}this.fogAmount=Y(this.fogAmount,this._fogTarget,1-Math.exp(-e/25)),this.rain=Y(this.rain,this.rainTarget||0,1-Math.exp(-e/20)),this.cloud=J(.35+this.fogAmount*.6+this.rain*.3,0,1)}update(e,t,n){this.hour=t,this._updateWeather(e);let[r,i]=Td[this.season],a=(t-r)/(i-r),o=Mt.degToRad(Ed[this.season]),s,c,l={summer:.67,spring:.52,fall:.47,winter:.36}[this.season]*Math.PI;if(a>=0&&a<=1)s=Math.sin(a*Math.PI)*o,c=Y(-l,l,a);else{let e=a>1?(t-i)/(24-i+r):(t+24-i)/(24-i+r);s=-Math.sin(J(e,0,1)*Math.PI)*.6,c=Y(l,Math.PI*2-l,J(e,0,1))}let u=new B(-Math.sin(c)*Math.cos(s),Math.sin(s),Math.cos(c)*Math.cos(s)).normalize();this.uniforms.uSunDir.value.copy(u);let d=u.clone().multiplyScalar(-1);d.y=Math.abs(d.y)*.8+.25,d.normalize(),this.uniforms.uMoonDir.value.copy(d);let f=bd(-.12,.12,Math.sin(s)),p=bd(.35,.02,Math.sin(s))*f,m=1-f,h=this.fogAmount;this.uniforms.uNight.value=m,this.uniforms.uFog.value=h,this.uniforms.uCloud.value=this.cloud,this.uniforms.uTime.value+=e;let g=new U(.3,.46,.66).lerp(new U(.62,.66,.7),h*.85),_=new U(.72,.79,.84).lerp(new U(.8,.82,.83),h),v=new U(.95,.68,.45).lerp(new U(.78,.7,.62),h*.7),y=new U(.02,.035,.07),b=new U(.07,.09,.13),x=g.clone().lerp(y,m),S=_.clone().lerp(v,p).lerp(b,m);this.uniforms.uZenith.value.copy(x),this.uniforms.uHorizon.value.copy(S),this.uniforms.uGround.value.copy(S).multiplyScalar(.55);let C=new U(1,.96,.9).lerp(new U(1,.62,.35),p);this.uniforms.uSunColor.value.copy(C);let w=.75*m;f>.02?(this.sun.position.copy(u).multiplyScalar(120),this.sun.color.copy(C),this.sun.intensity=(3*(1-h*.72)+.2)*f*(1-this.rain*.4)):(this.sun.position.copy(d).multiplyScalar(120),this.sun.color.setRGB(.55,.65,.9),this.sun.intensity=w*(1-this.cloud*.6)),this.sun.shadow.intensity=J(1-h*.75,.15,1)*(f>.02?1:.4),this.hemi.color.copy(x).lerp(S,.5).lerp(new U(.32,.42,.66),m),this.hemi.groundColor.setRGB(.27,.25,.17).lerp(new U(.08,.09,.12),m),this.hemi.intensity=Y(.62,1.15+h*.4,f),this.exposure=Y(1,1.45,m);let T=Y(.0028,.016,h*h)*(1+this.rain*.4)*(m>.5?1.15:1);if(this.scene.fog.density=T,this.fogColor.copy(S).lerp(new U(.78,.8,.8).multiplyScalar(1-m*.9),h*.5),this.scene.fog.color.copy(this.fogColor),n){let e=this.sun,t=e.position.clone().normalize(),r=(e.shadow.camera.right-e.shadow.camera.left)/e.shadow.mapSize.x,i=Math.round(n.x/r)*r,a=Math.round(n.z/r)*r;e.target.position.set(i,n.y,a),e.position.set(i+t.x*120,n.y+t.y*120,a+t.z*120),e.target.updateMatrixWorld(),this.dome.position.copy(n)}this.cutDistance=Math.min(1100,2.1/T),this.scene.environmentIntensity=Y(.12,.38,f),this._refreshEnv(e||.016)}},Ad=`
varying vec3 vW;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,jd=`
uniform sampler2D tHW;
uniform vec2 uMapOrigin, uMapSize;
uniform float uTime, uOcean, uWave;
uniform vec3 uSunDir, uSunColor, uSkyZenith, uSkyHorizon, uShallow, uDeep;
uniform float uSunIntensity, uNight;
uniform vec2 uGrid;
varying vec3 vW;
#include <fog_pars_fragment>
float hash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
vec2 waveGrad(vec2 p, float t) {
  vec2 g = vec2(0.0);
  // directional swell from the west-northwest + chop
  vec2 d1 = normalize(vec2(1.0, 0.25)), d2 = normalize(vec2(0.8, -0.5)), d3 = normalize(vec2(0.3, 1.0));
  g += d1 * cos(dot(p, d1) * 0.35 - t * 1.1) * 0.35;
  g += d2 * cos(dot(p, d2) * 0.9 - t * 1.7) * 0.18;
  g += d3 * cos(dot(p, d3) * 2.1 - t * 2.6) * 0.08;
  float e = 0.15;
  float n0 = noise(p * 1.7 + t * 0.4), nx = noise((p + vec2(e, 0)) * 1.7 + t * 0.4), nz = noise((p + vec2(0, e)) * 1.7 + t * 0.4);
  g += vec2(nx - n0, nz - n0) / e * 0.06;
  float m0 = noise(p * 6.0 - t * 0.9), mx = noise((p + vec2(e * 0.3, 0)) * 6.0 - t * 0.9), mz = noise((p + vec2(0, e * 0.3)) * 6.0 - t * 0.9);
  g += vec2(mx - m0, mz - m0) / (e * 0.3) * 0.012;
  return g;
}
void main() {
  vec2 muv = (vW.xz - uMapOrigin) / uMapSize;
  vec4 hw = texture2D(tHW, clamp(muv, vec2(0.0), vec2(1.0)));
  bool inMap = muv.x > 0.0 && muv.x < 1.0 && muv.y > 0.0 && muv.y < 1.0;
  float ground = inMap ? hw.r : -12.0;
  float depth = vW.y - ground;
  if (uOcean < 0.5) {
    // lakes: draw only over cells that belong to this water body (exact per-cell level)
    ivec2 cell = ivec2(clamp(muv * uGrid, vec2(0.0), uGrid - 1.0));
    float lvl = texelFetch(tHW, cell, 0).g;
    if (lvl < -50.0 || abs(lvl - vW.y) > 0.006) discard;
  }
  if (depth < -0.02) discard;
  vec2 g = waveGrad(vW.xz, uTime) * uWave;
  vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
  vec3 V = normalize(cameraPosition - vW);
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 R = reflect(-V, n);
  vec3 sky = mix(uSkyHorizon, uSkyZenith, clamp(R.y, 0.0, 1.0));
  float dfac = 1.0 - exp(-max(depth, 0.0) * (uOcean > 0.5 ? 0.45 : 0.9));
  vec3 body = mix(uShallow, uDeep, dfac);
  vec3 col = mix(body, sky, fres * 0.85);
  float spec = pow(max(dot(R, uSunDir), 0.0), 220.0) * uSunIntensity;
  col += uSunColor * spec * 1.5;
  float alpha = mix(0.25, 0.95, smoothstep(0.0, 1.2, depth));
  if (uOcean > 0.5) {
    // surf zone: bands of whitewater rolling shoreward over the gently sloping seabed
    float surf = smoothstep(3.2, 0.4, depth);
    float phase = depth * 2.6 + uTime * 0.85 + noise(vW.xz * 0.05) * 3.0;
    float bands = smoothstep(0.55, 1.0, sin(phase) * 0.5 + 0.5);
    float breakup = noise(vW.xz * 0.6 + uTime * 0.3) * 0.6 + noise(vW.xz * 2.3 - uTime * 0.2) * 0.4;
    float foam = surf * bands * smoothstep(0.35, 0.75, breakup);
    foam += smoothstep(0.35, 0.0, depth) * (0.6 + 0.4 * sin(uTime * 0.7 + vW.z * 0.08)) * breakup;
    col = mix(col, vec3(0.93, 0.95, 0.95) * (1.0 - uNight * 0.85), clamp(foam, 0.0, 1.0));
    alpha = max(alpha, clamp(foam, 0.0, 1.0));
  }
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`,Md=class{constructor(e,t,n){this.terrain=t,this.sky=n;let r=()=>({tHW:{value:t.heightWaterTex},uMapOrigin:{value:new z(t.x0,t.z0)},uMapSize:{value:new z(t.worldW,t.worldH)},uGrid:{value:new z(t.W,t.H)},uTime:{value:0},uSunIntensity:{value:1},uNight:{value:0},uSunDir:n.uniforms.uSunDir,uSunColor:n.uniforms.uSunColor,uSkyZenith:n.uniforms.uZenith,uSkyHorizon:n.uniforms.uHorizon,...Oa.clone(G.fog)}),i={...r(),uOcean:{value:1},uWave:{value:1},uShallow:{value:new U(.36,.42,.38)},uDeep:{value:new U(.07,.15,.19)}},a={...r(),uOcean:{value:0},uWave:{value:.25},uShallow:{value:new U(.27,.27,.2)},uDeep:{value:new U(.05,.08,.08)}};this.mats=[i,a].map(e=>new ja({uniforms:e,vertexShader:Ad,fragmentShader:jd,transparent:!0,fog:!0,depthWrite:!1})),this.ocean=new di(new xa(5e3,5e3,1,1).rotateX(-Math.PI/2),this.mats[0]),this.ocean.position.y=t.seaLevel,this.ocean.renderOrder=1,this.ocean.frustumCulled=!1,e.add(this.ocean);let o=[],s=[];for(let e of t.meta.lakes||[]){let[t,n,r,i]=e.bbox_m,a=o.length/3,c=yr.fromHalfFloat(yr.toHalfFloat(e.level_m));o.push(t-6,c,n-6,r+6,c,n-6,t-6,c,i+6,r+6,c,i+6),s.push(a,a+2,a+1,a+1,a+2,a+3)}if(o.length){let t=new Rr;t.setAttribute(`position`,new Er(o,3)),t.setIndex(s),t.computeBoundingSphere(),this.lakes=new di(t,this.mats[1]),this.lakes.renderOrder=1,e.add(this.lakes)}}update(e,t){for(let t of this.mats)t.uniforms.uTime.value+=e,t.uniforms.uSunIntensity.value=this.sky.sun.intensity/3,t.uniforms.uNight.value=this.sky.uniforms.uNight.value;this.ocean.position.x=Math.round(t.x/50)*50,this.ocean.position.z=Math.round(t.z/50)*50}};function Nd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Rr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Pd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Pd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Pd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Cr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Fd(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Id(e){let t=new Map,n=new Map,r=e.clone();return Ld(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Ld(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Ld(e.children[r],t.children[r],n)}var Rd=class extends fo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Gd(e)}),this.register(function(e){return new Kd(e)}),this.register(function(e){return new tf(e)}),this.register(function(e){return new nf(e)}),this.register(function(e){return new rf(e)}),this.register(function(e){return new Jd(e)}),this.register(function(e){return new Yd(e)}),this.register(function(e){return new Xd(e)}),this.register(function(e){return new Zd(e)}),this.register(function(e){return new Wd(e)}),this.register(function(e){return new Qd(e)}),this.register(function(e){return new qd(e)}),this.register(function(e){return new ef(e)}),this.register(function(e){return new $d(e)}),this.register(function(e){return new Hd(e)}),this.register(function(e){return new af(e,Vd.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new af(e,Vd.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new of(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Bo.extractUrlBase(e);a=Bo.resolveURL(t,this.path)}else a=Bo.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new ho(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===sf){try{a[Vd.KHR_BINARY_GLTF]=new uf(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Vd.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new If(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Vd.KHR_MATERIALS_UNLIT:a[t]=new Ud;break;case Vd.KHR_DRACO_MESH_COMPRESSION:a[t]=new df(i,this.dracoLoader);break;case Vd.KHR_TEXTURE_TRANSFORM:a[t]=new ff;break;case Vd.KHR_MESH_QUANTIZATION:a[t]=new pf;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function zd(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Bd(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var Vd={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Hd=class{constructor(e){this.parser=e,this.name=Vd.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new U(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Ue);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new zo(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Io(s),o.distance=c;break;case`spot`:o=new Po(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Of(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Ud=class{constructor(){this.name=Vd.KHR_MATERIALS_UNLIT}getMaterialType(){return $r}extendParams(e,t,n){let r=[];e.color=new U(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Ue),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,He))}return Promise.all(r)}},Wd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Gd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new z(e,e)}return Promise.all(r)}},Kd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},qd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Jd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new U(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Ue)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,He)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Yd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Xd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new U().setRGB(i[0],i[1],i[2],Ue),Promise.all(r)}},Zd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_IOR}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Qd=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new U().setRGB(i[0],i[1],i[2],Ue),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,He)),Promise.all(r)}},$d=class{constructor(e){this.parser=e,this.name=Vd.EXT_MATERIALS_BUMP}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=Vd.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bd(this.parser,e,this.name)===null?null:Pa}extendMaterialParams(e,t){let n=Bd(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=Vd.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},nf=class{constructor(e){this.parser=e,this.name=Vd.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},rf=class{constructor(e){this.parser=e,this.name=Vd.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},af=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},of=class{constructor(e){this.name=Vd.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==_f.TRIANGLES&&e.mode!==_f.TRIANGLE_STRIP&&e.mode!==_f.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new H,n=new B,a=new Nt,s=new B(1,1,1),c=new Li(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new ki(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new Rr,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new ki(t.array,t.itemSize,t.normalized))}kn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},sf=`glTF`,cf=12,lf={JSON:1313821514,BIN:5130562},uf=class{constructor(e){this.name=Vd.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,cf),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sf)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-cf,i=new DataView(e,cf),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===lf.JSON){let r=new Uint8Array(e,cf+a,t);this.content=n.decode(r)}else if(r===lf.BIN){let n=cf+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},df=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Vd.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Sf[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Sf[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=vf[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Ue,n)})})}},ff=class{constructor(){this.name=Vd.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},pf=class{constructor(){this.name=Vd.KHR_MESH_QUANTIZATION}},mf=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},hf=new Nt,gf=class extends mf{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return hf.fromArray(i).normalize().toArray(i),i}},_f={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vf={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:i,9729:s,9984:a,9985:c,9986:o,9987:l},bf={33071:n,33648:r,10497:t},xf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sf={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Cf={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},wf={CUBICSPLINE:void 0,LINEAR:Ie,STEP:N},Tf={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Ef(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Na({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Df(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Of(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function kf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Af(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function jf(e){let t,n=e.extensions&&e.extensions[Vd.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Mf(n.attributes):e.indices+`:`+Mf(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Mf(e.targets[n]);return t}function Mf(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Nf(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Pf(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Ff=new H,If=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zd,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new vo(this.options.manager):new Ho(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ho(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Df(i,a,r),Of(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Vd.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Bo.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=xf[r.type],t=vf[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new Cr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=xf[r.type],o=vf[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new zr(f,u/s),t.cache.add(n,c)),p=new Vr(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new Cr(f,a,d);if(r.sparse!==void 0){let t=xf.SCALAR,n=vf[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new Cr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=yf[n.magFilter]||1006,t.minFilter=yf[n.minFilter]||1008,t.wrapS=bf[n.wrapS]||1e3,t.wrapT=bf[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Xt(e);t.needsUpdate=!0,n(t)}),t.load(Bo.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Of(e,a),e.userData.mimeType=a.mimeType||Pf(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Vd.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Vd.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Vd.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new na,qr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Hi,qr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Na}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[Vd.KHR_MATERIALS_UNLIT]){let e=r[Vd.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new U(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Ue),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,He)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Tf.OPAQUE;if(l===Tf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Tf.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==$r&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new z(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==$r&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==$r){let e=i.emissiveFactor;o.emissive=new U().setRGB(e[0],e[1],e[2],Ue)}return i.emissiveTexture!==void 0&&a!==$r&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,He)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Of(n,i),t.associations.set(n,{materials:e}),i.extensions&&Df(r,n,i),n})}createUniqueName(e){let t=is.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Vd.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Rf(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=jf(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Vd.KHR_DRACO_MESH_COMPRESSION]?i(o):Rf(new Rr,o,t),o.mode===_f.TRIANGLE_STRIP?e=e.then(e=>Fd(e,1)):o.mode===_f.TRIANGLE_FAN&&(e=e.then(e=>Fd(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Ef(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===_f.TRIANGLES||u.mode===_f.TRIANGLE_STRIP||u.mode===_f.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new Ci(l,f):new di(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===_f.LINES)d=new ea(l,f);else if(u.mode===_f.LINE_STRIP)d=new Xi(l,f);else if(u.mode===_f.LINE_LOOP)d=new ta(l,f);else if(u.mode===_f.POINTS)d=new sa(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Af(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Of(d,i),u.extensions&&Df(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Df(r,c[0],i),c[0];let l=new An;i.extensions&&Df(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new Mo(Mt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Lo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Of(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new H;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Oi(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new ao(i,void 0,l);return Of(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Ff)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new B().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new wi:t.length>1?new An:t.length===1?t[0]:new kn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Of(o,i),i.extensions&&Df(n,o,i),i.matrix!==void 0){let e=new H;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new An;n.name&&(i.name=r.createUniqueName(n.name)),Of(i,n),n.extensions&&Df(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Id(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof qr||e instanceof Xt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Cf[i.path]===Cf.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Cf[i.path]){case Cf.weights:l=eo;break;case Cf.rotation:l=no;break;case Cf.translation:case Cf.scale:l=io;break;default:switch(n.itemSize){case 1:l=eo;break;default:l=io}}let u=r.interpolation===void 0?Ie:wf[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Cf[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Nf(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof no?gf:mf)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Lf(e,t,n){let r=t.attributes,i=new er;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new B(t[0],t[1],t[2]),new B(a[0],a[1],a[2])),e.normalized){let t=Nf(vf[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new B,t=new B;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Nf(vf[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Ar;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Rf(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Sf[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Bt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Bt.workingColorSpace}" not supported.`),Of(e,t),Lf(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:kf(e,t.targets,n)})}var zf=`assets/models/`,Bf={shorepine_forest:{file:`shorepine.glb`,variant:`shorepine_forest`,cat:`tree`,fallback:`pine`,h:16},shorepine_mossy:{file:`shorepine.glb`,variant:`shorepine_mossy`,cat:`tree`,fallback:`pine`,h:10},shorepine_wet:{file:`shorepine.glb`,variant:`shorepine_wet`,cat:`tree`,fallback:`pine`,h:8},shorepine_dune:{file:`shorepine.glb`,variant:`shorepine_dune`,cat:`tree`,fallback:`pinebush`,h:4},spruce_mature:{file:`sitka_spruce.glb`,variant:`spruce_mature`,cat:`tree`,fallback:`spruce`,h:22},spruce_young:{file:`sitka_spruce.glb`,variant:`spruce_young`,cat:`tree`,fallback:`spruce`,h:8},waxmyrtle:{file:`wax_myrtle.glb`,variant:`*`,cat:`tree`,fallback:`broadshrub`,h:4.5},willow:{file:`hooker_willow.glb`,variant:`*`,cat:`tree`,fallback:`broadshrub`,h:4},huckleberry:{file:`evergreen_huckleberry.glb`,variant:`*`,cat:`shrub`,fallback:`huck`,h:2,berries:`huckleberry`},salal:{file:`salal.glb`,variant:`*`,cat:`shrub`,fallback:`salal`,h:1.2,berries:`salal`},rhododendron:{file:`rhododendron.glb`,variant:`*`,cat:`shrub`,fallback:`salal`,h:2.5},kinnikinnick:{file:`kinnikinnick.glb`,variant:`*`,cat:`herb`,fallback:`mat`,h:.12,berries:`kinnikinnick`},beachgrass:{file:`beachgrass.glb`,variant:`*`,cat:`grass`,fallback:`grass`,h:.8},sedge:{file:`slough_sedge.glb`,variant:`*`,cat:`grass`,fallback:`sedge`,h:.9},rush:{file:`rush.glb`,variant:`*`,cat:`grass`,fallback:`sedge`,h:.5},bracken:{file:`bracken.glb`,variant:`*`,cat:`herb`,fallback:`fern`,h:1},sword_fern:{file:`sword_fern.glb`,variant:`*`,cat:`herb`,fallback:`fern`,h:.8},log:{file:`deadwood.glb`,variant:`log_`,cat:`log`,fallback:`log`,h:.5},snag:{file:`deadwood.glb`,variant:`snag`,cat:`tree`,fallback:`snag`,h:8}},Vf={uTime:{value:0},uWindDir:{value:new z(.8,.6)},uGust:{value:0},uPlayerPos:{value:new B},uOccluderFade:{value:1},uTunnelPos:{value:new B},uTunnelOn:{value:0}},Hf={tree:[.06,.09,.9],shrub:[.05,.6,1.4],grass:[.16,1.4,1.9],herb:[.08,1,1.6],log:[0,0,0],trunk:[.012,.08,.9]};function Uf(e,t){let n=Hf[t]||Hf.shrub,r={uSway:{value:n[0]},uSwayScale:{value:n[1]},uSwayFreq:{value:n[2]}};return e.onBeforeCompile=e=>{Object.assign(e.uniforms,Vf,r),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        uniform float uTime, uGust, uSway, uSwayScale, uSwayFreq;
        uniform vec2 uWindDir;
        varying vec3 vVegW;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 iPos = instanceMatrix[3].xyz;
        #else
          vec3 iPos = vec3(0.0);
        #endif
        {
          float hgt = max(transformed.y, 0.0);
          float bend = uSway * pow(hgt * uSwayScale, 1.5);
          float ph = dot(iPos.xz, vec2(0.13, 0.17)) + uTime * uSwayFreq;
          float flutter = sin(uTime * 7.0 + dot(transformed, vec3(9.1, 7.3, 8.7))) * 0.08;
          vec2 sw = uWindDir * (sin(ph) * 0.6 + sin(ph * 2.3 + 1.7) * 0.25 + uGust + flutter) * bend;
          #ifdef USE_INSTANCING
            mat3 im = mat3(instanceMatrix);
            vec3 lw = transpose(im) * vec3(sw.x, 0.0, sw.y);
            transformed += lw / max(dot(im[0], im[0]), 1e-4);
          #else
            transformed.xz += sw;
          #endif
        }`).replace(`#include <project_vertex>`,`#include <project_vertex>
        #ifdef USE_INSTANCING
          vVegW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
        #else
          vVegW = (modelMatrix * vec4(transformed, 1.0)).xyz;
        #endif`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform vec3 uPlayerPos, uTunnelPos;
        uniform float uOccluderFade, uTunnelOn;
        varying vec3 vVegW;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
        {
          float dc = length(vVegW - cameraPosition);
          float keep = smoothstep(0.3, 0.95, dc);
          vec3 ab = uPlayerPos - cameraPosition;
          float t = clamp(dot(vVegW - cameraPosition, ab) / max(dot(ab, ab), 1e-3), 0.0, 1.0);
          float dseg = length(vVegW - (cameraPosition + ab * t));
          float occ = mix(1.0, smoothstep(0.16, 0.55, dseg + (1.0 - t) * 0.0), uOccluderFade * step(t, 0.9));
          keep = min(keep, occ);
          if (uTunnelOn > 0.5) {
            vec3 tb = uTunnelPos - cameraPosition;
            float tl2 = max(dot(tb, tb), 1e-3);
            float tt = dot(vVegW - cameraPosition, tb) / tl2;
            float tEnd = 1.0 - 0.35 / sqrt(tl2);
            float td = length(vVegW - (cameraPosition + tb * clamp(tt, 0.0, 1.0)));
            float trad = mix(0.22, 0.6, clamp(tt, 0.0, 1.0));
            keep = min(keep, (tt > 0.03 && tt < tEnd) ? smoothstep(trad * 0.55, trad, td) : 1.0);
          }
          // ordered 4x4 Bayer dither: a clean screen-door fade instead of speckle
          ivec2 bp = ivec2(mod(gl_FragCoord.xy, 4.0));
          int bi = bp.x + bp.y * 4;
          float bayer[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
          float dith = (bayer[bi] + 0.5) / 16.0;
          if (keep < 0.999 && keep < dith) discard;
        }`)},e.customProgramCacheKey=()=>`veg-`+t,e}function Wf(e){return/^(leaf|needle|grass|moss|lichen|frond|card|foliage)/i.test(e||``)}function Gf(e,t,n){let r=e.uuid+t;if(n.has(r))return n.get(r);let i=e.clone(),a=Wf(i.name)||i.map&&i.transparent||i.alphaTest>0;if(a&&(i.alphaTest=.5,i.transparent=!1,i.side=2,i.alphaToCoverage=!1,i.roughness=Math.max(.55,i.roughness??.7),i.shadowSide=2),i.map&&(i.map.anisotropy=4),/^mat_berry/.test(i.name)){let e=/salal/.test(i.name)?new U(.19,.15,.29):/huckleberry/.test(i.name)?new U(.095,.095,.14):null;e&&(i.color.copy(e),(i.isMeshPhysicalMaterial||`sheen`in i)&&(i.sheen=.6,i.sheenColor=new U(.55,.6,.75),i.sheenRoughness=.5),i.roughness=.32,i.emissive=e.clone().multiplyScalar(.45)),i.envMapIntensity=1.6}return Uf(i,a?t:t===`log`?`log`:`trunk`),n.set(r,i),i}var Kf={};function qf(e){return Kf[e]||(Kf[e]=vd(e)),new Na({map:Kf[e],alphaTest:.5,side:2,roughness:.75,name:`leaf_placeholder_`+e})}function Jf(e,t,n,r=0){let i=[];for(let a=0;a<n;a++){let o=new xa(e,t);o.translate(0,t/2+r,0),o.rotateY(a/n*Math.PI),i.push(o)}return Yf(i)}function Yf(e){let t=0,n=0;for(let r of e)t+=r.attributes.position.count,n+=r.index?r.index.count:r.attributes.position.count;let r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t*2),o=new Uint32Array(n),s=0,c=0;for(let t of e){let e=t.attributes.position,n=t.attributes.normal,l=t.attributes.uv;if(r.set(e.array,s*3),n&&i.set(n.array,s*3),l&&a.set(l.array,s*2),t.index){for(let e=0;e<t.index.count;e++)o[c+e]=t.index.array[e]+s;c+=t.index.count}else{for(let t=0;t<e.count;t++)o[c+t]=s+t;c+=e.count}s+=e.count}let l=new Rr;return l.setAttribute(`position`,new Cr(r,3)),l.setAttribute(`normal`,new Cr(i,3)),l.setAttribute(`uv`,new Cr(a,2)),l.setIndex(new Cr(o,1)),l.computeBoundingSphere(),l}var Xf=new Na({color:4865072,roughness:.95,name:`mat_bark_placeholder`});function Zf(e,t){let n=[],r=[],i=2,a=1,o=[],s=null,c=(e,t)=>{let n=new _a(t*.6,t,e,7,1);return n.translate(0,e/2,0),o.push({a:[0,0,0],b:[0,e,0],r:t,kind:`trunk`}),n};switch(e){case`pine`:case`spruce`:case`pinebush`:case`snag`:{let o=e===`spruce`?18:e===`pinebush`?4:e===`snag`?8:12;i=o,a=e===`spruce`?3:3.5;let s=c(o*.85,e===`pinebush`?.12:.22);if(n.push({geometry:s,material:Xf}),r.push({geometry:s,material:Xf}),e!==`snag`){let i=[],s=e===`pinebush`?6:10;for(let n=0;n<s;n++){let r=e===`spruce`?o*(.15+.8*n/s):o*(.45+.5*t()),c=e===`spruce`?a*(1-n/s)+.4:1.2+t()*1.6,l=Jf(c*2,c*1.1,3);l.translate((t()-.5)*a*.8,r-c*.5,(t()-.5)*a*.8),i.push(l)}let c=qf(e===`spruce`?`spruce`:`needle`),l=Yf(i);n.push({geometry:l,material:c}),r.push({geometry:l,material:c})}break}case`broadshrub`:case`huck`:case`salal`:{let o=e===`broadshrub`?4:e===`huck`?1.9:1.1;i=o,a=o*.7;let c=[];for(let e=0;e<7;e++){let e=Jf(o*(.8+t()*.5),o*(.7+t()*.4),2);e.translate((t()-.5)*a,0,(t()-.5)*a),c.push(e)}let l=qf(e===`salal`?`salal`:`leaf`),u=Yf(c);if(n.push({geometry:u,material:l}),r.push({geometry:Jf(o*1.4,o,3),material:l}),e!==`broadshrub`){let n=[],r=e===`huck`?28:18;for(let i=0;i<r;i++){let r=new ba(e===`huck`?.012:.016,0),i=t()*Math.PI*2,s=a*(.35+t()*.3);r.translate(Math.cos(i)*s,o*(.35+t()*.5),Math.sin(i)*s),n.push(r)}s=[{geometry:Yf(n),material:new Na({color:e===`huck`?1315872:2758704,roughness:.3,name:`mat_berry`})}]}break}case`grass`:case`sedge`:case`fern`:case`mat`:{let t=e===`mat`?.12:e===`fern`?.9:e===`grass`?.8:.9;i=t,a=e===`mat`?.8:.4;let o=qf(e===`grass`?`grass`:e===`mat`?`leaf`:`sedge`),s=e===`mat`?new xa(1.6,1.6).rotateX(-Math.PI/2).translate(0,.05,0):Jf(t*.9,t,3);n.push({geometry:s,material:o}),r.push({geometry:Jf(t*.9,t,2),material:o});break}default:{let e=new _a(.22,.26,5,8);e.rotateZ(Math.PI/2),e.translate(0,.2,0);let t=new Na({color:5069362,roughness:1,name:`mat_log_placeholder`});n.push({geometry:e,material:t}),r.push({geometry:e,material:t}),i=.45,a=2.5,o=[{a:[-2.5,.2,0],b:[2.5,.2,0],r:.24,kind:`log`}]}}return{name:`placeholder_`+e,lods:[n,r],berries:s,height:i,radius:a,segments:o,placeholder:!0}}var Qf=class{constructor(){this.loader=new Rd,this.files=new Map,this.kinds=new Map,this.treesMeta={},this.matCache=new Map}async _load(e){if(this.files.has(e))return this.files.get(e);let t=window.DEPLOY?.models===`gltf-split`?this._loadSplit(e):new Promise(t=>{this.loader.load(zf+e,e=>t(e),void 0,n=>{console.warn(`model failed`,e,n),t(null)})});return this.files.set(e,t),t}async _loadSplit(e){try{let t=await fetch(zf+e+`.json`);if(!t.ok)throw Error(`HTTP `+t.status);let n=await t.json(),r=n.x_bin_b64||``;delete n.x_bin_b64;let i=Uint8Array.from(atob(r),e=>e.charCodeAt(0)),a=new TextEncoder().encode(JSON.stringify(n)),o=a.length+3&-4,s=i.length+3&-4,c=new Uint8Array(20+o+(s?8+s:0)),l=new DataView(c.buffer);return l.setUint32(0,1179937895,!0),l.setUint32(4,2,!0),l.setUint32(8,c.length,!0),l.setUint32(12,o,!0),l.setUint32(16,1313821514,!0),c.fill(32,20,20+o),c.set(a,20),s&&(l.setUint32(20+o,s,!0),l.setUint32(24+o,5130562,!0),c.set(i,28+o)),await new Promise((e,t)=>this.loader.parse(c.buffer,zf,e,t))}catch(t){return console.warn(`model failed`,e,t),null}}async loadPlants(e){try{let e=await fetch(zf+`trees_meta.json`);e.ok&&(this.treesMeta=await e.json())}catch{}let t=[...new Set(Object.values(Bf).map(e=>e.file))],n=0;await Promise.all(t.map(async r=>{await this._load(r),e?.(++n/t.length,r)}));for(let[e,t]of Object.entries(Bf)){let n=await this._load(t.file),r=n?this._extractVariants(n,t):[];if(!r.length){let n=rd(e.length*31+7);r=[Zf(t.fallback,n)],(t.fallback===`huck`||t.fallback===`salal`||t.fallback===`broadshrub`)&&r.push(Zf(t.fallback,n));for(let e of r)for(let n of[...e.lods,e.berries||[]])for(let e of n)e.material.userData.vegShaded||(Uf(e.material,Wf(e.material.name)?t.cat:`trunk`),e.material.userData.vegShaded=!0)}for(let t of r)t.kind=e;this.kinds.set(e,{def:t,variants:r})}return this.kinds}_extractVariants(e,t){let n=new Map;e.scene.updateMatrixWorld(!0),e.scene.traverse(e=>{let r=/^(.*?)_(lod\d|berries|flowers)$/i.exec(e.name||``);if(!r)return;let i=r[1],a=r[2].toLowerCase();if(t.variant!==`*`&&!i.startsWith(t.variant))return;n.has(i)||n.set(i,{});let o=n.get(i);o[a]||(o[a]=e)});let r=[];for(let[e,i]of n){let n=i.lod0||i.lod1;if(!n)continue;let a=(e,t)=>{if(!e)return null;let n=new H().copy(e.matrixWorld).invert(),r=[];return e.traverse(e=>{if(!e.isMesh)return;let i=new H().multiplyMatrices(n,e.matrixWorld),a=e.geometry.clone();a.applyMatrix4(i),a.computeBoundingSphere();let o=Array.isArray(e.material)?e.material:[e.material];if(o.length>1&&a.groups.length)for(let e of a.groups){let n=a.clone();n.setIndex(Array.from(a.index.array.slice(e.start,e.start+e.count))),n.clearGroups(),r.push({geometry:n,material:Gf(o[e.materialIndex],t,this.matCache)})}else r.push({geometry:a,material:Gf(o[0],t,this.matCache)})}),r},o=a(n,t.cat),s=a(i.lod1,t.cat)||o,c=a(i.berries,`shrub`),l=new er;for(let e of o)e.geometry.computeBoundingBox(),l.union(e.geometry.boundingBox);let u=l.getSize(new B),d=this.treesMeta[e];r.push({name:e,lods:[o,s],berries:c,height:d?.height??u.y,radius:d?.crownRadius??Math.max(u.x,u.z)/2,segments:d?.segments??[]})}return r}async loadCreature(e){return await this._load(e)}},$f=16,ep=[`tree`,`shrub`,`log`],tp=new Set([`huckleberry`,`salal`,`rhododendron`]),np=e=>!!(e.data.tree||e.data.log||e.data.shrub?.trees?.length);function rp(e,t,n,r,i,a,o,s,c,l,u,d){let f=e-o,p=t-s,m=n-c,h=r*r+i*i+a*a,g=l*l+u*u+d*d,_=l*f+u*p+d*m,v=e=>e<0?0:e>1?1:e,y,b;if(h<1e-9&&g<1e-9)return f*f+p*p+m*m;if(h<1e-9)y=0,b=v(_/g);else{let e=r*f+i*p+a*m;if(g<1e-9)b=0,y=v(-e/h);else{let t=r*l+i*u+a*d,n=h*g-t*t;y=n>1e-12?v((t*_-e*g)/n):0,b=(t*y+_)/g,b<0?(b=0,y=v(-e/h)):b>1&&(b=1,y=v((t-e)/h))}}let x=f+r*y-l*b,S=p+i*y-u*b,C=m+a*y-d*b;return x*x+S*S+C*C}var ip=[`tree`,`shrub`,`herb`,`log`],ap={tree:{spacing:5,crown:3,coverIdx:0,scale:[.78,1.22]},shrub:{spacing:1.9,crown:1.35,coverIdx:1,scale:[.8,1.35]},herb:{spacing:.72,crown:.42,coverIdx:2,scale:[.75,1.3]},log:{spacing:16,crown:0,coverIdx:-1,scale:[.8,1.2]}},op={low:{tree:190,treeLod0:45,shrub:55,shrubLod0:16,herb:22,herbLod0:8,log:60,shadows:!1,shadowDist:0},medium:{tree:270,treeLod0:65,shrub:80,shrubLod0:22,herb:32,herbLod0:10,log:90,shadows:!0,shadowDist:40},high:{tree:360,treeLod0:90,shrub:105,shrubLod0:30,herb:44,herbLod0:13,log:120,shadows:!0,shadowDist:55}},sp=class{constructor(e,t,n={}){this.parts=e,this.capacity=0,this.count=0,this.meshes=[],this.scene=t,this.opts=n,this._alloc(n.initial||256)}_alloc(e){for(let e of this.meshes)this.scene.remove(e);this.capacity=e,this.array=new Float32Array(e*16),this.attr=new ki(this.array,16),this.attr.setUsage(Je),this.meshes=this.parts.map(t=>{let n=new Li(t.geometry,t.material,e);return n.instanceMatrix=this.attr,n.count=0,n.frustumCulled=!1,n.castShadow=!!this.opts.castShadow,n.receiveShadow=this.opts.receiveShadow!==!1,this.opts.layer!=null&&n.layers.set(this.opts.layer),n.matrixAutoUpdate=!1,this.scene.add(n),n})}ensure(e){if(e<=this.capacity)return;let t=this.capacity;for(;t<e;)t*=2;let n=this.array,r=this.count;this._alloc(t),this.array.set(n.subarray(0,r*16))}push(e){let t=e.length/16;this.ensure(this.count+t),this.array.set(e,this.count*16),this.count+=t}commit(){for(let e of this.meshes)e.count=this.count;this.attr.clearUpdateRanges(),this.attr.addUpdateRange(0,Math.max(16,this.count*16)),this.attr.needsUpdate=!0}};function cp(e,t,n,r,i,a,o){let s=Math.cos(a)*o,c=Math.sin(a)*o;e[t]=s,e[t+1]=0,e[t+2]=-c,e[t+3]=0,e[t+4]=0,e[t+5]=o,e[t+6]=0,e[t+7]=0,e[t+8]=c,e[t+9]=0,e[t+10]=s,e[t+11]=0,e[t+12]=n,e[t+13]=r,e[t+14]=i,e[t+15]=1}var lp=class{constructor(e,t,n,r,i={}){this.terrain=e,this.lib=t,this.scene=n,this.sun=r,this.season=i.season||`fall`,this.setQuality(i.quality||`medium`),this.cells=new Map,this.groups=new Map,this.shadowGroups=new Map,this.berryGroups=new Map,this.variants=[],this.kindVariants=new Map,this.berryState=new Map,this.frustum=new Vi,this._pm=new H,this._box=new er;for(let[e,{def:n,variants:r}]of t.kinds){let t=[];for(let i of r){let r=this.variants.length;this.variants.push({...i,id:r,kind:e,cat:n.cat,berryKind:n.berries||null}),t.push(r)}this.kindVariants.set(e,t)}r&&r.shadow.camera.layers.enable(2)}setQuality(e){if(this.q=op[e]||op.medium,this.qualityName=e,this.cells)for(let e of this.cells.values())e.dirtyRender=!0}_group(e,t){let n=`${e}:${t}`,r=this.groups.get(n);if(!r){let i=this.variants[e];r=new sp(i.lods[t]||i.lods[0],this.scene,{castShadow:!1,initial:i.cat===`herb`||i.cat===`grass`?1024:256}),this.groups.set(n,r)}return r}_shadowGroup(e){let t=this.shadowGroups.get(e);if(!t){let n=this.variants[e];t=new sp(n.lods[1]||n.lods[0],this.scene,{castShadow:!0,layer:2,receiveShadow:!1,initial:64}),this.shadowGroups.set(e,t)}return t}_berryGroup(e){let t=this.berryGroups.get(e);if(!t){let n=this.variants[e];if(!n.berries)return null;t=new sp(n.berries,this.scene,{castShadow:!1,initial:64}),this.berryGroups.set(e,t)}return t}_cellKey(e,t){return e*100003+t}_getCell(e,t,n=!0){let r=this._cellKey(e,t),i=this.cells.get(r);if(!i&&n){let n=e*$f,a=t*$f,o=this.terrain,s=1e9,c=-1e9;for(let[e,t]of[[0,0],[$f,0],[0,$f],[$f,$f],[$f/2,$f/2]]){let r=o.heightAt(n+e,a+t);s=Math.min(s,r),c=Math.max(c,r)}i={i:e,j:t,key:r,x0:n,z0:a,cx:n+$f/2,cz:a+$f/2,minY:s-1,maxY:c+2,data:{},topY:c+2},this.cells.set(r,i)}return i}_generate(e,t){let n=ap[t],r=this.terrain,i=rd(id(e.i+5e3,e.j+5e3,ip.indexOf(t)+11)),a=new Map,o=t===`shrub`||t===`herb`?[]:null,s=t===`herb`?[]:null,c=t===`tree`||t===`log`||t===`shrub`?[]:null,l=Math.max(1,Math.round($f/n.spacing)),u=$f/l;for(let d=0;d<l;d++)for(let f=0;f<l;f++){let l=e.x0+(f+.5+(i()-.5)*.95)*u,p=e.z0+(d+.5+(i()-.5)*.95)*u,m=i(),h=i(),g=i(),_=i(),v=i(),y=Gu[r.habitatAt(l,p)];if(!y)continue;let b=t===`tree`?y.trees:t===`shrub`?y.shrubs:t===`herb`?y.herbs:null,x;if(t===`log`){if(!y.logs)continue;x=y.logs*.6}else{if(!b)continue;let e=r.coverAt(l,p),t=Math.min(.97,[e.tree,e.shrub,e.herb][n.coverIdx]);if(t<=.002)continue;x=-Math.log(1-t)/(Math.PI*n.crown*n.crown)*u*u}if(m>x)continue;let S;if(t===`log`)S=v<.85?`log`:`snag`;else{let e=0;for(let t of Object.values(b))e+=t;let t=h*e;S=null;for(let[e,n]of Object.entries(b))if(t-=n,t<=0){S=e;break}S||=Object.keys(b)[0]}let C=this.kindVariants.get(S);if(!C||!C.length)continue;let w=C[Math.floor(g*C.length)%C.length],T=this.variants[w],E=r.heightAt(l,p);if(r.waterDepthAt(l,p)>(S===`sedge`||S===`rush`||S===`willow`?.6:.02))continue;let D=n.scale[0]+(n.scale[1]-n.scale[0])*_,O=v*Math.PI*2;a.has(w)||a.set(w,[]);let ee=a.get(w),k=ee.length;ee.length+=16,cp(ee,k,l,E-(t===`log`?.05:.02),p,O,D),o&&(T.cat===`shrub`||T.berryKind)&&o.push({x:l,z:p,y:E,r:(T.radius||1)*D,h:(T.height||1.5)*D,kind:S,vid:w,rot:O,s:D,key:`${e.key}:${t}:${k/16}:${w}`}),c&&(t!==`shrub`||T.cat===`tree`)&&c.push({x:l,y:E,z:p,rot:O,s:D,vid:w,kind:S,h:(T.height||8)*D}),s&&!T.berryKind&&(T.height||.5)*D>.35&&s.push({x:l,y:E,z:p,r:(T.radius||.4)*D,h:(T.height||.5)*D})}let d=new Map;for(let[e,t]of a)d.set(e,new Float32Array(t));if(e.data[t]={mats:d,shrubs:o,trees:c,occl:s},e.occ=null,e.solids=null,e.segments&&c)for(let t of c)this._pushSegments(t,e.segments);o&&this._assignBerries(e,o),e.dirtyRender=!0}_assignBerries(e,t){let n=[`spring`,`summer`,`fall`,`winter`].indexOf(this.season),r=K.berries;for(let e of t){let t=this.variants[e.vid];if(!t.berryKind)continue;let i=Hu[t.berryKind],a=i?i.ripeness[n]:0;if(a<=0)continue;let o=rd(id(Math.round(e.x*10),Math.round(e.z*10),77)),s=this.terrain.coverAt(e.x,e.z),c=(r.fruitingFrac[t.berryKind]??.35)*(1-r.canopyPenalty*s.tree)*Math.min(1,a*1.2);if(o()>c)continue;let l=(r.shrubFruitG[0]+(r.shrubFruitG[1]-r.shrubFruitG[0])*o())*a*(t.berryKind===`kinnikinnick`?.5:1);e.fruitG0=l,this.berryState.has(e.key)||this.berryState.set(e.key,l)}}_ensureSegments(e){if(!e.segments){e.segments=[];for(let t of ep)for(let n of e.data[t]?.trees||[])this._pushSegments(n,e.segments)}}_pushSegments(e,t){let n=this.variants[e.vid],r=Math.cos(e.rot),i=Math.sin(e.rot),a=e.s;for(let o of n.segments||[]){let n=t=>[e.x+(r*t[0]+i*t[2])*a,e.y+t[1]*a,e.z+(-i*t[0]+r*t[2])*a],s=n(o.a),c=n(o.b);t.push({ax:s[0],ay:s[1],az:s[2],bx:c[0],by:c[1],bz:c[2],r:o.r*a,kind:o.kind,tree:e})}}prime(e,t,n=40){let r=Math.floor((e-n)/$f),i=Math.floor((e+n)/$f),a=Math.floor((t-n)/$f),o=Math.floor((t+n)/$f);for(let e=a;e<=o;e++)for(let t=r;t<=i;t++){let n=this._getCell(t,e);for(let e of ip)n.data[e]||this._generate(n,e)}}update(e,t,n,r=1e9){let i=this.q,a=Math.min(i.tree,r*.75),o=Math.max(a,i.log),s=Math.floor(t.position.x/$f),c=Math.floor(t.position.z/$f),l=Math.ceil(o/$f)+1;t.updateMatrixWorld(),this._pm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this._pm);for(let e of this.groups.values())e.count=0;for(let e of this.shadowGroups.values())e.count=0;for(let e of this.berryGroups.values())e.count=0;let u=18,d=t.position.x,f=t.position.z,p=n.x,m=n.z;for(let e=c-l;e<=c+l;e++)for(let t=s-l;t<=s+l;t++){let n=t*$f,r=e*$f,s=Math.max(0,Math.abs(d-(n+$f/2))-$f/2),c=Math.max(0,Math.abs(f-(r+$f/2))-$f/2),l=Math.hypot(s,c);if(l>o)continue;let h=this._getCell(t,e);for(let e of ip)l<=(e===`tree`?a:e===`shrub`?i.shrub:e===`herb`?i.herb:i.log)+$f&&!h.data[e]&&u>0&&(this._generate(h,e),u-=e===`herb`?3:e===`shrub`?2:1);let g=Math.max(0,Math.abs(p-(n+$f/2))-$f/2),_=Math.max(0,Math.abs(m-(r+$f/2))-$f/2),v=Math.hypot(g,_);if(i.shadows&&v<i.shadowDist)for(let e of[`tree`,`shrub`,`log`]){let t=h.data[e];if(!(!t||e===`shrub`&&v>i.shadowDist*.5))for(let[e,n]of t.mats)this._shadowGroup(e).push(n)}if(this._box.min.set(n,h.minY,r),this._box.max.set(n+$f,h.topY+30,r+$f),this.frustum.intersectsBox(this._box))for(let e of ip){let t=h.data[e];if(!t)continue;let n,r;if(e===`tree`?(n=a,r=i.treeLod0):e===`shrub`?(n=i.shrub,r=i.shrubLod0):e===`herb`?(n=i.herb,r=i.herbLod0):(n=i.log,r=i.log),l>n)continue;let o=l<=r?0:1;for(let[e,n]of t.mats)this._group(e,o).push(n);if(t.shrubs&&l<K.berries.drawDist)for(let e of t.shrubs){if(e.fruitG0==null||(this.berryState.get(e.key)??0)<e.fruitG0*.12)continue;let t=this._berryGroup(e.vid);t&&(t.ensure(t.count+1),cp(t.array,t.count*16,e.x,e.y-.02,e.z,e.rot,e.s),t.count++)}}}for(let e of this.groups.values())e.commit();for(let e of this.shadowGroups.values())e.commit();for(let e of this.berryGroups.values())e.commit();if(this.cells.size>4e3)for(let[e,t]of this.cells)Math.hypot(t.cx-d,t.cz-f)>o*1.4&&this.cells.delete(e)}_occluders(e){if(e.occ)return e.occ;let t=e.occ=[];for(let n of e.data.shrub?.shrubs||[])n.h>1.2&&n.kind!==`salal`?(t.push({ref:n,cx:n.x,cy:n.y+n.h*.65,cz:n.z,rx:n.r*.85,ry:n.h*.36,k:2.2}),t.push({ref:n,cx:n.x,cy:n.y+n.h*.15,cz:n.z,rx:n.r*.55,ry:n.h*.16,k:.6})):t.push({ref:n,cx:n.x,cy:n.y+n.h*.55,cz:n.z,rx:n.r*.85,ry:n.h*.5,k:2.2});for(let n of e.data.herb?.shrubs||[])t.push({ref:n,cx:n.x,cy:n.y+n.h*.5,cz:n.z,rx:n.r*.8,ry:Math.max(.05,n.h*.5),k:1.4});for(let n of e.data.herb?.occl||[])t.push({ref:n,cx:n.x,cy:n.y+n.h*.5,cz:n.z,rx:n.r*.8,ry:n.h*.5,k:1.3});for(let n of[...e.data.tree?.trees||[],...e.data.shrub?.trees||[]]){if(n.kind===`snag`)continue;let e=(this.variants[n.vid].radius||2)*n.s;t.push({ref:n,cx:n.x,cy:n.y+n.h*.6,cz:n.z,rx:e*.85,ry:n.h*.42,k:.9})}return t}_solids(e){return e.solids?e.solids:np(e)?(this._ensureSegments(e),e.solids=e.segments.filter(e=>(e.kind===`trunk`||e.kind===`log`)&&e.r>.05)):e.solids=[]}visibility(e,t,n=null){let r=t.x-e.x,i=t.y-e.y,a=t.z-e.z,o=Math.hypot(r,i,a);if(o<.05)return 1;let s=Math.max(0,1-.25/o),c=0,l=Math.floor((Math.min(e.x,t.x)-5)/$f),u=Math.floor((Math.max(e.x,t.x)+5)/$f),d=Math.floor((Math.min(e.z,t.z)-5)/$f),f=Math.floor((Math.max(e.z,t.z)+5)/$f),p=Math.min(e.x,t.x),m=Math.max(e.x,t.x),h=Math.min(e.z,t.z),g=Math.max(e.z,t.z);for(let t=d;t<=f;t++)for(let d=l;d<=u;d++){let l=this.cells.get(this._cellKey(d,t));if(l){for(let t of this._solids(l)){if(n&&t.tree===n)continue;let o=t.r*.95;if(!(Math.max(t.ax,t.bx)+o<p||Math.min(t.ax,t.bx)-o>m||Math.max(t.az,t.bz)+o<h||Math.min(t.az,t.bz)-o>g)&&rp(e.x,e.y,e.z,r*s,i*s,a*s,t.ax,t.ay,t.az,t.bx-t.ax,t.by-t.ay,t.bz-t.az)<o*o)return 0}for(let t of this._occluders(l)){if(t.ref===n)continue;let l=(e.x-t.cx)/t.rx,u=(e.y-t.cy)/t.ry,d=(e.z-t.cz)/t.rx,f=r/t.rx,p=i/t.ry,m=a/t.rx,h=f*f+p*p+m*m,g=2*(l*f+u*p+d*m),_=l*l+u*u+d*d-1,v=g*g-4*h*_;if(v<=0)continue;let y=Math.sqrt(v),b=Math.max(0,(-g-y)/(2*h)),x=Math.min(s,(-g+y)/(2*h));if(!(x<=b)&&(c+=t.k*(x-b)*o,c>6))return 0}}}return Math.exp(-c)}openness(e,t,n,r=5,i=5,a=.5){let o=this._ob||=new B,s=this._oa||=new B;o.set(e,t+.08,n);let c=0,l=(e*7.1+n*3.3)%6.283;for(let t=0;t<i;t++){let u=l+t/i*6.283,d=e+Math.cos(u)*r,f=n+Math.sin(u)*r;s.set(d,this.terrain.heightAt(d,f)+a,f),c+=this.visibility(s,o)}return c/i}_cellsNear(e,t,n,r){let i=Math.floor((e-n)/$f),a=Math.floor((e+n)/$f),o=Math.floor((t-n)/$f),s=Math.floor((t+n)/$f);for(let e=o;e<=s;e++)for(let t=i;t<=a;t++){let n=this.cells.get(this._cellKey(t,e));n&&r(n)}}segmentsNear(e,t,n,r=[]){return r.length=0,this._cellsNear(e,t,n+6,i=>{if(np(i)){this._ensureSegments(i);for(let a of i.segments){let i=Math.min(a.ax,a.bx)-a.r,o=Math.max(a.ax,a.bx)+a.r,s=Math.min(a.az,a.bz)-a.r,c=Math.max(a.az,a.bz)+a.r;e+n<i||e-n>o||t+n<s||t-n>c||r.push(a)}}}),r}shrubsNear(e,t,n,r){this._cellsNear(e,t,n,i=>{for(let a of[`shrub`,`herb`]){let o=i.data[a];if(o&&o.shrubs)for(let i of o.shrubs)Math.abs(i.x-e)<n&&Math.abs(i.z-t)<n&&r(i)}})}inThicket(e,t){let n=0;return this.shrubsNear(e,t,3,r=>{if(r.h<.6||!tp.has(r.kind))return;let i=r.r*.85,a=Math.hypot(r.x-e,r.z-t);a<i&&(n=Math.max(n,1-a/i))}),n}treesNear(e,t,n,r){this._cellsNear(e,t,n,i=>{for(let a of[`tree`,`shrub`]){let o=i.data[a];if(o?.trees)for(let i of o.trees)Math.abs(i.x-e)<n&&Math.abs(i.z-t)<n&&r(i)}})}findFruiting(e,t,n){let r=null,i=1e9;return this.shrubsNear(e,t,n+3,a=>{if(a.fruitG0==null||(this.berryState.get(a.key)??0)<=.5)return;let o=Math.hypot(a.x-e,a.z-t)-a.r*.85;o<n&&o<i&&(i=o,r=a)}),r}eatFrom(e,t){let n=this.berryState.get(e.key)??0,r=Math.min(n,t);return this.berryState.set(e.key,n-r),r}remaining(e){return this.berryState.get(e.key)??0}},up=class{constructor(e){this.dom=e,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouse={dx:0,dy:0,wheel:0,left:!1,right:!1,leftPressed:!1,leftReleased:!1,rightPressed:!1},this.sensitivity=1,this.locked=!1,this.lockFailed=!1,this.active=!1,this.enabled=!0,addEventListener(`keydown`,e=>{this.enabled&&([`Space`,`ArrowUp`,`ArrowDown`,`Tab`].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code))}),addEventListener(`keyup`,e=>{this.keys.delete(e.code),this.released.add(e.code)}),addEventListener(`blur`,()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1}),e.addEventListener(`mousedown`,e=>{this.enabled&&(!this.locked&&!this.lockFailed&&this.active?this.requestLock():(e.button===0&&(this.mouse.left=!0,this.mouse.leftPressed=!0),e.button===2&&(this.mouse.right=!0,this.mouse.rightPressed=!0)))}),addEventListener(`mouseup`,e=>{e.button===0&&(this.mouse.left&&(this.mouse.leftReleased=!0),this.mouse.left=!1),e.button===2&&(this.mouse.right=!1)}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),addEventListener(`mousemove`,e=>{(this.locked||this.lockFailed&&this.active)&&(this.mouse.dx+=e.movementX*this.sensitivity,this.mouse.dy+=e.movementY*this.sensitivity)}),e.addEventListener(`wheel`,e=>{this.mouse.wheel+=Math.sign(e.deltaY),e.preventDefault()},{passive:!1}),document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===this.dom,this.onLockChange?.(this.locked)}),document.addEventListener(`pointerlockerror`,()=>{this.lockFailed=!0})}requestLock(){if(this.active=!0,this.lockFailed)return;let e=()=>{this.lockFailed=!0};try{let t=this.dom.requestPointerLock?.({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{let t=this.dom.requestPointerLock?.();t&&t.catch&&t.catch(e)}catch{e()}})}catch{e()}}exitLock(){this.active=!1,document.pointerLockElement&&document.exitPointerLock()}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}endFrame(){this.pressed.clear(),this.released.clear(),this.mouse.dx=this.mouse.dy=this.mouse.wheel=0,this.mouse.leftPressed=this.mouse.leftReleased=this.mouse.rightPressed=!1}},dp=class{constructor(e,t){this.camera=e,this.terrain=t,this.yaw=0,this.pitch=-.12,this.distance=2.1,this.targetDistance=2.1,this.firstPerson=!1,this.shake=0,this.focus=new B,this._pos=new B,this.segQuery=null,this.stalk=0,this.stalkTarget=0}get forward(){return new B(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}get right(){return new B(Math.cos(this.yaw),0,-Math.sin(this.yaw))}handleInput(e,t){let n=.0022;this.yaw-=e.mouse.dx*n,this.pitch-=e.mouse.dy*n,this.pitch=J(this.pitch,this.firstPerson?-1.35:-1.2,this.firstPerson?1.35:.85),e.mouse.wheel&&(this.targetDistance=J(this.targetDistance+e.mouse.wheel*.35,1,6.5))}update(e,t){let n=t.headWorld,r=t.position,i=t.climbing?.25:.28;this.focus.set(xd(this.focus.x,r.x*.6+n.x*.4,20,e),xd(this.focus.y,r.y+i,12,e),xd(this.focus.z,r.z*.6+n.z*.4,20,e)),(Math.abs(this.focus.x-r.x)>3||Math.abs(this.focus.z-r.z)>3)&&this.focus.set(r.x,r.y+i,r.z);let a=this.camera;if(this.firstPerson){a.position.copy(n).add(new B(0,.045,0));let e=new B(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch));a.lookAt(a.position.clone().add(e)),a.near=.03}else{this.distance=xd(this.distance,this.targetDistance,6,e);let t=Math.cos(this.pitch),n=Math.sin(this.pitch),r=new B(Math.sin(this.yaw)*t,-n,Math.cos(this.yaw)*t),i=this.distance;for(let e=0;e<6;e++){let e=this.focus.clone().addScaledVector(r,i),t=this.terrain.heightAt(e.x,e.z)+.18;if(e.y>=t)break;i*=.8}this._pos.copy(this.focus).addScaledVector(r,i);let o=this.terrain.heightAt(this._pos.x,this._pos.z)+.15;if(this._pos.y<o&&(this._pos.y=o),this.segQuery)for(let e of this.segQuery(this._pos.x,this._pos.z,.6)){if(e.kind!==`trunk`)continue;let t=J((this._pos.y-e.ay)/Math.max(.01,e.by-e.ay),0,1),n=e.ax+(e.bx-e.ax)*t,r=e.az+(e.bz-e.az)*t,i=this._pos.x-n,a=this._pos.z-r,o=Math.hypot(i,a),s=e.r+.22;o<s&&o>1e-4&&(this._pos.x=n+i/o*s,this._pos.z=r+a/o*s)}a.position.copy(this._pos),a.lookAt(this.focus.x,this.focus.y+.05,this.focus.z),a.near=.05}this.stalk=xd(this.stalk,this.stalkTarget,2.2,e);let o=J(t.standing||0,0,1),s=68-30*o-13*this.stalk*(1-o);Math.abs(a.fov-s)>.01&&(a.fov=s),this.shake>0&&(this.shake=Math.max(0,this.shake-e*2.5),a.position.x+=(Math.random()-.5)*this.shake*.08,a.position.y+=(Math.random()-.5)*this.shake*.08),a.updateProjectionMatrix()}aimDirection(e=new B){return this.camera.getWorldDirection(e)}},fp=class{constructor(e=`normal`){let t=K.energy;this.diff=K.difficulty[e]||K.difficulty.normal,this.capacity=t.capacityKJ,this.kJ=t.capacityKJ*t.startFrac,this.starve=0,this.meals=[],this.scats=[],this.lastScatH=0,this.totalIn=0,this.totalOut=0,this.burnRate=0,this.dead=!1}get frac(){return J(this.kJ/this.capacity,0,1)}get room(){return Math.max(0,this.capacity-this.kJ)}get speedFactor(){let e=K.energy;return this.frac>=e.lowFrac?1:Y(e.minSpeedFactor,1,this.frac/e.lowFrac)}get canSprint(){return this.frac>K.energy.noSprintFrac}update(e,t,n,r){let i=K.energy,a=i.fmrKJPerDay/K.dayLengthSec*((i.activity[t]??1)*(n||1)*this.diff.metabolism)*e;this.burnRate=this.burnRate*.95+a/Math.max(e,1e-4)*.05,this.kJ-=a,this.totalOut+=a,this.kJ<=0?(this.kJ=0,this.starve+=e,this.starve>i.starveGraceSec&&(this.dead=!0)):this.starve=Math.max(0,this.starve-e*2),this._maybeScat(r)}gain(e){let t=Math.min(e,this.room);return this.kJ+=t,this.totalIn+=t,e-t}recordMeal(e,t,n,r,i){let a=Lu[t],o=a?a.name:Hu[t]?.name||t,s=this.meals[this.meals.length-1];s&&s.id===t&&e-s.h<.4&&s.type===i?(s.kJ+=n,s.g+=r,s.h=e):this.meals.push({h:e,id:t,name:o,kJ:n,g:r,type:i})}_maybeScat(e){let t=K.scat;if(e-this.lastScatH<t.everyGameHours)return;let n=this.lastScatH-1,r=this.meals.filter(t=>t.h>n&&t.h<=e);if(this.lastScatH=e,!r.length)return;let i=new Set,a={};for(let e of r)e.type===`berry`?a[e.id]=(a[e.id]||0)+e.g:i.add(e.id);this.scats.push({h:e,taxa:i,berries:a})}dietSummary(e=`summer`){let t=this.scats.length,n={},r={},i=0;for(let e of this.scats)for(let t of e.taxa)n[t]=(n[t]||0)+1;for(let e of this.meals)e.type!==`berry`&&(r[e.id]=(r[e.id]||0)+e.g,i+=e.g);let a={};for(let e of this.meals)e.type===`berry`&&(a[e.id]=(a[e.id]||0)+e.g);let o=this.scats.filter(e=>Object.keys(e.berries).length).length,s=Object.keys({...n,...r}).map(a=>({id:a,name:Lu[a]?.name||a,fo:t?100*(n[a]||0)/t:0,rra:i?100*(r[a]||0)/i:0,realFO:Lu[a]?Math.min(100,Vu(Lu[a],e)??0):null,realRRA:null})).sort((e,t)=>t.fo-e.fo||t.rra-e.rra),c=Iu.filter(e=>e.spawnable&&e.id!==`deer_carrion`).map(t=>({id:t.id,v:Vu(t,e)??0})).filter(e=>e.v>0).sort((e,t)=>t.v-e.v).slice(0,8).map(e=>e.id),l={prey:0,berry:0,carrion:0};for(let e of this.meals)l[e.type]=(l[e.type]||0)+e.kJ;return{scats:t,rows:s,topReal:c,berryG:a,scatsWithFruitPct:t?100*o/t:0,kJBy:l,items:this.meals.filter(e=>e.type!==`berry`).length}}},pp=`audio/xc/`,mp={wrentit:.9,towhee:.8,sparrow:.85,chickadee:.7,bandtailed_pigeon:.9,stellers_jay:1,swainsons_thrush:.85,yr_warbler:.65,bushtit:.5,robin:.95,varied_thrush:.85,flicker:1,dove:.8,ruffed_grouse:1.1,cedar_waxwing:.5,vireo:.7,gc_kinglet:.45,pacific_wren:1,owl:.9,frog:.55,douglas_squirrel:.9},hp={spring:.85,summer:.75,fall:.3,winter:.25},gp=new Set([`wrentit`,`pacific_wren`,`sparrow`,`vireo`,`bandtailed_pigeon`,`dove`,`ruffed_grouse`,`owl`]),_p=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this._birdTimer=2,this._frogTimer=1,this.rec=null,this.bufs=new Map,this.season=`fall`}async loadRecordings(){try{let e=await fetch(pp+`manifest.json`);e.ok&&(this.rec=await e.json())}catch{this.rec=null}return this.rec}prefetch(e){if(this.ctx&&this.rec)for(let t of[].concat(e)){let e=this.rec.clips[t];if(e)for(let t of Object.values(e))for(let e of t)this._decode(e.f)}}_decode(e){if(this.bufs.has(e)||!this.ctx)return;let t=fetch(pp+e).then(e=>e.arrayBuffer()).then(e=>this.ctx.decodeAudioData(e)).then(t=>{this.bufs.set(e,t)},()=>{this.bufs.set(e,null)});this.bufs.set(e,t)}_clip(e,t){let n=this.rec?.clips?.[e];if(!n)return null;for(let e of t){let t=n[e];if(!t?.length)continue;let r=t[Math.floor(Math.random()*t.length)],i=this.bufs.get(r.f);if(i instanceof AudioBuffer)return i;this._decode(r.f);for(let e of t){let t=this.bufs.get(e.f);if(t instanceof AudioBuffer)return t}return null}return null}_playClip(e,t,{gain:n=1,ref:r=14,roll:i=1,rate:a=1}={}){let o=this.ctx,s=this._out(t,{ref:r,roll:i}),c=o.createBufferSource(),l=o.createGain();return c.buffer=e,c.playbackRate.value=a*(1+(Math.random()-.5)*.03),l.gain.value=n,c.connect(l).connect(s),c.start(o.currentTime+.01),c.onended=()=>{try{l.disconnect(),s.disconnect()}catch{}},!0}voice(e,t,n,r={}){if(!this.ctx||!this.enabled)return!1;let i=this._clip(e,t);return i?this._playClip(i,n,{gain:.5*(mp[e]??.8)*(r.amb?.75:1)*(r.v??1),ref:r.ref??14,roll:r.roll??1}):!1}init(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e){this.enabled=!1;return}let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.volume;let n=t.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,this.master.connect(n).connect(t.destination),this.sfxBus=t.createGain(),this.sfxBus.connect(this.master),this.ambBus=t.createGain(),this.ambBus.gain.value=.9,this.ambBus.connect(this.master);let r=t.sampleRate*3;this.white=t.createBuffer(1,r,t.sampleRate),this.pink=t.createBuffer(1,r,t.sampleRate),this.brown=t.createBuffer(1,r,t.sampleRate);let i=this.white.getChannelData(0),a=this.pink.getChannelData(0),o=this.brown.getChannelData(0),s=0,c=0,l=0,u=0;for(let e=0;e<r;e++){let t=Math.random()*2-1;i[e]=t,s=.99765*s+t*.099046,c=.963*c+t*.2965164,l=.57*l+t*1.0526913,a[e]=(s+c+l+t*.1848)*.18,u=(u+.02*t)/1.02,o[e]=u*3.5}this._buildAmbience()}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}_loopNoise(e){let t=this.ctx.createBufferSource();return t.buffer=e,t.loop=!0,t.loopStart=Math.random(),t.start(0,Math.random()*2),t}_buildAmbience(){let e=this.ctx;this.surfPan=e.createPanner(),this.surfPan.panningModel=`HRTF`,this.surfPan.distanceModel=`linear`,this.surfPan.refDistance=1,this.surfPan.maxDistance=1e5,this.surfPan.rolloffFactor=0,this.surfPan.connect(this.ambBus);let t=this._loopNoise(this.brown);this.surfLP=e.createBiquadFilter(),this.surfLP.type=`lowpass`,this.surfLP.frequency.value=400,this.surfGain=e.createGain(),this.surfGain.gain.value=0,t.connect(this.surfLP).connect(this.surfGain).connect(this.surfPan);let n=this._loopNoise(this.pink);this.crashLP=e.createBiquadFilter(),this.crashLP.type=`lowpass`,this.crashLP.frequency.value=600,this.crashLP.Q.value=.3,this.crashGain=e.createGain(),this.crashGain.gain.value=0,n.connect(this.crashLP).connect(this.crashGain).connect(this.surfPan);let r=this._loopNoise(this.pink),i=e.createBiquadFilter();i.type=`bandpass`,i.frequency.value=2600,i.Q.value=.35,this.surfHiss=e.createGain(),this.surfHiss.gain.value=0,r.connect(i).connect(this.surfHiss).connect(this.surfPan),this.waveT=2,this.waveInSet=0;let a=this._loopNoise(this.pink);this.windBP=e.createBiquadFilter(),this.windBP.type=`bandpass`,this.windBP.frequency.value=600,this.windBP.Q.value=.7,this.windGain=e.createGain(),this.windGain.gain.value=0,a.connect(this.windBP).connect(this.windGain).connect(this.ambBus);let o=this._loopNoise(this.white),s=e.createBiquadFilter();s.type=`highpass`,s.frequency.value=3e3,this.rainGain=e.createGain(),this.rainGain.gain.value=0,o.connect(s).connect(this.rainGain).connect(this.ambBus),this.gust=0,this.surfPhase=0,this.listenerPos=new B,this.forest=0}update(e){if(!this.ctx||!this.enabled)return;let t=this.ctx,n=t.currentTime,r=t.listener;e.season&&e.season!==this.season&&(this.season=e.season);let{pos:i,fwd:a,up:o}=e.listener;r.positionX?(r.positionX.setTargetAtTime(i.x,n,.02),r.positionY.setTargetAtTime(i.y,n,.02),r.positionZ.setTargetAtTime(i.z,n,.02),r.forwardX.setTargetAtTime(a.x,n,.02),r.forwardY.setTargetAtTime(a.y,n,.02),r.forwardZ.setTargetAtTime(a.z,n,.02),r.upX.setTargetAtTime(o.x,n,.02),r.upY.setTargetAtTime(o.y,n,.02),r.upZ.setTargetAtTime(o.z,n,.02)):(r.setPosition(i.x,i.y,i.z),r.setOrientation(a.x,a.y,a.z,o.x,o.y,o.z)),this.listenerPos.copy(i),this.forest=J(e.forest??0,0,1),this.surfPhase+=e.dt;let s=1/(1+Math.max(0,e.oceanDist)/150),c=1-.5*this.forest,l=.85+.15*Math.sin(this.surfPhase*.21)*Math.sin(this.surfPhase*.067+1);if(this.surfGain.gain.setTargetAtTime(.42*s**1.4*c*l,n,.4),this.surfLP.frequency.setTargetAtTime((240+2300*s*s)*(1-.35*this.forest),n,.4),e.oceanDir){let t=this.surfPan,r=i.x+e.oceanDir.x*30,a=i.z+e.oceanDir.z*30;t.positionX?(t.positionX.setTargetAtTime(r,n,.3),t.positionY.setTargetAtTime(i.y,n,.3),t.positionZ.setTargetAtTime(a,n,.3)):t.setPosition(r,i.y,a)}if(this.waveT-=e.dt,this.waveT<=0){let e=.55+Math.random()*.45,t=.5*s**1.2*c*e,r=(380+2600*s*s)*(1-.35*this.forest),i=this.crashGain.gain,a=this.surfHiss.gain,o=this.crashLP.frequency;i.cancelScheduledValues(n),i.setTargetAtTime(t,n,.28+Math.random()*.2),i.setTargetAtTime(1e-4,n+.9+Math.random()*.5,1.1+Math.random()*.6),o.cancelScheduledValues(n),o.setTargetAtTime(r,n,.2),o.setTargetAtTime(r*.55,n+1,1.4);let l=.16*s**3*c*e;a.cancelScheduledValues(n),a.setTargetAtTime(l,n+.8,.5),a.setTargetAtTime(1e-4,n+2.4,1.2),this.waveInSet=(this.waveInSet+1)%(3+Math.floor(Math.random()*2)),this.waveT=this.waveInSet===0?12+Math.random()*10:6+Math.random()*3}if(this.gust=J(this.gust+(Math.random()-.5)*e.dt*.8,0,1),this.windGain.gain.setTargetAtTime((.04+.16*this.gust)*(.35+.65*e.open),n,.4),this.windBP.frequency.setTargetAtTime(420+this.gust*600,n,.5),this.rainGain.gain.setTargetAtTime(e.rain*.12,n,.5),this._birdTimer-=e.dt,this._birdTimer<=0){let t=e.night?.03:(e.dawn?2.2:.8)*(.3+e.forest);if(this._birdTimer=1/Math.max(.05,t)*(.5+Math.random()),!e.night&&e.forest>.1){let t=[`wrentit`,`wrentit`,`towhee`,`sparrow`,`chickadee`,`stellers_jay`,`robin`,`pacific_wren`,e.season===`winter`?`varied_thrush`:`swainsons_thrush`,`bushtit`,`yr_warbler`,`gc_kinglet`],n=t[Math.floor(Math.random()*t.length)],r=Math.random()*Math.PI*2,a=12+Math.random()*45;this.prefetch(n),this.sfx(`song:`+n,new B(i.x+Math.cos(r)*a,i.y+2+Math.random()*5,i.z+Math.sin(r)*a),{amb:!0})}}if(this._frogTimer-=e.dt,this._frogTimer<=0){if(this._frogTimer=.25+Math.random()*.6,e.night&&e.nearWater<220&&e.season!==`summer`){let t=Math.random()*Math.PI*2,n=15+Math.random()*60,r=new B(i.x+Math.cos(t)*n,i.y,i.z+Math.sin(t)*n),a=J(1-e.nearWater/220,.1,1);this.voice(`frog`,[`call`],r,{v:a,ref:10})?this._frogTimer=1.5+Math.random()*2.5:this.sfx(`frog`,r,{v:a})}e.night&&Math.random()<.01&&this.sfx(`owl`,new B(i.x+60,i.y+15,i.z-40))}}_panner(e,t=6,n=1.2,r=400){let i=this.ctx.createPanner();return i.panningModel=`HRTF`,i.distanceModel=`inverse`,i.refDistance=t,i.rolloffFactor=n,i.maxDistance=r,i.positionX?(i.positionX.value=e.x,i.positionY.value=e.y,i.positionZ.value=e.z):i.setPosition(e.x,e.y,e.z),i.connect(this.sfxBus),i}_out(e,t={}){if(e)return this._panner(e,t.ref??4,t.roll??1.2);let n=this.ctx.createGain();return n.connect(this.sfxBus),n}_tone(e,t,n,r,i,a=`sine`,o=.2,s=.005){let c=this.ctx,l=c.createOscillator(),u=c.createGain();l.type=a,l.frequency.setValueAtTime(n,t),l.frequency.exponentialRampToValueAtTime(Math.max(20,r),t+i),u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(o,t+s),u.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(u).connect(e),l.start(t),l.stop(t+i+.02)}_noise(e,t,n,r,i,a,o,s=.005,c=this.white,l=null){let u=this.ctx,d=u.createBufferSource(),f=u.createBiquadFilter(),p=u.createGain();d.buffer=c,f.type=r,f.frequency.setValueAtTime(i,t),f.Q.value=a,l&&f.frequency.exponentialRampToValueAtTime(l,t+n),p.gain.setValueAtTime(1e-4,t),p.gain.exponentialRampToValueAtTime(o,t+s),p.gain.exponentialRampToValueAtTime(1e-4,t+n),d.connect(f).connect(p).connect(e),d.start(t,Math.random()*2),d.stop(t+n+.02)}sfx(e,t=null,n={}){if(!this.ctx||!this.enabled)return;let r=this.ctx.currentTime+.01,i=n.v??1;if(e.startsWith(`song:`))return this._song(e.slice(5),t,n);if(e.startsWith(`call:`)){let r=e.slice(5);return this.voice(r,[`call`,`song`],t,n)?void 0:this._song(r,t,n)}if(e.startsWith(`alarm:`)){let r=e.slice(6);if(this.voice(r,[`alarm`,`call`],t,n))return;e=`chip`}if(e===`jayAlarm`&&this.voice(`stellers_jay`,[`alarm`,`call`],t,n)||e===`chatter`&&this.voice(`douglas_squirrel`,[`call`],t,n)||e===`owl`&&this.voice(`owl`,[`song`],t,{...n,ref:30}))return;if(e===`scold`){let e=[`wrentit`,`towhee`,`sparrow`,`chickadee`,`pacific_wren`][Math.floor(Math.random()*5)];if(this.voice(e,[`alarm`,`call`],t,n))return}let a=this._out(t,n);switch(e){case`hop`:this._noise(a,r,.12,`lowpass`,500,.7,.15*i);break;case`land`:this._noise(a,r,.15,`lowpass`,300,.7,.25*i);break;case`pounce`:this._noise(a,r,.28,`bandpass`,600,1.2,.25,.04,this.pink,2400);break;case`catch`:this._tone(a,r,3400,4600,.18,`sine`,.12),this._noise(a,r,.15,`lowpass`,900,.5,.3);break;case`squeak`:this._tone(a,r,4200,5600,.12,`triangle`,.14),this._tone(a,r+.14,4800,3800,.1,`triangle`,.1);break;case`birdCatch`:for(let e=0;e<5;e++)this._noise(a,r+e*.05,.05,`bandpass`,1800,1,.2);this._tone(a,r+.05,2600,2e3,.15,`sawtooth`,.04);break;case`chew`:for(let e=0;e<3;e++)this._noise(a,r+e*.09+Math.random()*.03,.05,`bandpass`,2200+Math.random()*1500,1.5,n.soft?.05:.12);break;case`flush`:for(let e=0;e<7;e++)this._noise(a,r+e*.035,.03,`bandpass`,1500,.8,.18*i);break;case`flushBig`:for(let e=0;e<9;e++)this._noise(a,r+e*.06,.05,`lowpass`,900,.8,.35*i);break;case`rustle`:this._noise(a,r,.35,`bandpass`,3500,.6,.08,.05);break;case`scrabble`:for(let e=0;e<6;e++)this._noise(a,r+e*.05,.03,`highpass`,3e3,.7,.07);break;case`chatter`:for(let e=0;e<14;e++)this._noise(a,r+e*.035,.025,`bandpass`,3800,3,.12);break;case`growl`:{let e=this.ctx,t=e.createOscillator(),n=e.createGain(),i=e.createBiquadFilter();t.type=`sawtooth`,t.frequency.setValueAtTime(95,r),t.frequency.linearRampToValueAtTime(70,r+.9);let o=e.createOscillator(),s=e.createGain();o.frequency.value=23,s.gain.value=18,o.connect(s).connect(t.frequency),i.type=`lowpass`,i.frequency.value=520,i.Q.value=3,n.gain.setValueAtTime(1e-4,r),n.gain.exponentialRampToValueAtTime(.35,r+.08),n.gain.exponentialRampToValueAtTime(1e-4,r+1),t.connect(i).connect(n).connect(a),t.start(r),t.stop(r+1.05),o.start(r),o.stop(r+1.05);break}case`hiss`:this._noise(a,r,.55,`highpass`,2500,.6,.4,.02);break;case`thud`:this._noise(a,r,.25,`lowpass`,160,.8,.7*i);break;case`death`:this._noise(a,r,.6,`lowpass`,140,.9,.8),this._tone(a,r,220,60,1.2,`sine`,.2);break;case`heartbeat`:this._tone(a,r,70,45,.12,`sine`,.5),this._tone(a,r+.22,65,42,.14,`sine`,.38);break;case`eat`:this._tone(a,r,880,1320,.12,`sine`,.05);break;case`jayAlarm`:{let e=3+Math.floor(Math.random()*3);for(let t=0;t<e;t++)this._noise(a,r+t*.21,.13,`bandpass`,2300,2.5,.5,.01),this._tone(a,r+t*.21,1500,1300,.12,`sawtooth`,.05);break}case`scold`:for(let e=0;e<10;e++)this._noise(a,r+e*.05,.04,`bandpass`,4e3,2,.15);break;case`beg`:for(let e=0;e<14;e++)this._tone(a,r+e*.06+Math.random()*.025,6200+Math.random()*1400,5600,.035,`sine`,.13);break;case`chip`:{let e=4200+Math.random()*1600;this._tone(a,r,e*1.15,e*.85,.035,`sine`,.22),Math.random()<.5&&this._tone(a,r+.12,e*1.15,e*.85,.035,`sine`,.2);break}case`frog`:{let e=1300+Math.random()*600;for(let[t,n]of[[0,.07],[.13,.09]]){let o=this.ctx,s=o.createOscillator(),c=o.createGain(),l=o.createOscillator(),u=o.createGain();s.type=`square`,s.frequency.value=e,l.frequency.value=90,u.gain.value=.5;let d=o.createBiquadFilter();d.type=`bandpass`,d.frequency.value=e*1.4,d.Q.value=4,c.gain.setValueAtTime(1e-4,r+t),c.gain.exponentialRampToValueAtTime(.06*i,r+t+.01),c.gain.exponentialRampToValueAtTime(1e-4,r+t+n),l.connect(u).connect(c.gain),s.connect(d).connect(c).connect(a),s.start(r+t),s.stop(r+t+n+.02),l.start(r+t),l.stop(r+t+n+.02)}break}case`owl`:for(let[e,t]of[[0,.25],[.45,.18],[.75,.18],[1.1,.5],[1.75,.45]])this._tone(a,r+e,320,290,t,`sine`,.12,.05);break;case`toast`:this._tone(a,r,660,990,.14,`sine`,.06)}}_whistle(e,t,n,r,i,a,{vib:o=0,vibHz:s=30,attack:c=.012,type:l=`sine`,harm:u=.12}={}){let d=this.ctx,f=d.createOscillator(),p=d.createGain();f.type=l,f.frequency.setValueAtTime(n,t),f.frequency.exponentialRampToValueAtTime(Math.max(40,r),t+i);let m=null;if(o){m=d.createOscillator();let e=d.createGain();m.frequency.value=s,e.gain.value=n*o,m.connect(e).connect(f.frequency),m.start(t),m.stop(t+i+.03)}p.gain.setValueAtTime(1e-4,t),p.gain.exponentialRampToValueAtTime(a,t+Math.min(c,i*.4)),p.gain.setValueAtTime(a,t+i*.6),p.gain.exponentialRampToValueAtTime(1e-4,t+i),f.connect(p).connect(e),f.start(t),f.stop(t+i+.03),u>0&&this._tone(e,t,n*2,r*2,i,`sine`,a*u,Math.min(c,i*.4))}_buzz(e,t,n,r,i,a,o=70){let s=this.ctx,c=s.createOscillator(),l=s.createGain(),u=s.createOscillator(),d=s.createGain();c.type=`triangle`,c.frequency.setValueAtTime(n,t),c.frequency.linearRampToValueAtTime(r,t+i),u.type=`square`,u.frequency.value=o,d.gain.value=a*.5,l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(a*.5,t+.03),l.gain.setValueAtTime(a*.5,t+i*.75),l.gain.linearRampToValueAtTime(1e-4,t+i),u.connect(d).connect(l.gain),c.connect(l).connect(e),c.start(t),c.stop(t+i+.02),u.start(t),u.stop(t+i+.02)}_song(e,t,n){let r=gp.has(e)||Math.random()<(hp[this.season]??.6);if(this.voice(e,r?[`song`,`drum`,`call`]:[`call`,`song`,`drum`],t,n))return;let i=this._out(t,{ref:14,roll:1}),a=this.ctx.currentTime+.02,o=(n.amb?.75:1)*3.2,s=Math.random;switch(e){case`wrentit`:{let e=0,t=.17,n=2300+s()*300;for(let r=0;r<15;r++)this._whistle(i,a+e,n*1.08,n*.92,.045,.08*o,{harm:.2}),e+=t,t*=.88;break}case`towhee`:this._whistle(i,a,2200,2600,.08,.06*o),s()<.6&&this._whistle(i,a+.14,2600,2400,.07,.05*o),this._buzz(i,a+.3,3700,3300,.8,.09*o,45+s()*20);break;case`sparrow`:{let e=2500+s()*400;[0,.22,.44].forEach(t=>this._whistle(i,a+t,e,e*.96,.13,.07*o)),this._buzz(i,a+.66,4200,4e3,.32,.07*o,90);for(let e=0;e<6;e++)this._whistle(i,a+1.05+e*.075,3600-e*120+s()*300,3e3,.05,.05*o);break}case`chickadee`:if(s()<.6)this._whistle(i,a,3950,3900,.3,.07*o,{attack:.04,harm:0}),this._whistle(i,a+.38,3350,3300,.28,.06*o,{attack:.04,harm:0});else{this._whistle(i,a,7e3,6e3,.05,.04*o),this._whistle(i,a+.08,4500,4e3,.05,.04*o);for(let e=0;e<3;e++)this._buzz(i,a+.2+e*.16,3500,3400,.12,.07*o,110)}break;case`stellers_jay`:for(let e=0;e<3+Math.floor(s()*3);e++)this._noise(i,a+e*.24,.14,`bandpass`,2100,2.2,.22*o,.01),this._tone(i,a+e*.24,1350,1150,.13,`sawtooth`,.025*o);break;case`swainsons_thrush`:{let e=1500+s()*200;for(let t=0;t<7;t++){for(let n=0;n<2;n++)this._whistle(i,a+t*.14+n*.05,e*(1+n*.06),e*(1.05+n*.06),.06,.05*o,{vib:.01,vibHz:40,harm:.25});e*=1.13}break}case`varied_thrush`:{let e=2400+s()*1600;this._whistle(i,a,e,e*.995,1.5,.045*o,{vib:.012,vibHz:34,attack:.25,harm:.08}),this._whistle(i,a,e*1.012,e*1.008,1.5,.025*o,{attack:.3,harm:0});break}case`robin`:for(let e=0;e<5;e++){let t=2300+s()*700;this._whistle(i,a+e*.28,t,t*1.15,.08,.06*o),this._whistle(i,a+e*.28+.09,t*1.15,t*.85,.1,.06*o)}break;case`band_tailed_pigeon`:case`bandtailed_pigeon`:case`dove`:[0,.5].forEach((e,t)=>this._whistle(i,a+e,t?310:280,t?280:300,.38,.14*o,{attack:.08,harm:.3}));break;case`yr_warbler`:for(let e=0;e<10;e++)this._whistle(i,a+e*.085,3800-e*60,3300-e*60,.06,.04*o);break;case`bushtit`:for(let e=0;e<7;e++)this._whistle(i,a+e*.12+s()*.06,6400+s()*500,6e3,.035,.025*o,{harm:0});break;case`gc_kinglet`:for(let e=0;e<5;e++)this._whistle(i,a+e*.13,7200+e*150,7e3+e*150,.08,.025*o,{harm:0});for(let e=0;e<6;e++)this._whistle(i,a+.7+e*.05,5e3+s()*1500,4500,.04,.025*o);break;case`pacific_wren`:{let e=0;for(let t=0;t<40;t++){let t=3500+s()*4e3;this._whistle(i,a+e,t,t*(.9+s()*.2),.04,.035*o,{harm:0}),e+=.05+s()*.03}break}case`cedar_waxwing`:this._whistle(i,a,7500,7300,.5,.025*o,{vib:.02,vibHz:60,attack:.05,harm:0});break;case`flicker`:this._whistle(i,a,2800,1900,.32,.08*o,{vib:.03,vibHz:50,harm:.4});break;case`ruffed_grouse`:{let e=0,t=.55;for(let n=0;n<14;n++)this._noise(i,a+e,.09,`lowpass`,120,.9,.5*o),e+=t,t*=.82;break}case`vireo`:for(let e=0;e<4;e++)this._whistle(i,a+e*.42,2600,3500,.2,.05*o);break;default:this._whistle(i,a,3200,3700,.08,.04*o)}}engine(e){if(!this.ctx||!this.enabled)return null;let t=this.ctx,n=this._panner(new B,14,1,900),r=t.createGain();r.gain.value=0;let i=t.createBiquadFilter();i.type=`lowpass`,i.frequency.value=900,i.Q.value=.5;let a=t.createWaveShaper(),o=new Float32Array(256);for(let e=0;e<256;e++){let t=e/128-1;o[e]=Math.tanh(t*3)}a.curve=o;let s=t.createBiquadFilter();s.type=`lowpass`,s.frequency.value=900;let c=t.createOscillator();c.type=`sawtooth`;let l=t.createOscillator();l.type=`square`;let u=this._loopNoise(this.brown),d=t.createGain();d.gain.value=.4;let f=t.createGain();f.gain.value=.5,c.connect(f),l.connect(f),u.connect(d).connect(f),f.connect(a).connect(s).connect(i).connect(r).connect(n),c.start(),l.start();let p=e===`ATV`?55:e===`dune buggy`?38:46,m=!0,h=0,g=0,_=2+Math.random()*4,v=t.currentTime,y=Math.random()*10;return{update:(e,a,o)=>{if(!m)return;let u=t.currentTime,d=Math.min(.1,Math.max(0,u-v));v=u,h+=d,n.positionX&&(n.positionX.setTargetAtTime(e.x,u,.05),n.positionY.setTargetAtTime(e.y+.8,u,.05),n.positionZ.setTargetAtTime(e.z,u,.05)),_-=d,_<=0&&(g=.25+Math.random()*.35,_=3+Math.random()*6),g=Math.max(0,g-d*.9);let f=p*(1+a/9)*(o?1.35:1)*(1+g+.06*Math.sin(u*.9+y));c.frequency.setTargetAtTime(f,u,.12),l.frequency.setTargetAtTime(f*.5,u,.12),s.frequency.setTargetAtTime(500+a*60+g*900,u,.1);let b=e.distanceTo(this.listenerPos);i.frequency.setTargetAtTime(Math.max(160,2200/(1+b/70)*(1-.5*this.forest)),u,.3);let x=J(h/3,0,1);r.gain.setTargetAtTime((.2+a*.008)*(1+g*.5)*(1-.45*this.forest)*x,u,.2)},stop:()=>{m=!1;let e=t.currentTime;r.gain.setTargetAtTime(0,e,.2),setTimeout(()=>{try{c.stop(),l.stop(),u.stop(),n.disconnect()}catch{}},800)}}}},vp=Math.PI*2,yp={X:new B(1,0,0),Y:new B(0,1,0),Z:new B(0,0,1)},bp={marten:{stride:{walk:.36,trot:.62,bound:1.05},duty:{walk:.64,trot:.5,bound:.38},legSwing:{walk:.5,trot:.65,bound:.95},spineFlex:.32,bob:{walk:.006,trot:.012,bound:.035},tailCurl:.25,neckUp:.15},bobcat:{stride:{walk:.95,trot:1.6,bound:2.6},duty:{walk:.66,trot:.5,bound:.4},legSwing:{walk:.42,trot:.55,bound:.85},spineFlex:.2,bob:{walk:.015,trot:.03,bound:.07},tailCurl:.15,neckUp:.05},deer:{stride:{walk:1.1,trot:2,bound:3.4},duty:{walk:.68,trot:.5,bound:.4},legSwing:{walk:.35,trot:.5,bound:.75},spineFlex:.1,bob:{walk:.01,trot:.04,bound:.1},tailCurl:.1,neckUp:.1}},xp=class{constructor(e){this.bones={},e.updateMatrixWorld(!0);let t=new H().copy(e.matrixWorld).invert(),n=new H,r=new Nt,i=new B,a=new B;e.traverse(e=>{if(!(e.isBone||e.userData.bone)||!e.name||this.bones[e.name])return;n.multiplyMatrices(t,e.matrixWorld).decompose(i,r,a);let o=r.clone().invert();this.bones[e.name]={bone:e,rest:e.quaternion.clone(),restPos:e.position.clone(),ax:yp.X.clone().applyQuaternion(o),ay:yp.Y.clone().applyQuaternion(o),az:yp.Z.clone().applyQuaternion(o),worldPos:i.clone()}}),this._q=new Nt}has(e){return!!this.bones[e]}set(e,t=0,n=0,r=0){let i=this.bones[e];if(!i)return;let a=i.bone.quaternion.copy(i.rest);n&&a.multiply(this._q.setFromAxisAngle(i.ay,n)),t&&a.multiply(this._q.setFromAxisAngle(i.ax,t)),r&&a.multiply(this._q.setFromAxisAngle(i.az,r))}offset(e,t,n,r){let i=this.bones[e];i&&i.bone.position.set(i.restPos.x+t,i.restPos.y+n,i.restPos.z+r)}},Sp={walk:[.5,0,.25,.75],trot:[.5,0,0,.5],bound:[.08,.18,.62,.62]},Cp=class{constructor(e,t=bp.marten){this.root=e,this.g=t,this.bones={},e.updateMatrixWorld(!0);let n=new H().copy(e.matrixWorld).invert(),r=new H,i=new Nt,a=new B,o=new B;e.traverse(e=>{if(!e.isBone)return;r.multiplyMatrices(n,e.matrixWorld).decompose(a,i,o);let t=i.clone().invert();this.bones[e.name]={bone:e,rest:e.quaternion.clone(),restPos:e.position.clone(),ax:yp.X.clone().applyQuaternion(t),ay:yp.Y.clone().applyQuaternion(t),az:yp.Z.clone().applyQuaternion(t),worldPos:a.clone()}}),this.tail=Object.keys(this.bones).filter(e=>/^tail\d+$/.test(e)).sort(),this.phase=0,this.gaitW={walk:1,trot:0,bound:0},this.t=0,this.look={yaw:0,pitch:0},this.idleLook={yaw:0,pitch:0,timer:0},this.earTwitch=0,this.chew=0,this._q=new Nt,this._q2=new Nt;let s=this.bones.upperarm_L,c=this.bones.thigh_L;this.shoulderH=s?s.worldPos.y:.12,this.hipH=c?c.worldPos.y:.12}has(e){return!!this.bones[e]}set(e,t=0,n=0,r=0){let i=this.bones[e];if(!i)return;let a=i.bone.quaternion.copy(i.rest);n&&a.multiply(this._q.setFromAxisAngle(i.ay,n)),t&&a.multiply(this._q.setFromAxisAngle(i.ax,t)),r&&a.multiply(this._q.setFromAxisAngle(i.az,r))}offset(e,t,n,r){let i=this.bones[e];i&&i.bone.position.set(i.restPos.x+t,i.restPos.y+n,i.restPos.z+r)}update(e,t){let n=this.g;this.t+=e;let r=t.speed||0,i={walk:0,trot:0,bound:0},a=n.stride.walk*5.5,o=n.stride.trot*7.5;r<a?i.walk=1:r<o?i.trot=1:i.bound=1,t.swim&&(i.walk=0,i.trot=1,i.bound=0);for(let t of[`walk`,`trot`,`bound`])this.gaitW[t]=xd(this.gaitW[t],i[t],8,e);let s=n.stride.walk*this.gaitW.walk+n.stride.trot*this.gaitW.trot+n.stride.bound*this.gaitW.bound,c=J(r/(n.stride.walk*2.2),0,1),l=r>.03?r/s:0;this.phase=(this.phase+l*e)%1;let u=this.phase,d=this.gaitW,f=t.crouch||0,p=[[`upperarm_L`,`forearm_L`,`hand_L`,0,!0],[`upperarm_R`,`forearm_R`,`hand_R`,1,!0],[`thigh_L`,`shin_L`,`foot_L`,2,!1],[`thigh_R`,`shin_R`,`foot_R`,3,!1]],m=n.duty.walk*d.walk+n.duty.trot*d.trot+n.duty.bound*d.bound,h=(n.legSwing.walk*d.walk+n.legSwing.trot*d.trot+n.legSwing.bound*d.bound)*c;for(let[e,n,i,a,o]of p){let s=Sp.walk[a]*d.walk+Sp.trot[a]*d.trot+Sp.bound[a]*d.bound,l=(u+s)%1,p,g;if(l<m)p=Y(-1,1,l/m),g=0;else{let e=(l-m)/(1-m);p=Y(1,-1,.5-.5*Math.cos(e*Math.PI)),g=Math.sin(e*Math.PI)}let _=p*h*.62,v=g*(.55+.4*d.bound)*c;if(_+=o?-f*.35:f*.55,v+=f*.85,t.stretch&&(_=Y(_,o?-1:.9,t.stretch),v*=1-t.stretch),t.coil&&(_=Y(_,o?-.25:.5,t.coil),v=Y(v,1.2,t.coil)),t.stand&&!o&&(_=Y(_,-.9,t.stand),v=Y(v,.6,t.stand)),t.stand&&o&&(_=Y(_,-.4,t.stand),v=Y(v,1.4,t.stand)),t.climb){let e=Math.sin((u+s)*vp);_=(o?-.9:-.5)+e*.5*J(r*2,0,1),v=.6+Math.max(0,e)*.6}t.swim&&(_=Math.sin((u+s)*vp)*.7,v=.4+.4*Math.max(0,Math.sin((u+s)*vp))),t.dead&&(_=o?-.5:.6,v=.2),this.set(e,_,0,0),this.set(n,o?v*.9:-v*1,0,0),this.set(i,o?-v*.6-_*.25:v*.8+_*.2,0,0)}let g=u*vp,_=n.spineFlex*d.bound*c,v=Math.sin(g-.6)*_,y=Math.sin(g)*.05*(d.walk+d.trot)*c,b=v+f*-.08+(t.stand||0)*-.25;t.coil&&(b+=t.coil*.35),t.stretch&&(b-=t.stretch*.25);let x=Math.sin(this.t*(t.speed>.2?4:1.6))*.015;this.set(`pelvis`,b*.6+(t.stand||0)*-.9+(t.slope||0)*.3,y*.6,y*.4),this.set(`spine1`,-b*.5+x,y,0),this.set(`spine2`,-b*.6-x,-y*.5,0),this.set(`spine3`,-b*.5+(t.stand||0)*.2,-y*.8,-y*.3);let S=(n.bob.walk*d.walk+n.bob.trot*d.trot+n.bob.bound*d.bound)*c,C=Math.abs(Math.sin(g*(d.bound>.5?1:2)))*S-S*.5;this.offset(`pelvis`,0,C-f*this.hipH*.28+(t.stand||0)*this.hipH*.15,0),this._updateIdleLook(e,t);let w=J(t.lookYaw??this.idleLook.yaw,-1.1,1.1),T=J(t.lookPitch??this.idleLook.pitch,-.7,.6);t.eat&&(T=.85+Math.sin(this.t*9)*.06,w=Math.sin(this.t*2.3)*.15),t.sniff&&(T=.7+Math.sin(this.t*13)*.04,w=Math.sin(this.t*1.7)*.5),T+=f*.35-b*.4-(t.stand||0)*.3,t.climb&&(T-=.3),this.look.yaw=xd(this.look.yaw,w,8,e),this.look.pitch=xd(this.look.pitch,T,8,e),this.set(`neck`,this.look.pitch*.55-n.neckUp+(t.stretch||0)*.3,this.look.yaw*.55,0),this.set(`head`,this.look.pitch*.45,this.look.yaw*.45,(t.turn||0)*-.15),this.chew=t.eat?this.chew+e*10:0,this.set(`jaw`,t.eat?Math.max(0,Math.sin(this.chew))*.35:t.snarl?.5:0,0,0),this.earTwitch-=e;let E=0,D=0;this.earTwitch<0&&(this.earTwitch=1.5+Math.random()*4,this._twSide=Math.random()<.5?`L`:`R`,this._twT=.18),this._twT>0&&(this._twT-=e,this._twSide===`L`?E=.35:D=.35);let O=(d.bound*c+ +!!t.snarl)*.6;this.set(`ear_L`,O+E,0,0),this.set(`ear_R`,O+D,0,0);let ee=Math.sin(this.t*2.2+g)*(.12+.2*c);for(let e=0;e<this.tail.length;e++){let r=(e+1)/this.tail.length,i=-n.tailCurl*.3*r+v*.5-f*.12+(t.stretch||0)*-.15+(t.alarm||0)*-.25;t.climb&&(i+=.25),this.set(this.tail[e],i,ee*(.4+r)*+!t.dead,0)}}_updateIdleLook(e,t){let n=this.idleLook;if(n.timer-=e,n.timer<=0){n.timer=1.2+Math.random()*3;let e=(t.speed||0)<.2;n.yaw=e?(Math.random()-.5)*1.4:(Math.random()-.5)*.3,n.pitch=e?(Math.random()-.5)*.5:0}}},wp=null;function Tp(){if(wp)return wp;let e=document.createElement(`canvas`);e.width=e.height=256;let n=e.getContext(`2d`),r=n.createImageData(256,256);for(let e=0;e<65536;e++){let t=Math.random(),n=t<.55?t*.9:.5+Math.random()**.6*.5;r.data[e*4]=r.data[e*4+1]=r.data[e*4+2]=n*255,r.data[e*4+3]=255}return n.putImageData(r,0,0),wp=new ua(e),wp.wrapS=wp.wrapT=t,wp.magFilter=i,wp.minFilter=a,wp.colorSpace=``,wp}var Ep=[[/^tail/,2.6],[/^(head|jaw)$/,.6],[/^ear/,.35],[/^(hand|toe|foot)/,.45],[/^(forearm|shin)/,.75],[/^neck$/,1.15]];function Dp(e,t=[],n=Ep){let r=e.geometry;if(r.attributes.furLen)return;let i=r.attributes.skinIndex,a=r.attributes.skinWeight,o=r.attributes.position.count,s=r.attributes.position,c=new B,l=e.skeleton.bones.map(e=>{for(let[t,r]of n)if(t.test(e.name))return r;return 1}),u=new Float32Array(o);for(let e=0;e<o;e++){let n=0,r=0;for(let t=0;t<4;t++){let o=a.getComponent(e,t);n+=o*l[i.getComponent(e,t)],r+=o}if(u[e]=r>0?n/r:1,t.length){c.fromBufferAttribute(s,e);for(let n of t){let t=c.distanceTo(n.p);t<n.r&&(u[e]*=Mt.smoothstep(t,n.r*.45,n.r))}}}r.setAttribute(`furLen`,new Cr(u,1))}function Op(e,{shells:t=10,length:n=.012,density:r=70,droop:i=.35,regions:a=Ep}={}){let o=[],s=[];e.updateMatrixWorld(!0),e.traverse(e=>{e.isSkinnedMesh&&e.geometry.attributes.uv&&!/eye/i.test(e.name)?o.push(e):e.isMesh&&/eye/i.test(e.name)&&(e.geometry.computeBoundingSphere(),s.push({p:e.localToWorld(e.geometry.boundingSphere.center.clone()),r:e.geometry.boundingSphere.radius*2.6}))});let c=Tp();for(let e of o){if(e.geometry.attributes.skinIndex){let t=e.geometry.attributes.position,r=new B(0,0,-1e9),i=new B;for(let e=0;e<t.count;e++)i.fromBufferAttribute(t,e),i.z>r.z&&r.copy(i);let o=new H().copy(e.matrixWorld).invert();Dp(e,[...s.map(e=>({p:e.p.clone().applyMatrix4(o),r:e.r})),{p:r,r:n/.013*.016}],a)}let o=!!e.geometry.attributes.furLen,l=Array.isArray(e.material)?e.material[0]:e.material;for(let a=1;a<=t;a++){let s=a/t,u=l.clone();u.transparent=!1,u.alphaTest=0,u.side=0,u.onBeforeCompile=e=>{e.uniforms.uFurNoise={value:c},e.uniforms.uShell={value:s},e.uniforms.uLen={value:n},e.uniforms.uDensity={value:r},e.uniforms.uDroop={value:i},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uShell, uLen, uDroop;
varying vec2 vFurUv;`+(o?`
attribute float furLen;`:``)).replace(`#include <skinning_vertex>`,`#include <skinning_vertex>
            float fl = uLen * ${o?`furLen`:`1.0`};
            transformed += normalize(objectNormal) * fl * uShell;
            transformed.y -= fl * uDroop * uShell * uShell;
            vFurUv = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D uFurNoise;
uniform float uShell, uDensity;
varying vec2 vFurUv;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
            float strand = texture2D(uFurNoise, vFurUv * uDensity).r;
            if (strand < uShell * 0.92 + 0.04) discard;`).replace(`#include <map_fragment>`,`#include <map_fragment>
            diffuseColor.rgb *= mix(0.72, 1.06, uShell);`)},u.customProgramCacheKey=()=>`fur-shell`+(o?`-len`:``);let d=new Ci(e.geometry,u);d.name=e.name+`_fur`+a,d.bind(e.skeleton,e.bindMatrix),d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1,d.position.copy(e.position),d.quaternion.copy(e.quaternion),d.scale.copy(e.scale),e.parent.add(d)}}return o.length}function kp(e){let{L:t=.42,Hs:n=.13,Hh:r=.145,tail:i=.2,nTail:a=6,headL:o=.09,width:s=.07,body:c=11044698,legs:l=5125410,tailC:u=5914407,bib:d=14727288,ears:f=!0}=e,p={},m=(e,t,n)=>{let r=new wi;r.name=e;let i=n?n.userData.world:new B;return r.position.copy(t).sub(i),r.userData.world=t.clone(),n&&n.add(r),p[e]=r,r},h=(e,t,n)=>new B(e,t,n),g=-t*.38,_=t*.3,v=m(`root`,h(0,0,0)),y=m(`pelvis`,h(0,r,g),v),b=m(`spine1`,h(0,r+.005,g+(_-g)*.3),y),x=m(`spine2`,h(0,r+.008,g+(_-g)*.62),b),S=m(`spine3`,h(0,n+.005,_),x),C=m(`neck`,h(0,n+.03,_+t*.12),S),w=m(`head`,h(0,n+.055,_+t*.23),C);m(`jaw`,h(0,n+.035,_+t*.26),w),f&&(m(`ear_L`,h(s*.35,n+.085,_+t*.24),w),m(`ear_R`,h(-s*.35,n+.085,_+t*.24),w));for(let[e,t]of[[`L`,s*.42],[`R`,-s*.42]]){let i=m(`shoulder_`+e,h(t*.8,n-.005,_-.01),S),a=m(`upperarm_`+e,h(t,n-.02,_),i),o=m(`forearm_`+e,h(t,n*.52,_-.012),a);m(`hand_`+e,h(t,n*.13,_+.004),o);let s=m(`thigh_`+e,h(t,r-.012,g),y),c=m(`shin_`+e,h(t,r*.55,g+.035),s),l=m(`foot_`+e,h(t,r*.2,g-.02),c);m(`toe_`+e,h(t,.012,g+.012),l)}let T=y;for(let e=1;e<=a;e++){let t=e/a;T=m(`tail`+e,h(0,r-.005-Math.sin(t*1.4)*r*.25,g-.02-i*(e-1)/a),T)}let E=Object.values(p),D=new Map(E.map((e,t)=>[e,t])),O=[],ee=e=>/hand|forearm|foot|toe|shin/.test(e)?l:/tail/.test(e)?u:c,k=e=>/spine|pelvis/.test(e)?s*.52:/neck/.test(e)?s*.4:/head/.test(e)?s*.42:/jaw/.test(e)?s*.2:/tail/.test(e)?s*.3:/ear/.test(e)?s*.12:/upperarm|thigh/.test(e)?s*.24:s*.16,te=new U;for(let e of E){if(e.name===`root`||/shoulder/.test(e.name))continue;let r=e.userData.world,s=e.children.find(e=>e.isBone)?.userData.world;if(e.name===`head`&&(s=h(0,n+.035,_+t*.23+o)),e.name===`jaw`&&(s=h(0,n+.03,_+t*.23+o*.75)),/ear/.test(e.name)&&(s=r.clone().add(h(Math.sign(r.x)*.006,.03,-.004))),/toe/.test(e.name)&&(s=r.clone().add(h(0,-.01,.025))),/hand/.test(e.name)&&(s=r.clone().add(h(0,-.012,.03))),/tail/.test(e.name)&&!s&&(s=r.clone().add(h(0,.005,-i/a))),!s)continue;let c=r.distanceTo(s),l=new ha(k(e.name),Math.max(.001,c),4,10);l.translate(0,c/2,0);let u=s.clone().sub(r).normalize();l.applyQuaternion(new Nt().setFromUnitVectors(yp.Y,u)),/head/.test(e.name)&&l.scale(1,.95,1),l.translate(r.x,r.y,r.z);let f=l.attributes.position.count,p=new Uint16Array(f*4),m=new Float32Array(f*4),g=new Float32Array(f*3);te.setHex(ee(e.name));for(let t=0;t<f;t++){p[t*4]=D.get(e),m[t*4]=1;let r=te,i=l.attributes.position.getY(t),a=l.attributes.position.getZ(t);d!=null&&/neck|spine3/.test(e.name)&&i<n+.02&&a>_-.03&&(r=new U(d)),g[t*3]=r.r,g[t*3+1]=r.g,g[t*3+2]=r.b}l.setAttribute(`skinIndex`,new Cr(p,4)),l.setAttribute(`skinWeight`,new Cr(m,4)),l.setAttribute(`color`,new Cr(g,3)),O.push(l.toNonIndexed())}let ne=0;for(let e of O)ne+=e.attributes.position.count;let re=new Rr;for(let[e,t]of[[`position`,3],[`normal`,3],[`skinIndex`,4],[`skinWeight`,4],[`color`,3]]){let n=new(e===`skinIndex`?Uint16Array:Float32Array)(ne*t),r=0;for(let t of O)n.set(t.attributes[e].array,r),r+=t.attributes[e].array.length;re.setAttribute(e,new Cr(n,t))}let A=new Ci(re,new Na({vertexColors:!0,roughness:.85}));A.add(v),A.updateMatrixWorld(!0),A.bind(new Oi(E)),A.castShadow=!0,A.frustumCulled=!1;for(let e of[1,-1]){let t=new di(new Sa(s*.075,8,6),new Na({color:328965,roughness:.1}));t.position.set(e*s*.22,.012,o*.45),w.add(t)}let ie=new An;return ie.add(A),ie.userData.placeholder=!0,ie}var Ap=K.marten,jp=new B(0,1,0),Mp=new B,Np=new B,Pp=new B,Fp=new H,Ip=new Nt;function Lp(e,t=new B){return t.set(-Math.sin(e),0,-Math.cos(e))}function Rp(e,t){return Math.atan2(-e,-t)}var zp=class{constructor(e){this.world=e,this.position=new B,this.velocity=new B,this.heading=0,this.state=`ground`,this.stamina=1,this.crouch=0,this.crouching=!1,this.sniffing=!1,this.standing=0,this.charge=0,this.charging=!1,this.cooldown=0,this.pouncing=!1,this.speed=0,this.activity=`rest`,this.noise=0,this.exposure=1,this.eatTarget=null,this.eatTimer=0,this.carry=null,this.climb=null,this.limb=null,this.headWorld=new B,this.groundNormal=new B(0,1,0),this.distance=0,this.deadTimer=0,this.deathCause=null,this.model=null,this.anim=null,this.prompt=``,this._segs=[],this.inWater=!1,this.lastHit=0}async load(){let e=await this.world.lib.loadCreature(`marten.glb`),t;e?(t=Id(e.scene),t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1),e.isMesh&&e.material&&(e.material=e.material.clone(),e.material.map&&(e.material.map.anisotropy=4))})):t=kp({}),this.model=new An,this.model.add(t),this.world.scene.add(this.model),this.anim=new Cp(t,bp.marten),e&&(this.furLayers=Op(t,{shells:12,length:.013,density:95,droop:.3})),this.headBone=this.anim.bones.head?.bone||null,this.placeholder=!e}spawn(e,t,n=0){let r=this.world.terrain;this.position.set(e,r.heightAt(e,t),t),this.velocity.set(0,0,0),this.heading=n,this.state=`ground`,this.deathCause=null,this.deadTimer=0,this.stamina=1}get climbing(){return this.state===`climb`||this.state===`limb`}get alive(){return this.state!==`dead`}get heightAboveGround(){return this.position.y-this.world.terrain.heightAt(this.position.x,this.position.z)}kill(e){this.state!==`dead`&&(this.state=`dead`,this.deathCause=e,this.velocity.set(0,0,0),this.climb=this.limb=null,this.world.audio?.sfx(`death`,this.position))}update(e,t,n,r){let{terrain:i,veg:a}=this.world,o=this.world.energy;if(this.prompt=``,this.cooldown=Math.max(0,this.cooldown-e),this.state===`dead`){this.deadTimer+=e,this._animate(e,{dead:!0,speed:0}),this._placeModel(e);return}let s=(t.down(`KeyW`)||t.down(`ArrowUp`)?1:0)-(t.down(`KeyS`)||t.down(`ArrowDown`)?1:0),c=(t.down(`KeyD`)||t.down(`ArrowRight`)?1:0)-(t.down(`KeyA`)||t.down(`ArrowLeft`)?1:0),l=t.down(`ShiftLeft`)||t.down(`ShiftRight`);(t.hit(`KeyC`)||t.hit(`ControlLeft`))&&(this.crouching=!this.crouching),this.walkMode=t.hit(`KeyZ`)?!this.walkMode:this.walkMode,this.sniffing=(t.down(`KeyQ`)||t.mouse.right)&&this.state===`ground`;let u=t.down(`KeyF`)&&this.state===`ground`&&s===0&&c===0;if(this.standing=xd(this.standing,+!!u,8,e),this.state===`eat`?this._updateEat(e,t,s,c,r):this.state===`climb`?this._updateClimb(e,t,n,s,c):this.state===`limb`?this._updateLimb(e,t,n,s,c):this.state===`air`?this._updateAir(e,r):this._updateGround(e,t,n,s,c,l,r),(this.state===`ground`||this.state===`limb`)&&this.cooldown<=0&&!this.carry)t.mouse.leftPressed&&(this.charging=!0,this.charge=0),this.charging&&t.mouse.left&&(this.charge=Math.min(1,this.charge+e/Ap.chargeTime)),this.charging&&(t.mouse.leftReleased||!t.mouse.left)&&(this.charging=!1,this._pounce(n));else if(this.state===`climb`&&t.mouse.leftPressed&&!this.carry){let e=this.world.prey.tryCatch(this.headWorld,Ap.biteRadius+.2,this.position);this.world.audio?.sfx(`pounce`,this.position,{v:.5}),e&&(this.carry=e,this.world.audio?.sfx(`catch`,this.position),r.onCatch?.(e))}else t.mouse.left||(this.charging=!1);this.stamina=this.activity===`sprint`?Math.max(0,this.stamina-e/Ap.staminaSprintSec):Math.min(1,this.stamina+e/Ap.staminaRegenSec*(this.activity===`rest`?1.4:1)*(.4+.6*o.frac));let d=i.habitatAt(this.position.x,this.position.z),f=this.state===`ground`&&i.isSand(d)&&this.speed>.5;o.update(e,this.activity,(f?K.energy.softSandCost:1)*(1+(r.rain||0)*.15),r.gameHours),o.dead&&this.kill(`starvation`);let p={sprint:1,trot:.45,walk:.18,crouch:.06,climb:.3,swim:.5,eat:.12,sniff:.05,rest:0,air:.5};this.noise=p[this.activity]??.2;let m=this.climbing?.55:i.concealmentAt(this.position.x,this.position.z),h=this.activity===`sprint`?1.25:this.activity===`rest`||this.activity===`eat`?.55:this.activity===`crouch`?.45:.85;this.exposure=J((1-m*(this.crouching?1.08:1))*h*(1+this.standing*.6),.02,1.2),this._animate(e,null),this._placeModel(e),this._updateHead()}_updateGround(e,t,n,r,i,a,o){let{terrain:s,veg:c,energy:l}=this.world,u=n.firstPerson,d=n.forward,f=n.right,p=Mp.set(0,0,0).addScaledVector(d,r).addScaledVector(f,i),m=p.lengthSq()>.01;m&&p.normalize();let h=this.crouching||this.charging;this.crouch=xd(this.crouch,+!!h,10,e);let g=Ap.trot,_=`trot`;this.walkMode&&(g=Ap.walk,_=`walk`),a&&this.stamina>.05&&l.canSprint&&!h&&(g=Ap.sprint,_=`sprint`),h&&(g=Ap.crouch,_=`crouch`),this.sniffing&&(g*=K.senses.slowFactor,_=`sniff`),this.standing>.3&&(g=0),s.habitatAt(this.position.x,this.position.z);let v=s.habitatInfo(this.position.x,this.position.z),y=s.coverAt(this.position.x,this.position.z),b=(v.sand??1)*(1-Ap.shrubSlow*y.shrub)*(1-Ap.herbSlow*y.herb),x=s.normalAt(this.position.x,this.position.z,Np);if(this.groundNormal.lerp(x,1-Math.exp(-10*e)),m){let e=-(x.x*p.x+x.z*p.z);b*=e>0?J(1-e*1.8,.35,1):J(1-e*.4,1,1.25)}b*=l.speedFactor;let S=s.waterDepthAt(this.position.x,this.position.z);this.inWater=S>.16,this.inWater&&(g=Ap.swim,_=`swim`,b=1);let C=m?g*b:0,w=Pp.copy(p).multiplyScalar(C),T=1-Math.exp(-Ap.accel*e);this.velocity.x+=(w.x-this.velocity.x)*T,this.velocity.z+=(w.z-this.velocity.z)*T,this.velocity.y=0,u?this.heading=Cd(this.heading,n.yaw,14,e):m?this.heading=Cd(this.heading,Rp(p.x,p.z),Ap.turnRate,e):this.charging&&(this.heading=Cd(this.heading,n.yaw,10,e));let E=this.position.x+this.velocity.x*e,D=this.position.z+this.velocity.z*e,O=Np.set(this.position.x,0,this.position.z);this.position.x=E,this.position.z=D,this._collide(),this._bounds();let ee=this._groundAt(this.position.x,this.position.z,this.position.y);if(this.inWater){let t=s.waterLevelAt(this.position.x,this.position.z);this.position.y=xd(this.position.y,Math.max(ee,t-.1),10,e),s.habitatAt(this.position.x,this.position.z)===0&&S>.45&&(this.position.x-=2.2*e,this.prompt=`The surf is too strong — head back to the beach`)}else ee<this.position.y-.35?(this.state=`air`,this.velocity.y=0):this.position.y=ee;this.speed=Math.hypot(this.velocity.x,this.velocity.z),this.distance+=O.distanceTo(Mp.set(this.position.x,0,this.position.z)),this.activity=this.speed<.15?_===`sniff`?`sniff`:`rest`:_,this.inWater&&(this.activity=`swim`);let k=this._nearestClimbable(),te=this.world.prey.nearestCarcass(this.position,.75),ne=te?null:c.findFruiting(this.position.x,this.position.z,K.berries.reach);if(te)this.prompt=`E — eat ${te.name} (${Math.round(te.kJ)} kJ left)`;else if(ne){let e=Hu[c.variants[ne.vid].berryKind];this.prompt=`E — eat ${e.name.toLowerCase()} berries`}else k&&!this.inWater&&(this.prompt=`Space — climb`);t.hit(`KeyE`)&&(te?this._startEat({type:`carcass`,item:te}):ne&&this._startEat({type:`berry`,shrub:ne})),t.hit(`Space`)&&!this.inWater&&(k?this._startClimb(k):(this.state=`air`,this.velocity.y=Ap.jumpV,this.world.audio?.sfx(`hop`,this.position)))}_groundAt(e,t,n){let r=this.world.terrain.heightAt(e,t);for(let i of this.world.veg.segmentsNear(e,t,.4,this._segs)){if(i.kind!==`log`)continue;let a=wd(i.ax,i.ay,i.az,i.bx,i.by,i.bz,e,n,t),o=i.ax+(i.bx-i.ax)*a,s=i.az+(i.bz-i.az)*a,c=i.ay+(i.by-i.ay)*a,l=Math.hypot(e-o,t-s);if(l<i.r*.9){let e=c+Math.sqrt(Math.max(0,i.r*i.r-l*l));e>r&&e<n+.5&&(r=e)}}return r}_collide(){let e=this.position;for(let t of this.world.veg.segmentsNear(e.x,e.z,.6,this._segs)){if(t.kind!==`trunk`)continue;let n=Math.min(t.ay,t.by),r=Math.max(t.ay,t.by);if(e.y+.15<n||e.y>r)continue;let i=J((e.y+.1-t.ay)/(t.by-t.ay||.001),0,1),a=t.ax+(t.bx-t.ax)*i,o=t.az+(t.bz-t.az)*i,s=e.x-a,c=e.z-o,l=Math.hypot(s,c),u=t.r+.1;l<u&&l>1e-5&&(e.x=a+s/l*u,e.z=o+c/l*u)}}_bounds(){let e=this.world.terrain,t=this.position,n=e.x0+25,r=e.x0+e.worldW-25,i=e.z0+25,a=e.z0+e.worldH-25;(t.x<n||t.x>r||t.z<i||t.z>a)&&(t.x=J(t.x,n,r),t.z=J(t.z,i,a),this.prompt=`This is the edge of your home range`)}_pounce(e){let t=e.aimDirection(Mp),n=Np.set(t.x,0,t.z);n.lengthSq()<1e-4&&Lp(this.heading,n),n.normalize();let r=this.charge,i=Y(Ap.pounceRange,Ap.chargedPounceRange,r),a=i,o=.3+.12*r,s=J(t.y*a+(e.firstPerson?0:.35),-.4,1.9),c=this.aimTarget;if(c&&c.alive){let e=new B(Math.sin(c.heading),0,Math.cos(c.heading)).multiplyScalar((c.speed||0)*o*.8),t=c.center.clone().add(e),r=t.x-this.position.x,l=t.z-this.position.z,u=Math.hypot(r,l);u>.05&&n.set(r/u,0,l/u),a=J(u+.2,.6,i),s=J(t.y-this.position.y-.1,-.5,1.9)}let l=(s+.5*Ap.gravity*o*o)/o;this.velocity.set(n.x*a/o,Math.max(1.5,l),n.z*a/o),this.state===`limb`&&(this.limb=null),this.state=`air`,this.pouncing=!0,this.pounceT=0,this.pounceId=(this.pounceId||0)+1,this.pounceTarget=this.aimTarget&&this.aimTarget.alive?this.aimTarget:null,this.pounces=(this.pounces||0)+1,this.heading=Rp(n.x,n.z),this.stamina=Math.max(0,this.stamina-Ap.staminaPounce*(.6+r)),this.activity=`air`,this.world.audio?.sfx(`pounce`,this.position),this.charge=0}_updateAir(e,t){let{terrain:n}=this.world,r=this.position.y;if(this.velocity.y-=Ap.gravity*e,this.position.addScaledVector(this.velocity,e),this._collide(),this._bounds(),this.activity=`air`,this.speed=Math.hypot(this.velocity.x,this.velocity.z),this.pouncing){this.pounceT+=e;let n=this.world.prey.tryCatch(this.headWorld,Ap.biteRadius+.1,this.position,this.pounceId);n&&(this.pouncing=!1,this.carry=n,this.pounceTarget=null,this.world.audio?.sfx(`catch`,this.position),t.onCatch?.(n))}if(this.velocity.y<0)for(let e of this.world.veg.segmentsNear(this.position.x,this.position.z,.5,this._segs)){if(e.kind!==`limb`&&e.kind!==`log`)continue;let t=wd(e.ax,e.ay,e.az,e.bx,e.by,e.bz,this.position.x,this.position.y,this.position.z),n=e.ax+(e.bx-e.ax)*t,i=e.ay+(e.by-e.ay)*t,a=e.az+(e.bz-e.az)*t,o=Math.hypot(this.position.x-n,this.position.z-a),s=i+e.r;if(o<e.r+.12&&r>=s-.05&&this.position.y<=s+.02){if(e.kind===`limb`){this._enterLimb(e,t);return}this.position.y=s,this._land();return}}let i=n.heightAt(this.position.x,this.position.z);this.position.y<=i&&(this.position.y=i,this._land())}_land(){this.state=`ground`;let e=-this.velocity.y;this.velocity.y=0,this.velocity.x*=.35,this.velocity.z*=.35,this.pouncing&&(this.cooldown=Ap.pounceCooldown,this.carry||(this.lastMiss={target:this.pounceTarget,dodged:!!this.pounceTarget?.dodged&&this.pounceTarget.pounceRoll===this.pounceId}),this.pounceTarget=null),this.pouncing=!1,this.world.audio?.sfx(`land`,this.position,{v:J(e/8,.2,1)}),this.carry&&=(this._startEat({type:`carcass`,item:this.carry}),null)}_startEat(e){if(this.eatReturn=this.state===`limb`?{state:`limb`,limb:this.limb}:{state:`ground`},this.state=`eat`,this.eatTarget=e,this.eatTimer=0,this.velocity.set(0,0,0),e.type===`berry`){let t=e.shrub;this.heading=Rp(t.x-this.position.x,t.z-this.position.z)}else{let t=e.item;this.heading=Rp(t.position.x-this.position.x+1e-4,t.position.z-this.position.z)}}_updateEat(e,t,n,r,i){let{veg:a,energy:o}=this.world;this.activity=`eat`,this.speed=0;let s=this.eatTarget,c=()=>{let e=this.eatReturn||{state:`ground`};this.state=e.state,e.state===`limb`&&(this.limb=e.limb),this.eatTarget=null};if(n||r||t.hit(`KeyE`)||t.hit(`Space`))c();else if(o.room<1)c(),i.toast?.(`Full — the rest is cached for later`,`info`);else if(this.eatTimer+=e,s.type===`berry`){let e=K.berries,t=a.variants[s.shrub.vid],n=Hu[t.berryKind];if(this.prompt=`Eating ${n.name.toLowerCase()} berries… (${Math.round(a.remaining(s.shrub))} g left)`,this.eatTimer>=e.biteSec){this.eatTimer-=e.biteSec;let r=a.eatFrom(s.shrub,e.mouthfulG);if(r<=.01){c(),i.toast?.(`No ripe berries left on this shrub`,`info`);return}let l=r*n.kJPerG,u=o.gain(l);o.recordMeal(i.gameHours,t.berryKind,l-u,r,`berry`),i.onEat?.({name:n.name,kJ:l-u,berry:!0}),this.world.audio?.sfx(`chew`,this.position,{soft:!0})}}else{let t=s.item;if(!t||t.kJ<=.5){c();return}let n=t.kJ0/J(t.massG/100*K.prey.eatSecPer100g,K.prey.minEatSec,K.prey.maxEatSec),r=Math.min(t.kJ,n*e),a=o.gain(r),l=r-a;if(t.kJ-=l,t.eaten=(t.eaten||0)+l,this.prompt=`Eating ${t.name}… ${Math.round(t.kJ)} kJ left`,Math.random()<e*3&&this.world.audio?.sfx(`chew`,this.position),t.kJ<=.5||a>0){let e=t.massG*t.edible*(t.eaten/t.kJ0);o.recordMeal(i.gameHours,t.speciesId,t.eaten,e,t.type),i.onEat?.({name:t.name,kJ:t.eaten,cached:t.kJ>.5}),t.eaten=0,t.kJ<=.5?this.world.prey.removeCarcass(t):t.type===`nest`?i.toast?.(`You leave the rest of the ${t.name} in the nest (${Math.round(t.kJ)} kJ)`,`info`):(t.cached=!0,i.toast?.(`Cached the rest of the ${t.name} (${Math.round(t.kJ)} kJ)`,`info`)),c()}}}_nearestClimbable(){let e=null,t=.75,n=this.position;for(let r of this.world.veg.segmentsNear(n.x,n.z,1,this._segs)){if(r.kind!==`trunk`||r.r<.05||Math.min(r.ay,r.by)>n.y+.6||Math.max(r.ay,r.by)<n.y+.2)continue;let i=wd(r.ax,r.ay,r.az,r.bx,r.by,r.bz,n.x,n.y+.2,n.z),a=r.ax+(r.bx-r.ax)*i,o=r.az+(r.bz-r.az)*i,s=Math.hypot(n.x-a,n.z-o)-r.r;s<t&&(t=s,e={seg:r,t:i})}return e}_segBasis(e){let t=Mp.set(e.ax,e.ay,e.az),n=Np.set(e.bx,e.by,e.bz).clone().sub(t),r=n.length();n.divideScalar(r||1);let i=Math.abs(n.y)<.92?jp:new B(1,0,0),a=new B().crossVectors(i,n).normalize(),o=new B().crossVectors(n,a).normalize();return{a:t.clone(),d:n,L:r,u:a,w:o}}_startClimb(e){let t=e.seg,n=this._segBasis(t),r=new B(this.position.x-t.ax,0,this.position.z-t.az),i=Math.atan2(r.dot(n.w),r.dot(n.u));this.climb={seg:t,t:J(e.t,.02,.98),theta:i,dir:1},this.state=`climb`,this.velocity.set(0,0,0),this.world.audio?.sfx(`scrabble`,this.position)}_treeSegs(e){return this.world.veg.segmentsNear(e.x,e.z,2,[]).filter(t=>t.tree===e)}_updateClimb(e,t,n,r,i){let a=this.climb,o=a.seg,s=this._segBasis(o);this.activity=`climb`;let c=Ap.climb*this.world.energy.speedFactor;a.t+=r*c*e/Math.max(.2,s.L),a.theta+=i*c*e*.8/(o.r+.08),r&&(a.dir=r),this.speed=Math.abs(r)*c+Math.abs(i)*c*.5;let l=this._treeSegs(o.tree);if(a.t>1){let e=l.find(e=>e!==o&&e.kind===`trunk`&&Math.hypot(e.ax-o.bx,e.ay-o.by,e.az-o.bz)<.3);e?(a.seg=e,a.t=.02):(a.t=1,this.prompt=`Top of the trunk — Space to jump`)}if(a.t<0){let e=l.find(e=>e!==o&&e.kind===`trunk`&&Math.hypot(e.bx-o.ax,e.by-o.ay,e.bz-o.az)<.3);e?(a.seg=e,a.t=.98):a.t=0}let u=a.seg,d=this._segBasis(u),f=d.u.clone().multiplyScalar(Math.cos(a.theta)).addScaledVector(d.w,Math.sin(a.theta));this.position.copy(d.a).addScaledVector(d.d,a.t*d.L).addScaledVector(f,u.r+.07),this.climbBasis={d:d.d,n:f};let p=this.world.terrain.heightAt(this.position.x,this.position.z);if(this.position.y-p<.25&&r<0){this.state=`ground`,this.climb=null,this.position.addScaledVector(f,.15),this.position.y=p,this.heading=Rp(f.x,f.z),this.carry&&=(this._startEat({type:`carcass`,item:this.carry}),null);return}let m=n.forward;if(r>0){for(let e of l)if(e.kind===`limb`&&!(Math.hypot(e.ax-this.position.x,e.ay-this.position.y,e.az-this.position.z)>u.r+.45)&&new B(e.bx-e.ax,0,e.bz-e.az).normalize().dot(m)>.45){this._enterLimb(e,.04);return}}if(this.prompt=l.some(e=>e.kind===`limb`)?this.prompt||`W — climb · look along a limb to walk out on it · Space — leap`:this.prompt||`W/S — climb · A/D — circle · Space — leap off`,t.hit(`Space`)){this.state=`air`,this.climb=null;let e=f.clone().multiplyScalar(2.6);e.y=2.8;let t=n.forward.multiplyScalar(1.5);this.velocity.copy(e).add(t),this.heading=Rp(this.velocity.x,this.velocity.z),this.world.audio?.sfx(`hop`,this.position)}}_enterLimb(e,t){this.state=`limb`,this.climb=null;let n=new B(e.bx-e.ax,e.by-e.ay,e.bz-e.az).normalize();this.limb={seg:e,t,dir:1},this.heading=Rp(n.x,n.z),this.velocity.set(0,0,0),this.carry&&=(this._startEat({type:`carcass`,item:this.carry}),null)}_updateLimb(e,t,n,r,i){let a=this.limb,o=a.seg,s=this._segBasis(o),c=new B(s.d.x,0,s.d.z).normalize(),l=c.dot(n.forward)>=0?1:-1,u=Ap.limb*this.world.energy.speedFactor,d=r*l;a.t+=d*u*e/Math.max(.2,s.L),d&&(a.dir=d),this.speed=Math.abs(r)*u,this.activity=this.speed>.1?`climb`:`rest`;let f=jp.clone().addScaledVector(s.d,-jp.dot(s.d)).normalize();if(a.t<0){let e=this._treeSegs(o.tree).find(e=>e.kind===`trunk`&&Math.hypot((e.ax+e.bx)/2-o.ax,(e.az+e.bz)/2-o.az)<1.5&&Math.min(e.ay,e.by)<=o.ay+.2&&Math.max(e.ay,e.by)>=o.ay-.2);if(e){let t=wd(e.ax,e.ay,e.az,e.bx,e.by,e.bz,o.ax,o.ay,o.az),n=this._segBasis(e),r=new B(o.bx-e.ax,0,o.bz-e.az);this.climb={seg:e,t,theta:Math.atan2(r.dot(n.w),r.dot(n.u)),dir:1},this.state=`climb`,this.limb=null;return}a.t=0}if(a.t>.97&&(a.t=.97,this.prompt=`End of the limb — Space to leap`),this.position.copy(s.a).addScaledVector(s.d,a.t*s.L).addScaledVector(f,o.r+.035),this.heading=Rp(c.x*a.dir,c.z*a.dir),this.limbBasis={d:s.d.clone().multiplyScalar(a.dir),up:f},this.prompt=this.prompt||`W/S — walk the limb · Space — leap · click — pounce`,t.hit(`Space`)){this.state=`air`,this.limb=null;let e=Lp(this.heading,new B);this.velocity.set(e.x*3.2,3,e.z*3.2),this.world.audio?.sfx(`hop`,this.position)}}_animate(e){if(!this.anim)return;let t={speed:this.state===`climb`||this.state===`limb`?this.speed*1.6:this.speed,crouch:this.state===`ground`?this.crouch:0,coil:this.charging?this.charge*.8+.2:0,stretch:this.state===`air`?J(.4+this.velocity.y*-.1,0,1)*(this.pouncing?1:.6):0,eat:this.state===`eat`,sniff:this.sniffing&&this.speed<1,climb:this.state===`climb`,stand:this.standing,swim:this.inWater&&this.state===`ground`,dead:this.state===`dead`,alarm:this.world.threatLevel||0,slope:0};this.anim.update(e,t)}_placeModel(e){if(!this.model)return;let t=this.model;t.position.copy(this.position);let n,r;if(this.state===`climb`&&this.climbBasis)n=this.climbBasis.d.clone().multiplyScalar(this.climb?.dir<0?-1:1),r=this.climbBasis.n.clone();else if((this.state===`limb`||this.state===`eat`&&this.eatReturn?.state===`limb`)&&this.limbBasis)n=this.limbBasis.d.clone(),r=this.limbBasis.up.clone();else{if(n=Lp(this.heading,new B),r=jp.clone().lerp(this.groundNormal,this.state===`ground`?.7:.2).normalize(),this.state===`air`&&this.pouncing){let e=J(this.velocity.y*.08,-.5,.5);n.y=e,n.normalize()}n.addScaledVector(r,-n.dot(r)).normalize()}this.state===`dead`&&(r=new B().crossVectors(n,jp).normalize(),r.lengthSq()<.1&&r.set(1,0,0),t.position.y+=.04);let i=new B().crossVectors(r,n).normalize();Fp.makeBasis(i,r,n),Ip.setFromRotationMatrix(Fp),this._qInit?t.quaternion.slerp(Ip,1-Math.exp(-(this.state===`ground`?18:12)*e)):(t.quaternion.copy(Ip),this._qInit=!0),t.visible=!this.hideModel}_updateHead(){this.headBone?(this.model.updateMatrixWorld(!0),this.headBone.getWorldPosition(this.headWorld)):(Lp(this.heading,this.headWorld).multiplyScalar(.28).add(this.position),this.headWorld.y+=.16)}},Bp=[`spring`,`summer`],Vp={towhee:{site:`ground`,model:`nest_cup`,egg:`egg_towhee`,clutch:[3,4],eggG:3.9,seasons:[`spring`,`summer`],weight:1,display:`run`,note:`a cup of dead leaves and grass in a scrape under the shrubs`},sparrow:{site:`ground`,model:`nest_cup`,egg:`egg_sparrow`,clutch:[3,5],eggG:2.6,seasons:[`spring`,`summer`],weight:.9,display:`wing`,note:`a grass cup on the ground at a thicket edge`},ruffed_grouse:{site:`ground`,model:`nest_scrape`,egg:`egg_grouse`,clutch:[9,12],eggG:18,seasons:[`spring`],weight:.25,precocial:!0,display:`wing`,note:`a leaf-lined scrape at the foot of a tree`},pacific_wren:{site:`ground`,model:`nest_cup`,egg:`egg_wren`,clutch:[5,7],eggG:1.4,seasons:[`spring`,`summer`],weight:.4,display:`run`,note:`a mossy nest tucked into a root wad by the ground`},wrentit:{site:`shrub`,model:`nest_shrub`,egg:`egg_wrentit`,clutch:[3,4],eggG:2,seasons:[`spring`,`summer`],weight:.8,h:[.45,1],note:`a compact bark-and-cobweb cup low in a shrub`},swainsons_thrush:{site:`shrub`,model:`nest_shrub`,egg:`egg_thrush`,clutch:[3,4],eggG:3.2,seasons:[`summer`],weight:.5,h:[.5,1],note:`a mossy cup low in a shady shrub`}},Hp=4.7,Up=.85,Wp={target:4,placeMin:18,placeMax:65,keep:110,adultRange:50,begSec:[14,28]};function Gp(e,t){let n=Math.random()*.25;return t<=4?{r:.011,a:e/t*Math.PI*2+n}:t<=7?e===0?{r:0,a:n}:{r:.013,a:(e-1)/(t-1)*Math.PI*2+n}:e===0?{r:0,a:n}:e<7?{r:.031,a:(e-1)/6*Math.PI*2+n}:{r:.054,a:(e-7)/(t-7)*Math.PI*2+.3+n}}var Kp=class{constructor(e){this.prey=e,this.world=e.world,this.list=[],this.parts=null,this.timer=0}async load(){let e=await this.world.lib.loadCreature(`nests.glb`);e&&(this.parts={},e.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material&&(e.material=e.material.clone(),e.material.side=2),this.parts[e.name]=e)}))}get active(){return Bp.includes(this.prey.season)&&!!this.parts}clear(){for(let e of this.list)this._remove(e);this.list.length=0}_pickSpecies(e,t,n){let r=this.prey.season,i=0,a=[];for(let[e,t]of Object.entries(Vp)){let o=Lu[e];if(!o||!t.seasons.includes(r))continue;let s=t.weight*(o.habitat[n]||0);s>0&&(a.push([e,s]),i+=s)}let o=Math.random()*i;for(let[e,t]of a)if(o-=t,o<=0)return e;return null}_site(e,t,n){let{terrain:r,veg:i}=this.world,a=new B;if(e.site===`shrub`||e.model!==`nest_scrape`){let o=null;if(i.shrubsNear(t,n,4,e=>{e.h>.7&&(!o||Math.random()<.35)&&(o=e)}),!o)return null;let s=Math.random()*Math.PI*2;if(e.site===`shrub`){let t=o.r*(.2+Math.random()*.25);a.set(o.x+Math.cos(s)*t,0,o.z+Math.sin(s)*t),a.y=r.heightAt(a.x,a.z)+Y(e.h[0],Math.min(e.h[1],o.h*.7),Math.random())}else{let e=o.r*(.35+Math.random()*.25);a.set(o.x+Math.cos(s)*e,0,o.z+Math.sin(s)*e),a.y=r.heightAt(a.x,a.z)}return{pos:a,ref:o}}let o=null;if(i.treesNear(t,n,6,e=>{e.kind!==`snag`&&(!o||Math.random()<.3)&&(o=e)}),!o)return null;let s=Math.random()*Math.PI*2;return a.set(o.x+Math.cos(s)*.45,0,o.z+Math.sin(s)*.45),a.y=r.heightAt(a.x,a.z),{pos:a,ref:o}}place(e,t,n=4){let{terrain:r}=this.world;for(let i=0;i<8;i++){let i=e+(Math.random()-.5)*2*n,a=t+(Math.random()-.5)*2*n;if(!r.inMap(i,a,25)||r.waterDepthAt(i,a)>-.05)continue;let o=r.habitatAt(i,a),s=this._pickSpecies(i,a,o);if(!s)continue;let c=Vp[s],l=this._site(c,i,a);if(l)return this._build(Lu[s],c,l)}return null}_build(e,t,n){let r=this.prey.season===`summer`&&!t.precocial&&Math.random()<.55,i=t.clutch[0]+Math.floor(Math.random()*(t.clutch[1]-t.clutch[0]+1)),a=new An;a.add(this.parts[t.model].clone());let o=[];for(let e=0;e<i;e++){let n;if(r){n=this.parts.nestling.clone();let t=e/i*Math.PI*2;n.scale.setScalar(.55*(.9+Math.random()*.15)),n.position.set(Math.cos(t)*.012,.004,Math.sin(t)*.012),n.rotation.y=-t+Math.PI}else{n=this.parts[t.egg].clone();let{r,a}=Gp(e,i);n.position.set(Math.cos(a)*r,t.model===`nest_scrape`?-.003:t.model===`nest_shrub`?.011:.006,Math.sin(a)*r),n.rotation.set((Math.random()-.5)*.3,-a+Math.random()*.6,(Math.random()-.5)*.3)}a.add(n),o.push(n)}a.position.copy(n.pos),a.rotation.y=Math.random()*Math.PI*2,this.world.scene.add(a);let s=r?e.massG*.55:t.eggG,c=r?5:t.precocial?7:Hp,l=Math.round(i*s*c*Up),u=r?`nestlings`:`eggs`,d={sp:e,info:t,site:t.site,pos:n.pos.clone(),ref:n.ref,group:a,items:o,n:i,contents:u,adult:null,found:!1,depredated:!1,begT:Y(Wp.begSec[0],Wp.begSec[1],Math.random()),sitPos:n.pos.clone().add(new B(0,t.model===`nest_scrape`?0:.02,0))};return d.item={speciesId:e.id,name:`${e.name.replace(/ \(.*\)$/,``)} ${u}`,sp:e,massG:i*s,edible:1,kJ0:l,kJ:l,position:n.pos.clone().add(new B(0,.02,0)),model:a,type:`nest`,ageH:0,cached:!1,nest:d},this.prey.carcasses.push(d.item),this.list.push(d),d}_remove(e){this.world.scene.remove(e.group);let t=this.prey.carcasses.indexOf(e.item);t>=0&&this.prey.carcasses.splice(t,1),e.adult&&(e.adult.nest=null)}emptied(e){let t=e.nest;if(!t)return;t.depredated=!0;for(let e of t.items)t.group.remove(e);t.items.length=0;let n=this.prey.carcasses.indexOf(e);n>=0&&this.prey.carcasses.splice(n,1)}seed(e,t){if(!this.active)return null;let n=-Math.sin(t),r=-Math.cos(t);for(let t=0;t<6;t++){let t=8+Math.random()*6,i=(Math.random()-.5)*.9,a=Math.cos(i),o=Math.sin(i),s=e.position.x+(n*a-r*o)*t,c=e.position.z+(n*o+r*a)*t,l=this.place(s,c,2.5);if(l)return this._spawnAdult(l),l}return null}_spawnAdult(e){if(e.adult||e.depredated)return;let t=this.prey._spawnOne(e.sp,e.sitPos.x,e.sitPos.z,null,{});t.pos.copy(e.sitPos),t.model.position.copy(t.pos),t.perch=null,t.flight=null,t.state=`incubate`,t.nest=e,t.heading=Math.random()*Math.PI*2,e.adult=t}_syncItems(e){let t=Math.ceil(e.n*Math.max(0,e.item.kJ)/e.item.kJ0-1e-6);for(;e.items.length>t;)e.group.remove(e.items.pop())}update(e,t,n){if(!this.active){this.list.length&&this.clear();return}let r=t.position;if(this.timer-=e,this.timer<=0){this.timer=1.5;for(let e=this.list.length-1;e>=0;e--){let t=this.list[e];t.pos.distanceTo(r)>Wp.keep&&(this._remove(t),this.list.splice(e,1))}if(this.list.filter(e=>!e.depredated&&e.pos.distanceTo(r)<75).length<Wp.target){let e=Math.random()*Math.PI*2,t=Y(Wp.placeMin,Wp.placeMax,Math.sqrt(Math.random()));this.place(r.x+Math.cos(e)*t,r.z+Math.sin(e)*t,3)}}for(let i of this.list){let a=i.pos.distanceTo(r);i.depredated||(this._syncItems(i),!i.found&&t.sniffing&&a<14&&(i.found=!0,this.prey.events.push({text:`You catch the scent of a ${i.sp.name.replace(/ \(.*\)$/,``).toLowerCase()} nest — ${i.info.note}`,type:`good`})),!i.adult&&a<Wp.adultRange&&a>6&&this._spawnAdult(i),i.adult&&!this.prey.list.includes(i.adult)&&(i.adult=null),i.contents===`nestlings`&&a<35&&!n.night&&(i.begT-=e,i.begT<=0&&(i.begT=Y(Wp.begSec[0],Wp.begSec[1],Math.random()),this.world.audio?.sfx(`beg`,i.pos),this.prey.cues.push({kind:`song`,prey:{pos:i.pos,center:i.sitPos,sp:{name:`Nestlings begging`}},t:0}))))}}},qp=new B,Jp=new B,Yp=e=>Math.hypot(e.bx-e.ax,e.by-e.ay,e.bz-e.az);function Xp(e,t,n){return n.set(e.ax+(e.bx-e.ax)*t,e.ay+(e.by-e.ay)*t,e.az+(e.bz-e.az)*t)}function Zp(e,t,n,r){let i=e.bx-e.ax,a=e.by-e.ay,o=e.bz-e.az,s=i*i+a*a+o*o;return s<1e-8?0:Math.min(1,Math.max(0,((t-e.ax)*i+(n-e.ay)*a+(r-e.az)*o)/s))}var Qp=e=>Math.abs(e.by-e.ay)>.6*Yp(e);function $p(e,t){let n=null,r=1e9,i=(e.r+t.r)*.75+.06;for(let[a,o,s]of[[e,t,!1],[t,e,!0]])for(let e of[0,1]){Xp(a,e,qp);let t=Zp(o,qp.x,qp.y,qp.z),c=qp.distanceTo(Xp(o,t,Jp));c<i&&c<r&&(r=c,n=s?{ti:t,tj:e}:{ti:e,tj:t})}return n}function em(e,t){if(t._graph)return t._graph;let n=e.segmentsNear(t.x,t.z,8,[]).filter(e=>e.tree===t&&(e.kind===`trunk`||e.kind===`limb`)),r=n.length,i=n.map(()=>[]);for(let e=0;e<r;e++)for(let t=e+1;t<r;t++){let r=$p(n[e],n[t]);r&&(i[e].push({j:t,ti:r.ti,tj:r.tj}),i[t].push({j:e,ti:r.tj,tj:r.ti}))}let a=0;for(let e=1;e<r;e++)Math.min(n[e].ay,n[e].by)<Math.min(n[a].ay,n[a].by)&&(a=e);return t._graph={segs:n,adj:i,base:a,baseY:t.y,perches:null},t._graph}function tm(e,t,n){if(t===n)return[];let r=new Map([[t,null]]),i=[t];for(;i.length;){let t=i.shift();if(t===n)break;for(let n of e.adj[t])r.has(n.j)||(r.set(n.j,{i:t,e:n}),i.push(n.j))}if(!r.has(n))return null;let a=[];for(let e=n;r.get(e);){let{i:t,e:n}=r.get(e);a.unshift({j:e,ti:n.ti,tj:n.tj}),e=t}return a}function nm(e,t=40){let n=[];return e.segs.forEach((r,i)=>{for(let a of Qp(r)?[.2,.6,1]:[.3,.65,.95]){let o=Xp(r,a,new B);o.y-e.baseY<=t&&n.push({si:i,t:a,pos:o})}}),n}function rm(e){return e.perches||=e.segs.filter(t=>t.kind===`limb`||t.r<.07&&Math.max(t.ay,t.by)-e.baseY>1.2),e.perches}function im(e,t){return Xp(e,Qp(e)?.55+Math.random()*.45:.2+Math.random()*.75,t),t.y+=Qp(e)?.02:e.r+.01,t}var am=class{constructor(e,t,n,r,i=Math.random()*Math.PI*2){this.veg=e,this.tree=t,this.g=em(e,t),this.si=Math.min(n,Math.max(0,this.g.segs.length-1)),this.t=r,this.theta=i,this.goal=null,this.path=[],this.dir=1,this.moving=!1,this.spiral=0}get seg(){return this.g.segs[this.si]}setGoal(e,t){let n=tm(this.g,this.si,e);return n?(this.path=n,this.goal={si:e,t},!0):!1}step(e,t){if(this.moving=!1,!this.goal)return!0;let n=Math.max(.05,Yp(this.seg)),r=this.path.length?this.path[0].ti:this.goal.t,i=t*e/n;if(this.moving=!0,Math.abs(r-this.t)<=i){if(this.t=r,this.path.length){let e=this.path.shift();this.si=e.j,this.t=e.tj}else return this.goal=null,this.moving=!1,!0}else this.dir=Math.sign(r-this.t),this.t+=this.dir*i;return this.spiral&&Qp(this.seg)&&(this.theta+=this.spiral*e),!1}pose(e,t,n){let r=this.seg;Xp(r,this.t,e);let i=Math.max(.001,Yp(r)),a=(r.bx-r.ax)/i,o=(r.by-r.ay)/i,s=(r.bz-r.az)/i,c=this.moving?this.dir:1;if(Qp(r)){let i=Math.cos(this.theta),l=0,u=Math.sin(this.theta),d=i*a+l*o+u*s;i-=d*a,l-=d*o,u-=d*s;let f=Math.hypot(i,l,u)||1;i/=f,l/=f,u/=f,e.x+=i*(r.r+.03),e.y+=l*(r.r+.03),e.z+=u*(r.r+.03),n.set(i,l,u),t.set(a*c,o*c,s*c)}else e.y+=r.r+.02,n.set(0,1,0),t.set(a*c,0,s*c).normalize();return e}},om=K.prey;new B(0,1,0);var sm=new B,cm=new B,lm=new B,um=new B,dm=new B,fm=new B,pm=new H,mm=new B,hm=new Set([`wrentit`,`pacific_wren`]);function gm(e){return J(.06+Math.cbrt(e.massG)*.022,.07,.42)}function _m(e){return e.group===`fish`||e.archetype===`carrion`?1:J(1+(om.visScaleMax-1)*(1-(e.massG-14)/126),1,om.visScaleMax)}var vm=(e,t,n)=>{let r=J((n-e)/(t-e),0,1);return r*r*(3-2*r)};function ym(e){let t=J(e.aware+(e.looking?om.watchingAlert:0),0,1);return vm(om.dodgeFrom,om.dodgeTo,t)*om.dodgeMax}var bm=new Set([`wrentit`,`pacific_wren`]),xm=e=>/^(shorepine|spruce)/.test(e.kind),Sm={wrentit:7,towhee:9,sparrow:7,chickadee:10,stellers_jay:12,swainsons_thrush:8,varied_thrush:9,robin:8,bandtailed_pigeon:14,yr_warbler:9,bushtit:6,pacific_wren:9,gc_kinglet:8};function Cm(e,t,n=new B){let r=Math.random()*Math.PI*2,i=t?.35+Math.random()*.4:.6+Math.random()*.38,a=e.r*(t?.25+Math.random()*.4:.85*Math.sqrt(Math.max(.04,1-i*i))+.05);return n.set(e.x+Math.cos(r)*a,e.y+J(e.h*i,.3,2.8),e.z+Math.sin(r)*a)}function wm(e){let t=new An,n=gm(e),r=new Na({color:new U(e.tint||{bird:`#7a6a55`,mammal:`#6b5440`,fish:`#9aa6ad`}[e.group]||`#777`),roughness:.8}),i=new An;i.name=`root`,i.userData.bone=!0,t.add(i);let a=new An;a.name=e.group===`bird`?`body`:`spine1`,a.userData.bone=!0,a.position.y=n*.35,i.add(a);let o=new di(new Sa(n*.5,10,8),r);o.scale.set(.75,.7,1.2),o.castShadow=!0,a.add(o);let s=new An;s.name=`head`,s.userData.bone=!0,s.position.set(0,n*.18,n*.52),a.add(s);let c=new di(new Sa(n*.26,8,6),r);s.add(c);let l=new Na({color:328965,roughness:.2});for(let e of[1,-1]){let t=new di(new Sa(n*.05,6,4),l);t.position.set(e*n*.15,n*.06,n*.12),s.add(t)}if(e.group===`bird`){let e=new di(new va(n*.06,n*.2,5),new Na({color:2763306}));e.rotation.x=Math.PI/2,e.position.z=n*.28,s.add(e);for(let[e,t]of[[`wing_L`,1],[`wing_R`,-1]]){let i=new An;i.name=e,i.userData.bone=!0,i.position.set(t*n*.3,n*.12,0),a.add(i);let o=new di(new ma(n*.7,n*.04,n*.6),r);o.position.x=t*n*.3,i.add(o)}let t=new An;t.name=`tail`,t.userData.bone=!0,t.position.z=-n*.5,a.add(t);let i=new di(new ma(n*.35,n*.03,n*.6),r);i.position.z=-n*.3,t.add(i)}else if(e.group===`mammal`){let t=new An;t.name=`tail1`,t.userData.bone=!0,t.position.z=-n*.55,a.add(t);let i=e.id===`brush_rabbit`?.2:e.archetype===`climber`?1.1:.7,o=new di(new _a(n*.05*(e.archetype===`climber`?2.5:1),n*.03,n*i,5),r);o.rotation.x=Math.PI/2,o.position.z=-n*i/2,t.add(o);for(let t of[1,-1]){let i=new di(new Sa(n*(e.id===`brush_rabbit`?.12:.08),6,4),r);i.scale.y=e.id===`brush_rabbit`?2.2:1,i.position.set(t*n*.12,n*.2,0),s.add(i)}}return t.userData.placeholder=!0,t}var Tm=class e{constructor(t,n,r,i,a,o){this.sp=t,this.model=n,this.mgr=o,this.pos=new B(r,i,a),this.vel=new B,this.speed=0,this.heading=Math.random()*Math.PI*2,this.state=`idle`,this.timer=Math.random()*2,this.aware=0,this.alive=!0,this.size=gm(t)*_m(t),this.looking=!1,this.vigT=Math.random()*3,this.pounceRoll=-1,this.dodged=!1,this.phase=Math.random(),this.drv=new xp(n),this.flight=null,this.perch=null,this.home=null,this.tired=0,this.id=e._id=(e._id||0)+1,this.alarm=0,this.songT=1.5+Math.random()*7,this.rustleT=Math.random(),this.singing=0,this.trail=[],this.trailT=0,this.flash=0,this.flock=null,this.walker=null}get center(){return sm.copy(this.pos).add(cm.set(0,this.size*.35,0))}},Em=class{constructor(e){this.world=e,this.list=[],this.carcasses=[],this.templates=new Map,this.spawnTimer=0,this.carrionTimer=5,this.season=`fall`,this.diff=K.difficulty.normal,this.events=[],this.cues=[],this.lastSong=new Map,this.clock=0,this.nests=new Kp(this),this.flocks=[],this.flockId=0}async load(){let e=[...new Set(zu.map(e=>e.model))];await Promise.all([...e.map(async e=>{let t=await this.world.lib.loadCreature(e+`.glb`);this.templates.set(e,t)}),this.nests.load()])}_makeModel(e){let t=this.templates.get(e.model),n;t?(n=Id(t.scene),n.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.frustumCulled=!1,e.tint&&(t.material=t.material.clone(),t.material.color.lerp(new U(e.tint),.55)))}),n.scale.setScalar((e.scale||1)*_m(e))):n=wm(e);let r=new An;return r.add(n),this.world.scene.add(r),r}_speciesWeights(e,t,n,r,i){[`spring`,`summer`,`fall`,`winter`].indexOf(this.season);let a=[];for(let e of zu){if(e.archetype===`carrion`)continue;let t=Ru(e,this.season)*e.habitat[n];if(t<=0)continue;let o=e.activity;t*=r?o===`night`?2:o===`dusk`?1.4:o===`any`?1:.06:o===`night`?.25:1,i&&e.berryVisitor&&(t*=1+e.berryVisitor/8),e.rare&&(t*=.4),a.push([e,t])}return a}_trySpawn(e,t,n={}){let{terrain:r,veg:i}=this.world,a=n.rMin??om.spawnMin,o=n.rMax??om.spawnMax,s=t.viewYaw==null?null:Math.atan2(-Math.cos(t.viewYaw),-Math.sin(t.viewYaw)),c=s!=null&&Math.random()<(n.viewBias??om.viewBias),l,u;c?(l=s+(Math.random()-.5)*1.9,u=Y(n.start?a:Math.max(a,om.viewMin),o,Math.random())):(l=Math.random()*Math.PI*2,u=Y(a,o,Math.sqrt(Math.random())),!n.start&&s!=null&&u<om.viewMin&&Math.abs(Sd(l-s))<1&&(l+=Math.PI));let d=e.position.x+Math.cos(l)*u,f=e.position.z+Math.sin(l)*u;if(!r.inMap(d,f,20))return;let p=r.habitatAt(d,f),m=Wu[p];if(!m||Math.random()>(m.preyDensity||0)||r.waterDepthAt(d,f)>.05)return;let h=i.findFruiting(d,f,3.5),g=this._speciesWeights(d,f,p,t.night,!!h),_=0;for(let[,e]of g)_+=e;if(_<=0)return;let v=Math.random()*_,y=null;for(let[e,t]of g)if(v-=t,v<=0){y=e;break}if(!y)return;let b=y.flock[0]+Math.floor(Math.random()*(y.flock[1]-y.flock[0]+1)),x=c&&!n.start&&Math.random()<om.flyInFrac,S=c&&t.cam?t.cam.position:null;if(y.flockMode&&(!y.flockSeasons||y.flockSeasons.includes(this.season))&&this.flocks.length<om.maxFlocks&&b>1&&!this.flocks.some(e=>e.sp===y)){let e=this._newFlock(y,d,f);for(let n=0;n<b&&this.list.length<om.maxActive+8;n++)this._spawnOne(y,d,f,h,{flyIn:x&&n===0,eye:S,flock:e,night:t.night})}else{y.flockMode&&(b=Math.min(b,2));for(let e=0;e<b&&this.list.length<om.maxActive+4;e++){let n=d+(Math.random()-.5)*3*(e>0),r=f+(Math.random()-.5)*3*(e>0);this._spawnOne(y,n,r,h,{flyIn:x,eye:S,night:t.night})}}}seed(e,t,n=om.startPrey){this.nests.seed(e,t.viewYaw),this._spawnAtFruit(e,t);for(let r=0;r<400&&this.list.length<n;r++)this._trySpawn(e,t,{rMin:4,rMax:26,viewBias:.7,start:!0})}spawnTutorial(e,t){let n=zu.find(e=>e.id===`redbacked_vole`);if(!n||t.viewYaw==null)return null;let{veg:r,terrain:i}=this.world,a=-Math.sin(t.viewYaw),o=-Math.cos(t.viewYaw),s=t.cam?.position,c=e.position,l=new B(c.x+a*7,0,c.z+o*7),u=new B;l.y=i.heightAt(l.x,l.z);let d=-1e9;for(let e=0;e<80;e++){let t=Math.atan2(o,a)+(Math.random()-.5)*(e<40?.8:1.4),n=5+Math.random()*5,f=c.x+Math.cos(t)*n,p=c.z+Math.sin(t)*n;if(i.waterDepthAt(f,p)>0)continue;u.set(f,i.heightAt(f,p)+.06,p);let m=9;r.shrubsNear(f,p,4,e=>{m=Math.min(m,Math.hypot(e.x-f,e.z-p)-e.r)});let h=(s?r.visibility(s,u)*2:0)-(m>3?.3:0)-(m<.2?.5:0);h>d&&(d=h,l.set(f,u.y-.06,p))}let f=this._spawnOne(n,l.x,l.z,null,{});return f.pos.copy(l),f.model.position.copy(f.pos),f.state=`idle`,f.timer=1,f.looking=!1,f.vigT=3,f.heading=Math.atan2(a,o)+(Math.random()-.5)*2,f.home={x:l.x,z:l.z},f.homeR=.7,f.tutorial=!0,f}_spawnAtFruit(e,t){let{veg:n,terrain:r}=this.world;if(t.viewYaw==null)return;let i=-Math.sin(t.viewYaw),a=-Math.cos(t.viewYaw),o=null,s=-1e9;if(n.shrubsNear(e.position.x+i*10,e.position.z+a*10,7,t=>{if(t.fruitG0==null||n.remaining(t)<t.fruitG0*.3)return;let r=t.x-e.position.x,c=t.z-e.position.z,l=Math.hypot(r,c),u=(r*i+c*a)/Math.max(l,.001);if(l<4||l>16||u<.8)return;let d=u*2-Math.abs(l-9)*.1+Math.random()*.3;d>s&&(s=d,o=t)}),!o)return;let c=r.habitatAt(o.x,o.z),l=this._speciesWeights(o.x,o.z,c,!!t.night,!0).filter(([e])=>e.group===`bird`&&e.berryVisitor),u=0;for(let[,e]of l)u+=e;let d=Math.random()*u;for(let[e,n]of l)if(d-=n,d<=0){this._spawnOne(e,o.x,o.z,o,{eye:t.cam?.position});return}}_openSpot(e,t,n,r,i=new B){let{terrain:a,veg:o}=this.world,s=-1e9;i.set(e,a.heightAt(e,t),t);let c=cm;for(let l=0;l<10;l++){let l=Math.random()*Math.PI*2,u=n*Math.sqrt(Math.random()),d=e+Math.cos(l)*u,f=t+Math.sin(l)*u;if(a.waterDepthAt(d,f)>0)continue;let p=a.heightAt(d,f),m=9;o.shrubsNear(d,f,3,e=>{m=Math.min(m,Math.hypot(e.x-d,e.z-f)-e.r*.8)});let h=o.openness(d,p,f)-(m>2.5?.25:0)-(m<0?.4:0);r&&(c.set(d,p+.08,f),h+=o.visibility(r,c)),h>s&&(s=h,i.set(d,p,f))}return i}_spawnOne(e,t,n,r,i={}){let{terrain:a,veg:o}=this.world,s=i.eye||null,c=a.heightAt(t,n),l=new Tm(e,this._makeModel(e),t,c,n,this),u=e.archetype,d=(e,t)=>s?o.visibility(s,e,t):1,f=new B,p=new B;if(i.flock){let e=i.flock,r=this._flockSpot(e,t,n,K.flocks.radius[e.mode],s);l.pos.copy(r.pos),r.perch?(l.perch={...r.perch,y:l.pos.y},l.state=`perch`):(l.state=`idle`,l.patch=e.center),l.flock=e,e.members.push(l)}else if(!(e.id===`douglas_squirrel`&&Math.random()<om.treeSquirrelFrac&&this._placeInTree(l,t,n,s))&&!(e.id===`chipmunk`&&Math.random()<om.logChipmunkFrac&&this._placeOnLog(l,t,n,s))&&!(e.id===`deer_mouse`&&i.night&&Math.random()<om.shrubMouseFrac&&this._placeInShrub(l,t,n,s))){if(u===`shrubBird`||u===`treeBird`&&r&&Math.random()<.6||u===`groundBird`&&r&&Math.random()<.35){let i=[];(!r||s)&&o.shrubsNear(t,n,s?6:4,e=>i.push(e));let a=null,c=-1,u=s?Math.min(i.length+1,14):1;for(let t=0;t<u;t++){let n=t===0&&r?r:i[Math.floor(Math.random()*i.length)];if(!n)continue;Cm(n,bm.has(e.id)&&!s,f);let o=d(f,n)+(n===r?.15:0);o>c&&(c=o,a=n,p.copy(f))}a&&(l.pos.copy(p),l.perch={kind:`shrub`,ref:a,y:l.pos.y},l.state=`perch`)}else if(u===`treeBird`){let e=this._treePerch(t,n,10,s,s?12:4);e&&(l.pos.copy(e.pos),l.perch={...e.perch,y:l.pos.y},l.state=`perch`)}else if(e.group===`bird`)this._openSpot(t,n,5,s,l.pos),l.patch=l.pos.clone();else{let e=[];o.shrubsNear(t,n,s?5:3,t=>e.push(t));let r=null,i=-1,c=l.size*.35;for(let o=0;o<(s?12:1);o++){let o=u!==`rabbit`&&e.length?e[Math.floor(Math.random()*e.length)]:null;if(o){let e=Math.random()*Math.PI*2,t=o.r*(.6+Math.random()*.5);f.set(o.x+Math.cos(e)*t,0,o.z+Math.sin(e)*t)}else f.set(t+(Math.random()-.5)*(s?6:0),0,n+(Math.random()-.5)*(s?6:0));if(a.waterDepthAt(f.x,f.z)>.02)continue;f.y=a.heightAt(f.x,f.z)+c;let l=d(f,o);l>i&&(i=l,r=o,p.copy(f),p.y-=c)}i>=0&&(l.pos.copy(p),l.home=r)}}if(i.flyIn&&l.perch){let t=l.pos.clone(),n=Math.random()*Math.PI*2,r=14+Math.random()*10,i=new B(t.x+Math.cos(n)*r,t.y+5+Math.random()*5,t.z+Math.sin(n)*r),a=i.clone().lerp(t,.5);a.y=Math.max(i.y,t.y)+1.5,l.pos.copy(i),l.flight={a:i,b:a,c:t,t:0,dur:r/e.speed,away:!1,perch:l.perch},l.state=`fly`,l.perch=null}return l.model.position.copy(l.pos),this.world.audio?.prefetch?.(e.id),this.list.push(l),l}_treePerch(e,t,n,r,i=8){let{veg:a}=this.world,o=[];a.treesNear(e,t,n,e=>{e.kind!==`snag`&&e.h>2&&o.push(e)});let s=null,c=-1e9;for(let e=0;e<i&&o.length;e++){let e=o[Math.floor(Math.random()*o.length)],t=rm(em(a,e)),n,i=null;if(t.length)i=t[Math.floor(Math.random()*t.length)],n=im(i,new B);else{let t=Math.random()*Math.PI*2,r=.8+Math.random()*1.8;n=new B(e.x+Math.cos(t)*r,e.y+J(Y(1.8,e.h*.7,Math.random()),1.5,9),e.z+Math.sin(t)*r)}let l=(r?a.visibility(r,n,e):Math.random())-Math.max(0,n.y-e.y-7)*.04;l>c&&(c=l,s={pos:n,perch:{kind:`tree`,ref:e,seg:i}})}return s}_placeInTree(e,t,n,r){let{veg:i}=this.world,a=[];i.treesNear(t,n,12,e=>{xm(e)&&e.h>4&&a.push(e)});let o=null,s=-1e9;for(let e=0;e<Math.min(10,a.length*2);e++){let e=a[Math.floor(Math.random()*a.length)],t=em(i,e),n=nm(t,9).filter(e=>e.pos.y-t.baseY>1.5);if(!n.length)continue;let c=n[Math.floor(Math.random()*n.length)],l=(r?i.visibility(r,c.pos,e):Math.random())+(t.segs[c.si].kind===`limb`?.2:0);l>s&&(s=l,o={tr:e,q:c})}return o?(e.walker=new am(i,o.tr,o.q.si,o.q.t),e.state=`tree`,e.timer=3+Math.random()*6,this._treePose(e),!0):!1}_placeOnLog(e,t,n,r){let{veg:i}=this.world,a=i.segmentsNear(t,n,8,[]).filter(e=>e.kind===`log`);if(!a.length)return!1;let o=null,s=-1e9;for(let e=0;e<6;e++){let e=a[Math.floor(Math.random()*a.length)],t=Xp(e,.2+Math.random()*.6,new B);t.y+=e.r+.01;let n=r?i.visibility(r,t):Math.random();n>s&&(s=n,o={s:e,q:t})}return e.pos.copy(o.q),e.onLog=o.s,e.heading=Math.atan2(o.s.bx-o.s.ax,o.s.bz-o.s.az)+(Math.random()<.5?0:Math.PI),e.state=`log`,e.timer=2+Math.random()*4,!0}_placeInShrub(e,t,n,r){let{veg:i}=this.world,a=[];if(i.shrubsNear(t,n,5,e=>{e.h>.8&&a.push(e)}),!a.length)return!1;let o=null,s=-1e9;for(let e=0;e<6;e++){let e=a[Math.floor(Math.random()*a.length)],t=Cm(e,!0,new B);t.y=Math.min(t.y,e.y+Math.min(1.4,e.h*.8));let n=r?i.visibility(r,t,e):Math.random();n>s&&(s=n,o={sh:e,q:t})}return e.pos.copy(o.q),e.perch={kind:`shrub`,ref:o.sh,y:o.q.y},e.state=`shrub`,e.timer=1+Math.random()*3,!0}_treePose(e){e.treeFwd=e.treeFwd||new B,e.treeUp=e.treeUp||new B,e.walker.pose(e.pos,e.treeFwd,e.treeUp)}_newFlock(e,t,n){let r=K.flocks,i={id:++this.flockId,sp:e,mode:e.flockMode,members:[],center:new B(t,this.world.terrain.heightAt(t,n),n),dir:Math.random()*Math.PI*2,moveT:Y(r.moveSec[0],r.moveSec[1],Math.random()),alarmT:0,callT:1+Math.random()*2};return this.flocks.push(i),i}_shrubSpot(e,t,n,r,i){let{veg:a}=this.world,o=[];if(a.shrubsNear(e,t,n,e=>{e.h>.5&&(!i||e.fruitG0!=null)&&o.push(e)}),!o.length&&i&&a.shrubsNear(e,t,n,e=>{e.h>.5&&o.push(e)}),!o.length)return null;let s=null,c=-1e9;for(let e=0;e<6;e++){let e=o[Math.floor(Math.random()*o.length)],t=Cm(e,!1,new B);i&&Math.random()<.5&&t.set(e.x+(Math.random()-.5)*e.r*.5,e.y+Math.min(e.h,2.8)+.03,e.z+(Math.random()-.5)*e.r*.5);let n=r?a.visibility(r,t,e):Math.random();n>c&&(c=n,s={pos:t,perch:{kind:`shrub`,ref:e}})}return s}_flockSpot(e,t,n,r,i){if(e.mode===`canopy`||e.mode===`tree`){let e=this._treePerch(t,n,r+2,i,6);if(e)return e}if(e.mode!==`ground`){let a=this._shrubSpot(t,n,r,i,e.mode===`berry`);if(a)return a}return{pos:this._openSpot(t,n,r,i,new B),perch:null}}_flyTo(e,t,n,{speed:r=6,delay:i=0,lift:a=.5,flushed:o=!1,away:s=!1}={}){let c=e.pos.clone().lerp(t,.5);c.y=Math.max(e.pos.y,t.y)+a+e.pos.distanceTo(t)*.05;let l=Math.max(.3,e.pos.distanceTo(t)/r);e.flight={a:e.pos.clone(),b:c,c:t.clone(),t:-i/l,dur:l,away:s,flushed:o,perch:n?{...n,y:t.y}:null,ground:!n},e.state=`fly`,e.perch=null,e.hopTo=null}_updateFlocks(e,t,n){let r=K.flocks,{terrain:i,audio:a}=this.world;for(let o=this.flocks.length-1;o>=0;o--){let s=this.flocks[o];if(s.members=s.members.filter(e=>e.alive&&e.state!==`gone`&&this.list.includes(e)),!s.members.length)this.flocks.splice(o,1);else{if(s.alarmT-=e,s.callT-=e,s.callT<=0){s.callT=(r.callSec[s.sp.id]??3)*(.6+Math.random()*.8);let e=s.members[Math.floor(Math.random()*s.members.length)];!n.night&&e.state!==`fly`&&e.pos.distanceTo(t.position)<60&&(a?.sfx((e.aware>.5||s.alarmT>0?`alarm:`:`call:`)+s.sp.id,e.pos),this.cues.push({kind:`song`,prey:e,t:0}),e.singing=.7)}if(s.moveT-=e,s.moveT<=0&&s.alarmT<=0){s.moveT=Y(r.moveSec[0],r.moveSec[1],Math.random()),s.dir+=(Math.random()-.5)*1.6;let e=Y(r.moveDist[0],r.moveDist[1],Math.random()),t=s.center.x+Math.cos(s.dir)*e,n=s.center.z+Math.sin(s.dir)*e;if(!i.inMap(t,n,25)||i.waterDepthAt(t,n)>0){s.dir+=Math.PI;continue}s.center.set(t,i.heightAt(t,n),n);for(let e of s.members)e.flockMove={delay:Math.random()*2.5}}}}}_flushFlock(e,t){if(e.alarmT>0)return;let n=K.flocks,r=t.position,{terrain:i,audio:a}=this.world;e.alarmT=7;let o=Math.atan2(e.center.x-r.x,e.center.z-r.z)+(Math.random()-.5)*1,s=Y(n.flushDist[0],n.flushDist[1],Math.random()),c=e.center.x+Math.sin(o)*s,l=e.center.z+Math.cos(o)*s,u=Math.random()<n.leaveChance||!i.inMap(c,l,25)||i.waterDepthAt(c,l)>0;a?.sfx(`flushBig`,e.members[0].pos),u||e.center.set(c,i.heightAt(c,l),l);let d=n.radius[e.mode],f=this.cam?.position;for(let t of e.members){t.flockMove=null;let n=Math.random()*.35;if(u){let e=new B(t.pos.x+Math.sin(o)*60,t.pos.y+18,t.pos.z+Math.cos(o)*60);this._flyTo(t,e,null,{speed:8,delay:n,away:!0,lift:2});continue}let r=this._flockSpot(e,c,l,d,f);this._flyTo(t,r.pos,r.perch,{speed:t.sp.massG>200?11:7,delay:n,flushed:!0,lift:1.2})}e.moveT=Math.max(e.moveT,12)}_thinkFlockMember(e,t,n,r,i){let a=e.flock;if(i)return this._flushFlock(a,n),!0;if(e.watch>0)return!1;if(e.flockMove&&(e.flockMove.delay-=t,e.flockMove.delay<=0)){e.flockMove=null;let t=this._flockSpot(a,a.center.x,a.center.z,K.flocks.radius[a.mode],this.cam?.position);return this._flyTo(e,t.pos,t.perch,{speed:6}),!0}if(e.state===`perch`&&e.timer<0&&Math.random()<.35){e.timer=.8+Math.random()*2.2;let t=this._flockSpot(a,a.center.x,a.center.z,K.flocks.radius[a.mode],null);if(t.perch)return this._flyTo(e,t.pos,t.perch,{speed:4,lift:.2}),!0}return e.perch||(e.patch=a.center),!1}_enterTree(e,t,n){let r=em(this.world.veg,t);return r.segs.length?(e.walker=new am(this.world.veg,t,r.base,.05,Math.atan2(e.pos.z-t.z,e.pos.x-t.x)),e.state=`tree`,e.timer=2,this._treeFlee(e,n),this._treePose(e),!0):!1}_treeFlee(e,t){let n=e.walker,r=e.sp.id===`chipmunk`?2.5:30,i=null,a=-1e9;for(let e of nm(n.g,r)){let n=e.pos.distanceTo(t)+.3*(e.pos.y-t.y)+Math.random()*.4;n>a&&(a=n,i=e)}i&&n.setGoal(i.si,i.t)&&(n.fleeing=!0)}_leapTarget(e,t){let{veg:n}=this.world,r=e.walker,i=K.arboreal,a=null,o=-1e9;return n.treesNear(e.pos.x,e.pos.z,6,s=>{s!==r.tree&&xm(s)&&em(n,s).segs.forEach((n,r)=>{for(let c of[.4,.8,1]){let l=Xp(n,c,mm),u=Math.hypot(l.x-e.pos.x,l.z-e.pos.z),d=l.y-e.pos.y;if(u>i.leapDist||u<.7||d>.8||d<-3)continue;let f=l.distanceTo(t)-u*.3;f>o&&(o=f,a={tree:s,si:r,t:c,pos:l.clone()})}})}),a}_startLeap(e,t,n){let r=e.pos.clone().lerp(n,.5);r.y=Math.max(e.pos.y,n.y)+.5,e.leapF={a:e.pos.clone(),b:r,c:n.clone(),t:0,dur:.4+e.pos.distanceTo(n)*.06,to:t},e.state=`leap`,e.walker=null,this.world.audio?.sfx(`rustle`,e.pos)}_thinkTree(e,t,n,r){let i=e.walker,a=e.sp,o=K.arboreal,{terrain:s,audio:c}=this.world,l=n.position;if(!i||!i.g.segs.length){e.state=`idle`,e.walker=null,e.pos.y=s.heightAt(e.pos.x,e.pos.z);return}let u=n.climb?.seg||n.limb?.seg,d=!!u&&u.tree===i.tree,f=e.pos.distanceTo(l),p=e.pos.y-s.heightAt(e.pos.x,e.pos.z)<1.6,m=d&&f<6||f<1.8||p&&r<3.5&&e.aware>.7;if(m)e.calmT=0,i.reGoalT=(i.reGoalT??0)-t,(!i.goal||!i.fleeing||i.reGoalT<=0)&&(this._treeFlee(e,l),i.reGoalT=1.2),i.spiral=2.5*(e.id%2?1:-1);else if(i.fleeing=!1,i.spiral=0,e.calmT=(e.calmT||0)+t,!i.goal&&e.timer<0){if(e.timer=4+Math.random()*8,e.calmT>o.calmSec&&r>15&&Math.random()<.25)i.setGoal(i.g.base,0),i.descending=!0;else{let e=nm(i.g,a.id===`chipmunk`?2.5:9),t=e[Math.floor(Math.random()*e.length)];t&&i.setGoal(t.si,t.t)}}let h=(m?1:.4)*o.speed*(a.id===`chipmunk`?.7:1),g=i.step(t,h);if(e.speed=i.moving?h:0,this._treePose(e),m&&!Qp(i.seg)&&i.t>.8&&(d||f<2.5)){let n=a.id===`douglas_squirrel`?this._leapTarget(e,l):null;if(n){this._startLeap(e,n,n.pos);return}if(e.pos.y-s.heightAt(e.pos.x,e.pos.z)<5&&Math.random()<t*2){let t=Math.atan2(e.pos.x-l.x,e.pos.z-l.z),n=e.pos.x+Math.sin(t)*2.5,r=e.pos.z+Math.cos(t)*2.5;this._startLeap(e,null,new B(n,s.heightAt(n,r),r));return}}i.descending&&g&&i.si===i.g.base?(i.descending=!1,e.state=`idle`,e.treeHome=i.tree,e.walker=null,e.pos.y=s.heightAt(e.pos.x,e.pos.z)):a.id===`douglas_squirrel`&&r<o.chatterRange&&e.aware>.3&&Math.random()<t*(m?1.2:.35)&&(c?.sfx(`chatter`,e.pos),this.cues.push({kind:`alarm`,prey:e,t:0,label:`Douglas squirrel scolding`}))}_spawnCarrion(e){let{terrain:t}=this.world;for(let n=0;n<6;n++){let n=Math.random()*Math.PI*2,r=40+Math.random()*160,i=e.position.x+Math.cos(n)*r,a=e.position.z+Math.sin(n)*r;if(!t.inMap(i,a,20))continue;let o=t.habitatAt(i,a);if(o!==q.SWASH&&o!==q.BEACH||t.waterDepthAt(i,a)>0)continue;let s=Math.random()<.55?Lu.anchovy:Lu.hake,c=s.id===`anchovy`?3+Math.floor(Math.random()*4):1;for(let e=0;e<c;e++){let e=i+(Math.random()-.5)*4,n=a+(Math.random()-.5)*4;this._addCarcass(s,new B(e,t.heightAt(e,n),n),null,`carrion`)}return}}_addCarcass(e,t,n,r=`prey`){n||=this._makeModel(e);let i=e.kJ,a={speciesId:e.id,name:e.name.replace(/ \(.*\)$/,``),sp:e,massG:e.massG,edible:e.edible,kJ0:i,kJ:i,position:t.clone(),model:n,type:r,ageH:0,cached:!1};n.position.copy(t),n.rotation.set(0,Math.random()*6.28,0);let o=n.children[0];return o&&e.group!==`fish`&&(o.rotation.z=Math.PI/2*.95),this.carcasses.push(a),a}removeCarcass(e){if(e.type===`nest`){this.nests.emptied(e);return}let t=this.carcasses.indexOf(e);t>=0&&this.carcasses.splice(t,1),this.world.scene.remove(e.model)}nearestCarcass(e,t){let n=null,r=t;for(let t of this.carcasses){if(t.carried)continue;let i=Math.hypot(t.position.x-e.x,t.position.z-e.z);i<r&&Math.abs(t.position.y-e.y)<1.2&&(r=i,n=t)}return n}aimTarget(e,t,n,r=!1){let i=e.getWorldDirection(new B),a=null,o=0;for(let s of this.list){if(!s.alive||r&&s.state===`gone`)continue;let c=s.center,l=Math.hypot(c.x-t.x,c.z-t.z);if(l>n+.4||Math.abs(c.y-t.y)>(r?4:2.2)||r&&l>4&&this.world.veg.visibility(e.position,c,s.perch?.ref)<.3)continue;let u=c.clone().sub(e.position),d=u.length();u.divideScalar(d);let f=u.dot(i);if(f<Math.cos(Mt.degToRad(9+18/Math.max(1,d))))continue;let p=f-l*.01;p>o&&(o=p,a=s)}return a}tryCatch(e,t,n,r=0){for(let i of this.list){if(!i.alive)continue;let a=i.center,o=t+i.size*.45;if(a.distanceToSquared(e)<o*o||Math.hypot(a.x-n.x,a.z-n.z)<o*.8&&Math.abs(a.y-n.y-.12)<o){if(i.pounceRoll!==r){if(i.pounceRoll=r,i.dodged=Math.random()<ym(i),i.dodged){this._dodge(i,n);continue}}else if(i.dodged)continue;return this._kill(i)}}return null}_dodge(e,t){let n=e.sp.name.replace(/ \(.*\)$/,``).toLowerCase();if(this.events.push({text:`Missed: the ${n} saw you coming and dodged!`,type:`miss`,banner:`MISSED`,sub:`the ${n} was watching`}),e.aware=1,e.sp.group===`bird`){e.flock?this._flushFlock(e.flock,{position:t}):this._takeOff(e,{position:t});return}let r=Math.atan2(e.pos.x-t.x,e.pos.z-t.z)+(Math.random()<.5?1:-1)*.9;e.pos.x+=Math.sin(r)*.45,e.pos.z+=Math.cos(r)*.45,e.heading=r,e.state!==`tree`&&e.state!==`leap`&&(e.state=`flee`,e.timer=2.5,e.tired=0)}_kill(e){e.alive=!1,e.glow?.hide();let t=this.list.indexOf(e);t>=0&&this.list.splice(t,1),this.world.audio?.sfx(e.sp.group===`bird`?`birdCatch`:`squeak`,e.pos);let n=this._addCarcass(e.sp,e.pos,e.model,`prey`);return n.carried=!0,n}update(e,t,n){let{terrain:r}=this.world;if(this.diff=n.diff||this.diff,this.spawnTimer-=e,this.spawnTimer<=0&&t.alive){this.spawnTimer=om.spawnInterval;let e=0,i=0;for(let n=0;n<8;n++){let a=n/8*Math.PI*2,o=r.habitatAt(t.position.x+Math.cos(a)*40,t.position.z+Math.sin(a)*40);e+=Wu[o]?.preyDensity||0,i++}let a=Math.round(J(e/i*om.maxActive*1.1,3,om.maxActive));this.list.length<a&&this._trySpawn(t,n)}if(this.deerTimer=(this.deerTimer??60)-e,this.deerTimer<=0&&(this.deerTimer=150+Math.random()*120,this.season===`fall`&&!this.carcasses.some(e=>e.speciesId===`deer_carrion`)&&Math.random()<.6))for(let e=0;e<20;e++){let e=Math.random()*Math.PI*2,n=60+Math.random()*110,i=t.position.x+Math.cos(e)*n,a=t.position.z+Math.sin(e)*n,o=r.habitatAt(i,a);if(!r.inMap(i,a,30)||o!==q.FOREST&&o!==q.WET_FOREST||r.waterDepthAt(i,a)>0)continue;let s=this._addCarcass(Lu.deer_carrion,new B(i,r.heightAt(i,a),a),null,`carrion`);s.kJ0=s.kJ=9e3,s.cached=!0;break}this.carrionTimer-=e,this.carrionTimer<=0&&(this.carrionTimer=35+Math.random()*40,r.oceanDistanceAt(t.position.x,t.position.z)<260&&this.carcasses.filter(e=>e.type===`carrion`).length<6&&Math.random()<.6&&this._spawnCarrion(t));let i=K.senses.hearRange;this.clock+=e,this.cam=n.cam||this.cam;for(let a=this.list.length-1;a>=0;a--){let o=this.list[a],s=o.pos.distanceTo(t.position);if(s>om.despawn)this._despawn(o,a);else{if(this._think(o,e,t,s,n),this._animate(o,e),o.sp.group===`mammal`&&o.state!==`tree`&&o.state!==`leap`&&o.state!==`shrub`&&(o.trailT-=e,o.trailT<=0)){o.trailT=.3;let e=o.trail[o.trail.length-1];(!e||Math.hypot(e.x-o.pos.x,e.z-o.pos.z)>.12)&&(o.trail.push({x:o.pos.x,y:r.heightAt(o.pos.x,o.pos.z)+.02,z:o.pos.z,t:this.clock}),o.trail.length>40&&o.trail.shift())}if(o.rustleT-=e,o.alive&&s<i&&o.speed>.08&&o.state!==`fly`&&o.rustleT<=0){o.rustleT=1.1+Math.random()*.9;let e=t.activity===`sprint`?.25:t.activity===`trot`?.7:1;Math.random()<(1.15-s/i)*e&&this.cues.push({kind:`rustle`,prey:o,t:0})}}}for(let t=this.cues.length-1;t>=0;t--)(this.cues[t].t+=e)>2&&this.cues.splice(t,1);this._updateFlocks(e,t,n),this.nests.update(e,t,n);for(let e=this.carcasses.length-1;e>=0;e--){let r=this.carcasses[e];r.type!==`nest`&&(r.carried&&(t.carry===r?(r.position.copy(t.headWorld),r.position.y-=.03,r.model.position.copy(r.position)):(r.carried=!1,r.position.y=this.world.terrain.heightAt(r.position.x,r.position.z),r.model.position.copy(r.position))),r.ageH+=n.dtHours,(r.ageH>K.energy.cacheDecayDays*24*(r.type===`carrion`?.5:1)||r.position.distanceTo(t.position)>400&&!r.cached)&&this.removeCarcass(r))}}_despawn(e,t){e.glow?.hide(),this.world.scene.remove(e.model),this.list.splice(t,1)}_flee(e,t,n){let r=e.pos.x-t.x,i=e.pos.z-t.z;return Math.atan2(r,i)}_think(e,t,n,r,i){let a=e.sp,o=a.archetype,{terrain:s,veg:c,audio:l}=this.world,u=n.position,d=(o===`treeBird`?14:o===`rabbit`?12:o===`groundBird`||o===`climber`?9:o===`shrubBird`?6:5)*(n.crouching?.6:1)*(1+n.noise*.6)*(i.night&&a.group===`bird`?.5:1);e.losT=(e.losT??Math.random()*.3)-t,e.losT<=0&&r<d+2&&(e.losT=.25+Math.random()*.15,lm.copy(e.pos),lm.y+=e.size*.5+.04,um.copy(u),um.y+=.15,e.los=this.world.veg.visibility(lm,um,e.perch?.ref));let f=r<1.5?1:e.los??1;e.vigT-=t,e.vigT<=0&&(e.looking=!e.looking,e.vigT=e.looking?Y(om.watchSec[0],om.watchSec[1],Math.random()):Y(om.feedSec[0],om.feedSec[1],Math.random())*(a.group===`bird`?.8:1)),e.aware>.6&&(e.looking=!0);let p=(e.looking?om.watchMul:om.feedMul)*(n.speed<.15?om.stillMul:1);if(n.alive&&r<d){let i=(1-r/d)*((.35+n.exposure*.6)*f*p+n.noise*.9)*this.diff.preyAware*(e.tutorial?.5:1);e.aware=Math.min(1,e.aware+i*t*2.2)}else e.aware=Math.max(0,e.aware-t*.25);let m=a.flushDist*(n.crouching?.6:n.activity===`sprint`?1.5:1)*(.7+e.aware*.6),h=n.alive&&(r<m||e.aware>.92)&&e.state!==`flee`&&e.state!==`fly`&&e.state!==`climbing`;if(e.timer-=t,o===`groundBird`||o===`shrubBird`||o===`treeBird`)return this._thinkBird(e,t,n,r,h,i);let g=()=>{e.pos.y=s.heightAt(e.pos.x,e.pos.z)};switch(e.state){case`idle`:case`forage`:case`freeze`:case`hidden`:{if(h){if(o===`rabbit`&&e.state!==`freeze`&&r>m*.55&&Math.random()<.7){e.state=`freeze`,e.timer=1+Math.random()*2;break}if(e.state=`flee`,e.timer=o===`rabbit`?3.5:2.5,e.target=null,o===`climber`){let t=null,n=18;c.treesNear(e.pos.x,e.pos.z,18,r=>{if(r.kind===`snag`||a.id===`douglas_squirrel`&&!xm(r))return;let i=Math.hypot(r.x-e.pos.x,r.z-e.pos.z);i<n&&(n=i,t=r)}),e.target=t}l?.sfx(a.id===`douglas_squirrel`?`chatter`:`rustle`,e.pos);break}if(e.state===`freeze`){e.timer<0&&(e.state=`idle`);break}e.state===`hidden`&&r>10&&e.timer<0&&(e.state=`idle`),e.timer<0&&(e.state=e.state===`forage`?`idle`:`forage`,e.timer=e.state===`forage`?.4+Math.random()*.8:.8+Math.random()*2.5,e.state===`forage`&&(e.heading+=(Math.random()-.5)*2.2),e.home&&Math.hypot(e.home.x-e.pos.x,e.home.z-e.pos.z)>(e.homeR??4)&&(e.heading=Math.atan2(e.home.x-e.pos.x,e.home.z-e.pos.z)));let n=e.state===`forage`&&!e.looking?a.speed*(e.tutorial?.12:.35):0;e.pos.x+=Math.sin(e.heading)*n*t,e.pos.z+=Math.cos(e.heading)*n*t,e.speed=n,g();break}case`flee`:{e.timer-=0;let n;if(o===`climber`&&e.target){if(n=Math.atan2(e.target.x-e.pos.x,e.target.z-e.pos.z),Math.hypot(e.target.x-e.pos.x,e.target.z-e.pos.z)<.6){if(this._enterTree(e,e.target,u))break;e.state=`climbing`,e.climbTop=e.target.y+Math.min(e.target.h*.6,a.id===`chipmunk`?2.5:7),e.timer=6;break}}else if(n=this._flee(e,u),o===`rabbit`&&(n+=Math.sin(performance.now()*.006+e.id)*.7),s.coverAt(e.pos.x+Math.sin(n)*2,e.pos.z+Math.cos(n)*2).shrub<.3){let t=null,r=12;c.shrubsNear(e.pos.x,e.pos.z,10,n=>{let i=Math.hypot(n.x-e.pos.x,n.z-e.pos.z);i<r&&i>1&&(n.x-u.x)*(n.x-e.pos.x)+(n.z-u.z)*(n.z-e.pos.z)>-4&&(r=i,t=n)}),t&&(n=Math.atan2(t.x-e.pos.x,t.z-e.pos.z))}e.heading=Cd(e.heading,n,10,t);let i=s.coverAt(e.pos.x,e.pos.z).shrub,l=a.speed*(o===`rabbit`?Y(1,.72,i):1);e.tired+=t,o===`rabbit`&&e.tired>3.2&&(l*=.55),e.pos.x+=Math.sin(e.heading)*l*t,e.pos.z+=Math.cos(e.heading)*l*t,e.speed=l,g(),e.timer<0&&r>6&&(o===`rodent`&&!e.tutorial&&Math.random()<.45?(this.events.push({text:`The ${a.name.toLowerCase()} escaped into a burrow`,type:`miss`}),e.state=`gone`):(e.state=`hidden`,e.timer=4+Math.random()*6,e.tired=0)),s.waterDepthAt(e.pos.x,e.pos.z)>.1&&(e.heading+=Math.PI);break}case`tree`:this._thinkTree(e,t,n,r);break;case`leap`:{let n=e.leapF;n.t+=t/n.dur;let r=J(n.t,0,1),i=1-r;if(e.pos.set(i*i*n.a.x+2*i*r*n.b.x+r*r*n.c.x,i*i*n.a.y+2*i*r*n.b.y+r*r*n.c.y,i*i*n.a.z+2*i*r*n.b.z+r*r*n.c.z),e.heading=Math.atan2(n.c.x-n.a.x,n.c.z-n.a.z),e.speed=4,r>=1){if(n.to)e.walker=new am(c,n.to.tree,n.to.si,n.to.t),e.state=`tree`,this._treeFlee(e,u),this._treePose(e);else{e.state=`flee`,e.timer=2.5,e.pos.y=s.heightAt(e.pos.x,e.pos.z);let t=null,n=18;c.treesNear(e.pos.x,e.pos.z,18,r=>{if(!xm(r))return;let i=Math.hypot(r.x-e.pos.x,r.z-e.pos.z);i<n&&i>2&&(n=i,t=r)}),e.target=t}}break}case`log`:if(e.speed=0,h){e.onLog=null,e.state=`flee`,e.timer=2.5,e.pos.y=s.heightAt(e.pos.x,e.pos.z);let t=null,n=18;c.treesNear(e.pos.x,e.pos.z,18,r=>{if(r.kind===`snag`)return;let i=Math.hypot(r.x-e.pos.x,r.z-e.pos.z);i<n&&(n=i,t=r)}),e.target=t,l?.sfx(`chatter`,e.pos);break}e.timer<0&&(e.timer=1.5+Math.random()*4,e.heading+=(Math.random()-.5)*1.5,Math.random()<.3&&r<30&&(l?.sfx(`chip`,e.pos),this.cues.push({kind:`song`,prey:e,t:0,label:`Townsend's chipmunk`})));break;case`shrub`:if(h){e.perch=null,e.state=`flee`,e.timer=2.5,e.pos.y=s.heightAt(e.pos.x,e.pos.z),l?.sfx(`rustle`,e.pos);break}if(e.timer<0&&e.perch){e.timer=1.5+Math.random()*3;let t=e.perch.ref;e.hopTo=Cm(t,!0,new B),e.hopTo.y=Math.min(e.hopTo.y,t.y+Math.min(1.4,t.h*.8))}e.hopTo?(e.pos.lerp(e.hopTo,1-Math.exp(-3*t)),e.speed=.6,e.pos.distanceTo(e.hopTo)<.03&&(e.hopTo=null)):e.speed=0;break;case`climbing`:{let i=e.target;if(!i){e.state=`idle`;break}e.pos.x=xd(e.pos.x,i.x+Math.sin(e.id)*.2,6,t),e.pos.z=xd(e.pos.z,i.z+Math.cos(e.id)*.2,6,t),e.pos.y=Math.min(e.climbTop,e.pos.y+2.4*t),e.speed=e.pos.y<e.climbTop?2:0,e.climbingNow=!0,n.climbing&&r<1.6&&e.timer<4&&(Math.random()<.5?(e.state=`flee`,e.timer=3,e.target=null,e.pos.y=s.heightAt(e.pos.x,e.pos.z),e.climbingNow=!1):(e.climbTop+=1.5,e.timer=6)),e.timer<0&&r>12&&(e.state=`idle`,e.pos.y=s.heightAt(e.pos.x,e.pos.z),e.climbingNow=!1),a.id===`douglas_squirrel`&&Math.random()<t*.6&&l?.sfx(`chatter`,e.pos);break}default:if(e.model.scale.multiplyScalar(1-t*4),e.model.scale.x<.05){let t=this.list.indexOf(e);t>=0&&this._despawn(e,t)}}}_thinkBird(e,t,n,r,i,a){let o=e.sp,s=o.archetype,{terrain:c,veg:l,audio:u}=this.world,d=()=>{e.pos.y=c.heightAt(e.pos.x,e.pos.z)};if(o.scolds&&e.aware>.4&&r<14&&Math.random()<t*.8&&u?.sfx(`jayAlarm`,e.pos),e.songT-=t,e.songT<=0&&!e.flock){let t=e.state===`perch`||e.state===`idle`||e.state===`forage`;e.songT=(Sm[o.id]??10)*(e.state===`perch`?1:1.6)*(.6+Math.random()*.8),t&&!a.night&&e.aware<.5&&r<60&&this.clock-(this.lastSong.get(o.id)??-99)>2.5&&(this.lastSong.set(o.id,this.clock),u?.sfx(`song:`+o.id,e.pos),this.cues.push({kind:`song`,prey:e,t:0}),e.singing=1.1)}switch(e.state){case`idle`:case`forage`:case`perch`:{if(e.flock&&this._thinkFlockMember(e,t,n,r,i))break;if(i){this._takeOff(e,n);break}if(e.state===`perch`){if(e.watch>0){e.watch-=t,e.heading=Cd(e.heading,Math.atan2(n.position.x-e.pos.x,n.position.z-e.pos.z),6,t),e.callT=(e.callT??.4)-t,e.callT<=0&&r<40&&(e.callT=1.2+Math.random()*1.6,u?.sfx(o.scolds?`jayAlarm`:`alarm:`+o.id,e.pos),this.cues.push({kind:`song`,prey:e,t:0})),e.speed=0;break}let i=e.nest;if(i&&!i.depredated&&Math.hypot(n.position.x-i.pos.x,n.position.z-i.pos.z)>10&&Math.random()<t*.2){let t=i.sitPos.clone(),n=e.pos.clone().lerp(t,.5);n.y=Math.max(e.pos.y,t.y)+.5,e.flight={a:e.pos.clone(),b:n,c:t,t:0,dur:Math.max(.4,e.pos.distanceTo(t)/5),away:!1,perch:null,toNest:!0},e.state=`fly`,e.perch=null,e.hopTo=null;break}if(e.timer<0){e.timer=.6+Math.random()*2;let t=e.perch.ref;if(e.perch.kind===`shrub`&&!e.singing)e.hopTo=Cm(t,bm.has(o.id));else if(e.perch.kind===`tree`&&e.perch.seg&&!e.singing&&Math.random()<.5){let n=rm(em(l,t)),r=null;for(let t=0;t<4&&!r;t++){let t=Math.random()<.5?e.perch.seg:n[Math.floor(Math.random()*n.length)],i=im(t,new B);i.distanceTo(e.pos)<2&&(r=i,e.perch.seg=t)}e.hopTo=r}else e.hopTo=null;if(s===`groundBird`&&!e.nest&&!(e.flock&&e.flock.mode!==`ground`)&&r>6&&Math.random()<.3){let t=this._openSpot(e.pos.x,e.pos.z,3.5,null,new B),n=e.pos.clone().lerp(t,.5);n.y=Math.max(e.pos.y,t.y)+.3,e.flight={a:e.pos.clone(),b:n,c:t,t:0,dur:Math.max(.35,e.pos.distanceTo(t)/4),away:!1,perch:null,ground:!0},e.state=`fly`,e.perch=null,e.hopTo=null;break}}e.hopTo&&(e.pos.lerp(e.hopTo,1-Math.exp(-8*t)),e.pos.distanceTo(e.hopTo)<.03&&(e.hopTo=null)),e.speed=e.hopTo?.5:0;break}e.timer<0&&(e.state=e.state===`forage`?`idle`:`forage`,e.timer=e.state===`forage`?.3+Math.random()*.5:.5+Math.random()*1.5,e.state===`forage`&&(e.heading+=(Math.random()-.5)*2.5),e.patch&&Math.hypot(e.patch.x-e.pos.x,e.patch.z-e.pos.z)>2.2&&(e.heading=Math.atan2(e.patch.x-e.pos.x,e.patch.z-e.pos.z)));let a=e.state===`forage`&&!e.looking?.6:0;e.pos.x+=Math.sin(e.heading)*a*t,e.pos.z+=Math.cos(e.heading)*a*t,e.speed=a,d();break}case`incubate`:{let t=e.nest;if(e.speed=0,!t||t.depredated){e.state=`idle`,e.nest=null;break}e.pos.copy(t.sitPos);let i=t.contents===`nestlings`?1.1:1.5;n.alive&&(r<i||r<3.5&&n.activity===`sprint`)&&this._distract(e,n);break}case`distract`:{let i=o.id===`ruffed_grouse`?2.2:1.6;e.heading=Cd(e.heading,e.distractH+Math.sin(this.clock*3+e.id)*.5,4,t),e.pos.x+=Math.sin(e.heading)*i*t,e.pos.z+=Math.cos(e.heading)*i*t,d(),e.speed=i,e.callT=(e.callT??0)-t,e.callT<=0&&(e.callT=.6+Math.random()*.5,u?.sfx(o.id===`ruffed_grouse`?`hiss`:`chip`,e.pos),this.cues.push({kind:`alarm`,prey:e,t:0})),(e.timer<0||r<.9)&&this._takeOff(e,n);break}case`fly`:{let n=e.flight;n.t+=t/n.dur;let r=J(n.t,0,1),i=n.a,a=n.b,o=n.c,s=1-r;e.pos.set(s*s*i.x+2*s*r*a.x+r*r*o.x,s*s*i.y+2*s*r*a.y+r*r*o.y,s*s*i.z+2*s*r*a.z+r*r*o.z);let c=o.x-i.x,l=o.z-i.z;if(e.heading=Math.atan2(c,l),e.speed=4,r>=1){if(n.away){e.state=`gone`;break}if(n.ground){e.state=`idle`,e.timer=.5,e.patch=n.c.clone(),e.pos.copy(n.c);break}if(n.toNest){e.state=e.nest&&!e.nest.depredated?`incubate`:`idle`;break}e.state=`perch`,e.timer=2+Math.random()*3,e.aware*=.5,e.perch=n.perch,n.flushed&&(e.watch=e.flock?2+Math.random()*2:4+Math.random()*5,e.callT=.3)}break}default:if(e.model.scale.multiplyScalar(1-t*3),e.model.scale.x<.05||e.model.position.distanceTo(n.position)>60){let t=this.list.indexOf(e);t>=0&&this._despawn(e,t)}}}_distract(e,t){let n=e.nest,r=e.sp,i=r.name.replace(/ \(.*\)$/,``).toLowerCase();n.found=!0,this.events.push({text:`A ${i} burst off its nest at your feet${n.info.display?` and is trying to lure you away from it`:``}!`,type:`good`}),!n.info.display||n.site===`shrub`?this._takeOff(e,t):(e.state=`distract`,e.timer=2.2+Math.random()*1.5,e.callT=0,e.distractH=Math.atan2(e.pos.x-t.position.x,e.pos.z-t.position.z)+(Math.random()-.5)*1.2,this.world.audio?.sfx(r.massG>200?`flushBig`:`flush`,e.pos))}_takeOff(e,t){let n=e.sp,{veg:r,audio:i}=this.world,a=n.archetype;i?.sfx(n.massG>200?`flushBig`:`flush`,e.pos);let o=t.position,s=Math.atan2(e.pos.x-o.x,e.pos.z-o.z),c=hm.has(n.id),l=c?2.5+Math.random()*3:a===`treeBird`?7+Math.random()*9:4+Math.random()*5,u=e.pos.x+Math.sin(s+(Math.random()-.5)*1.4)*l,d=e.pos.z+Math.cos(s+(Math.random()-.5)*1.4)*l,f=lm.copy(this.cam?this.cam.position:o);this.cam||(f.y+=.45);let p=new B,m=null,h=null,g=-1e9,_=0;a!==`treeBird`&&r.shrubsNear(u,d,6,e=>{if(!(_++>24||Math.hypot(e.x-o.x,e.z-o.z)<2.5||e.h<.6))for(let t=0;t<2;t++){Cm(e,!1,p),t===1&&p.set(e.x+(Math.random()-.5)*e.r*.4,e.y+Math.min(e.h,2.8)+.03,e.z+(Math.random()-.5)*e.r*.4);let n=r.visibility(f,p,e)-Math.hypot(e.x-u,e.z-d)*.04;n>g&&(g=n,m=p.clone(),h={kind:`shrub`,ref:e})}}),(!m||g<.35)&&(_=0,r.treesNear(u,d,8,e=>{if(!(_++>12||e.kind===`snag`))for(let t=0;t<2;t++){let t=Math.random()*Math.PI*2;p.set(e.x+Math.cos(t)*1.1,e.y+Math.min(1.4+Math.random()*2.5,e.h*.6),e.z+Math.sin(t)*1.1);let n=r.visibility(f,p,e)-.1-Math.hypot(e.x-u,e.z-d)*.03;n>g&&(g=n,m=p.clone(),h={kind:`tree`,ref:e})}})),h&&(h.y=m.y);let v=!m||!c&&Math.random()<(a===`treeBird`?.25:.1);v&&(m=new B(e.pos.x+Math.sin(s)*60,e.pos.y+18,e.pos.z+Math.cos(s)*60));let y=e.pos.clone().lerp(m,.5);y.y=Math.max(e.pos.y+1.2,m.y)+(c?.3:.6+l*.06);let b=c?2.5:n.massG>200?11:7;e.flight={a:e.pos.clone(),b:y,c:m,t:0,dur:Math.max(.35,e.pos.distanceTo(m)/b),away:v,perch:h,flushed:!0},e.state=`fly`,e.perch=null,e.hopTo=null}_animate(e,t){let n=e.model,r=e.drv;n.position.copy(e.pos),n.rotation.y=e.heading,e.phase+=t*(e.speed>.05?6+e.speed*3:1.2);let i=e.sp,a=Math.sin(e.phase*Math.PI*2);if(i.group===`bird`){let o=e.state===`fly`,s=o?Math.sin(e.phase*Math.PI*2*(i.massG>200?1.2:2.2)):0,c=e.state===`distract`?.7+.5*Math.sin(e.phase*9):0;r.set(`wing_L`,0,0,o?-.4-s*1.1:-c),r.set(`wing_R`,0,0,o?.4+s*1.1:c);let l=!e.looking&&(e.state===`forage`||(e.state===`idle`||e.state===`perch`)&&Math.sin(e.phase*3)>.4)?.6:0;r.set(`neck`,l*.6,0,0),e.singing=Math.max(0,e.singing-t);let u=e.singing>0?-.45:0,d=e.looking||e.aware>.4;r.set(`head`,l*.5+(d?-.25:0)+u,Math.sin(e.phase*1.3)*.4*(d?1:.4)*(u?.3:1),0),r.set(`tail`,(i.id===`wrentit`?-.5:0)+Math.max(0,Math.sin(e.phase*2.1))*-.3,0,0),r.set(`body`,o?-.2:0,0,0),!o&&e.speed>.1&&(n.position.y+=Math.abs(a)*.03),e.state===`incubate`&&(r.set(`body`,.12,0,0),r.set(`tail`,-.35,0,0))}else if(i.group===`mammal`){let t=J(e.speed/Math.max(.5,i.speed),0,1);for(let[n,i]of[[`leg_FL`,0],[`leg_FR`,.5],[`leg_HL`,.5],[`leg_HR`,0]])r.set(n,Math.sin((e.phase+i)*Math.PI*2)*.9*t,0,0);let o=Math.abs(a)*t*e.size*.15;n.position.y+=o,r.set(`spine1`,a*.12*t,0,0),r.set(`spine2`,-a*.12*t,0,0);let s=e.looking||e.aware>.3;if(r.set(`head`,s?-.28:t>.1?-.1*t:.32+Math.sin(e.phase*2.1)*.08,s?Math.sin(e.phase*1.1)*.35:0,0),r.set(`tail1`,-.2*t,Math.sin(e.phase*1.7)*.3,0),r.set(`tail2`,-.1,Math.sin(e.phase*1.7+.6)*.3,0),e.state===`freeze`&&(r.set(`spine1`,.12),r.set(`head`,.15)),e.state===`tree`&&e.treeFwd)dm.crossVectors(e.treeUp,e.treeFwd).normalize(),fm.crossVectors(dm,e.treeUp).normalize(),n.quaternion.setFromRotationMatrix(pm.makeBasis(dm,e.treeUp,fm));else if(e.state===`leap`){n.rotation.set(-.25,e.heading,0);for(let[e,t]of[[`leg_FL`,-.9],[`leg_FR`,-.9],[`leg_HL`,.9],[`leg_HR`,.9]])r.set(e,t,0,0)}else e.climbingNow?n.rotation.x=-Math.PI/2*.9:n.rotation.x=0;(i.archetype===`climber`||i.archetype===`rabbit`)&&(e.state===`idle`||e.state===`log`)&&(e.aware>.35||e.looking)?r.set(`spine1`,-.5,0,0):i.archetype===`rodent`&&e.looking&&t<.1&&r.set(`spine1`,-.22,0,0)}}},X=K.bobcat,Dm=new B(0,1,0),Om=new H,km=new Nt,Am=(e,t=new B)=>t.set(Math.sin(e),0,Math.cos(e)),jm=class{constructor(e,t){this.model=e,this.anim=t,this.pos=new B,this.heading=0,this.speed=0,this.state=`patrol`,this.aware=0,this.timer=0,this.lastSeen=new B,this.chaseTime=0,this.pounce=null,this.alertCalled=!1,this.lookYaw=0,this.normal=new B(0,1,0),this.scoldTimer=2,this.route=null,this.visitT=0,this.seenT=0,this.viewT=0}},Mm=class{constructor(e){this.world=e,this.list=[],this.template=null,this.timer=X.firstSpawnSec,this.diff=K.difficulty.normal,this.events=[],this._segs=[],this.spawnCount=0}async load(){this.template=await this.world.lib.loadCreature(`bobcat.glb`)}_makeModel(){let e;this.template?(e=Id(this.template.scene),e.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.frustumCulled=!1)})):e=kp({L:.85,Hs:.5,Hh:.53,tail:.15,nTail:3,headL:.16,width:.22,body:9140832,legs:7891026,tailC:6246980,bib:14275268});let t=new An;t.add(e),this.world.scene.add(t);let n=new Cp(e,bp.bobcat);return this.template&&Op(e,{shells:10,length:.017,density:75,droop:.4,regions:[[/^tail/,1.3],[/^(head|jaw)$/,.7],[/^ear/,.3],[/^(hand|toe|foot)/,.5],[/^(forearm|shin)/,.8],[/^neck$/,1.4]]}),{g:t,anim:n}}_spawn(e,t={}){let{terrain:n}=this.world,r=this.spawnCount===0&&t.viewYaw!=null,i=t.viewYaw==null?0:Math.atan2(-Math.cos(t.viewYaw),-Math.sin(t.viewYaw));for(let t=0;t<30;t++){let a=r&&t<20?i+(Math.random()-.5)*1.6:Math.random()<.65?(Math.random()-.5)*Math.PI:Math.random()*Math.PI*2,o=Y(X.spawnDist[0],X.spawnDist[1],Math.random()),s=e.position.x+Math.cos(a)*o,c=e.position.z+Math.sin(a)*o;if(!n.inMap(s,c,30))continue;let l=n.habitatAt(s,c);if(l===q.OCEAN||l===q.LAKE||l===q.SWASH||n.waterDepthAt(s,c)>0)continue;let u=!1;for(let t=.1;t<1&&!u;t+=5/o)u=n.waterDepthAt(s+(e.position.x-s)*t,c+(e.position.z-c)*t)>.1;if(u&&t<25)continue;let{g:d,anim:f}=this._makeModel(),p=new jm(d,f);return p.pos.set(s,n.heightAt(s,c),c),p.heading=Math.atan2(e.position.x-s,e.position.z-c)+(Math.random()-.5),p.firstPass=r,this.callSite&&performance.now()-this.callSite.at<6e4&&(p.state=`investigate`,p.lastSeen.copy(this.callSite.pos),p.timer=70,this.callSite=null),this.list.push(p),this.spawnCount++,p}return null}_planRoute(e,t,n={}){let{terrain:r}=this.world,i=t.position,a=e.pos.x-i.x,o=e.pos.z-i.z,s=Math.hypot(a,o)||1,c=a/s,l=o/s,u=Math.random()<.5?-1:1,d=i.x-l*u*X.passOffset[0],f=i.z+c*u*X.passOffset[0],p=-1e9,m=n.cam?.position,h=new B;for(let t=0;t<12;t++){let t,a;if(e.firstPass&&n.viewYaw!=null){let e=Math.atan2(-Math.cos(n.viewYaw),-Math.sin(n.viewYaw))+(Math.random()-.5)*.9,r=15+Math.random()*12;t=i.x+Math.cos(e)*r,a=i.z+Math.sin(e)*r}else{let e=Y(X.passOffset[0],X.passOffset[1],Math.random()),n=(Math.random()-.5)*16;t=i.x-l*u*e+c*n,a=i.z+c*u*e+l*n}if(!r.inMap(t,a,20)||r.waterDepthAt(t,a)>0)continue;let o=r.coverAt(t,a).shrub;if(o>X.thicket*.85)continue;h.set(t,r.heightAt(t,a)+.35,a);let s=(m?this.world.veg.visibility(m,h)*2:0)-o*2;s>p&&(p=s,d=t,f=a)}let g=i.x-c*140+(d-i.x)*.6,_=i.z-l*140+(f-i.z)*.6;e.route=[new B(d,0,f),((e,t,n)=>{let i=null,a=-1e9;for(let o=0;o<8;o++){let o=e+(Math.random()-.5)*n,s=t+(Math.random()-.5)*n;if(!r.inMap(o,s,20)||r.waterDepthAt(o,s)>0)continue;let c=r.habitatAt(o,s),l=-r.coverAt(o,s).shrub*2+(c===q.ROAD?1.5:0)+(c===q.WET_FOREST||c===q.MEADOW||c===q.SPARSE?.6:0);l>a&&(a=l,i=new B(o,0,s))}return i})(g,_,40)].filter(Boolean),e.route[0].pause=!0,e.routeFrom=i.clone(),e.wpBest=1e9,e.wpT=0}hearDistress(e){let t=!1;for(let n of this.list)[`patrol`,`pause`,`leave`,`search`].includes(n.state)&&n.pos.distanceTo(e)<X.distressRange&&(n.state=`investigate`,n.lastSeen.copy(e),n.timer=70,t=!0);return!t&&!this.list.length&&Math.random()<X.distressChance&&(this.timer=Math.min(this.timer,Y(X.distressArrive[0],X.distressArrive[1],Math.random())),this.callSite={pos:e.clone(),at:performance.now()}),t}_inThicket(e,t=.15){return!e.climbing&&this.world.veg.inThicket(e.position.x,e.position.z)>t}_inView(e,t,n){let r=e.pos.clone();r.y+=.35;let i=r.clone().project(n);return i.z>1||Math.abs(i.x)>.95||Math.abs(i.y)>.95?!1:this.world.veg.visibility(n.position,r)>.12}_visibility(e,t){let{terrain:n}=this.world,r=t.position,i=r.x-e.pos.x,a=r.z-e.pos.z,o=Math.hypot(i,a);if(o>X.sightRange||!(Math.abs(Sd(Math.atan2(i,a)-e.heading))<X.fov/2||o<6))return 0;let s=1,c=Math.min(8,Math.ceil(o/3));for(let t=1;t<c;t++){let r=t/c,o=n.coverAt(e.pos.x+i*r,e.pos.z+a*r);s*=1-Math.min(.85,o.shrub*.55+o.herb*.12)}let l=t.heightAboveGround;t.climbing&&l>1&&(s=Math.max(s,.5));let u=this.world.sky?.isNight?.85:1;return J(t.exposure*s*(1-o/X.sightRange)**.6*u,0,1.2)}update(e,t,n){let{terrain:r}=this.world;this.diff=n.diff||this.diff,this.timer-=e;let i=Math.max(1,Math.round(X.maxActive*this.diff.bobcatCount));if(this.timer<=0&&this.list.length<i&&t.alive){this._spawn(t,n);let e=(n.gameHours??12)%24,r=e>5&&e<9||e>17&&e<21?.6:n.night?.85:1.25;this.timer=Y(X.respawnSec[0],X.respawnSec[1],Math.random())*r/this.diff.bobcatCount}let a=0,o=null;for(let r=this.list.length-1;r>=0;r--){let i=this.list[r],s=i.pos.distanceTo(t.position);if(s>X.despawnDist||i.state===`leave`&&(s>140||i.leaveT>45&&s>35&&!(i.seenT>0))){this.world.scene.remove(i.model),this.list.splice(r,1);continue}this._think(i,e,t,s,n),this._move(i,e),this._animate(i,e,t),i.viewT-=e,i.seenT=Math.max(0,i.seenT-e),i.viewT<=0&&t.alive&&s<X.sightingDist&&n.cam&&(i.viewT=.2,this._inView(i,t,n.cam)&&(i.seenT=2.5)),!i.sighted&&i.seenT>0&&(i.sighted=!0,this.events.push({text:i.aware>X.stalkAt?`A bobcat — and it has seen you! Get into dense shrub or up a tree.`:`A bobcat! It hasn't seen you yet — keep still in cover, or slip away through dense shrub.`,type:`danger`}),this.world.audio?.sfx(`jayAlarm`,i.pos.clone().add(new B(2,4,-1))));let c=i.state===`chase`||i.state===`windup`||i.state===`pounce`?1:i.state===`stalk`?.6:i.aware*.5;c>a&&(a=c,o=i)}return this.threat=a,this.nearest=o,{threat:a,nearest:o}}_think(e,t,n,r,i){let{terrain:a,audio:o,prey:s}=this.world,c=n.position;if(e.timer-=t,n.alive){let i=this._visibility(e,n),a=r<X.hearRange?n.noise*(1-r/X.hearRange):0,o=!n.climbing&&n.speed<.6&&this.world.veg.inThicket(c.x,c.z)>.3,s=r<7&&!(n.climbing&&n.heightAboveGround>1.5)?(1-r/7)*(o?.35:1):0,l=(i*1.5+a*1.2+s*1.4)*X.awareRise*this.diff.bobcatAware,u=X.awareDecay*(o?3:1);e.aware=J(e.aware+(l-u)*t,0,1),l>.25&&e.lastSeen.copy(c)}else e.aware=0;if(e.scoldTimer-=t,e.scoldTimer<=0&&(e.scoldTimer=2+Math.random()*3,r<70&&a.coverAt(e.pos.x,e.pos.z).tree>.1&&Math.random()<.55)){let t=e.pos.clone().add(new B((Math.random()-.5)*12,4,(Math.random()-.5)*12)),n=Math.random()<.6;o?.sfx(n?`jayAlarm`:`scold`,t),r<55&&s?.cues.push({kind:`alarm`,bobcat:!0,prey:{pos:t,center:t,sp:{name:n?`Steller's jay alarm`:`Songbirds scolding`}},t:0})}let l=(t,n)=>{e.wantHeading=t,e.wantSpeed=n},u=(t,n)=>Math.atan2(t-e.pos.x,n-e.pos.z);switch(e.state){case`patrol`:{e.visitT+=t,(!e.route||!e.route.length)&&this._planRoute(e,n,i),e.route.length===2&&e.routeFrom&&e.routeFrom.distanceTo(c)>35&&this._planRoute(e,n,i);let a=e.route[0],o=Math.hypot(a.x-e.pos.x,a.z-e.pos.z);if(o<e.wpBest-1?(e.wpBest=o,e.wpT=0):e.wpT+=t,o<4||e.wpT>12){e.wpBest=1e9,e.wpT=0;let t=e.route.shift();if(e.firstPass=!1,!e.route.length){e.state=`leave`;break}(t.pause||Math.random()<.3)&&(e.state=`pause`,e.timer=3+Math.random()*3)}if(e.visitT>X.visitSec){e.state=`leave`;break}l(u(a.x,a.z),r>35&&Math.hypot(a.x-e.pos.x,a.z-e.pos.z)>25?X.travel:X.walk),e.aware>X.stalkAt&&(e.state=`stalk`,e.timer=20);break}case`investigate`:{let t=Math.hypot(e.lastSeen.x-e.pos.x,e.lastSeen.z-e.pos.z);l(u(e.lastSeen.x,e.lastSeen.z),t>25?X.travel:X.walk),e.sniff=Math.hypot(e.lastSeen.x-e.pos.x,e.lastSeen.z-e.pos.z)<8,(Math.hypot(e.lastSeen.x-e.pos.x,e.lastSeen.z-e.pos.z)<3||e.timer<0)&&(e.state=`search`,e.timer=10),e.aware>X.stalkAt&&(e.state=`stalk`,e.timer=20,e.sniff=!1);break}case`pause`:l(e.heading,0),e.lookAround=!0,e.timer<0&&(e.state=`patrol`,e.lookAround=!1),e.aware>X.stalkAt&&(e.state=`stalk`,e.timer=20,e.lookAround=!1);break;case`stalk`:e.hunted=!0,l(u(e.lastSeen.x,e.lastSeen.z),r>22?X.stalk*1.5:X.stalk),(e.aware>X.chaseAt&&r<X.rushDist||r<9&&e.aware>.6||r<22&&n.activity===`sprint`&&e.aware>.5)&&(e.state=`chase`,e.chaseTime=0,e.bestD=r,o?.sfx(`growl`,e.pos),this.events.push({text:`A bobcat is charging — get into dense shrubs or up a tree!`,type:`danger`})),(e.aware<.2||e.timer<0)&&(e.state=`search`,e.timer=8);break;case`chase`:{e.chaseTime+=t;let i=J(r/X.chase,0,.6),a=c.x+n.velocity.x*i,s=c.z+n.velocity.z*i;l(u(a,s),X.chase),r<e.bestD-.5&&(e.bestD=r,e.chaseTime=Math.min(e.chaseTime,X.giveUpSec*.5));let d=this._inThicket(n);if(n.climbing&&n.heightAboveGround>.8){e.state=`treewait`,e.timer=Y(X.treeWaitSec[0],X.treeWaitSec[1],Math.random());break}if(r<X.pounceRange&&!d&&n.alive){e.state=`windup`,e.swipe=!1,e.timer=X.pounceWindup,e.pounceDir=u(a,s),o?.sfx(`hiss`,e.pos);break}if(d){if(e.shrubTime=(e.shrubTime||0)+t,r<X.swipeRange&&n.alive&&Math.random()<t*1.2){e.state=`windup`,e.swipe=!0,e.timer=X.pounceWindup*.7,e.pounceDir=u(a,s),o?.sfx(`hiss`,e.pos);break}if(e.shrubTime>X.thicketGiveUpSec){e.state=`search`,e.timer=6,e.shrubTime=0,this.events.push({text:`The bobcat can't follow you into the thicket`,type:`good`});break}}else e.shrubTime=0;(e.chaseTime>X.giveUpSec||e.aware<.15)&&(e.state=`search`,e.timer=7,this.events.push({text:`The bobcat lost track of you`,type:`good`}));break}case`windup`:if(l(e.pounceDir,0),e.crouch=1,e.timer<0){e.state=`pounce`,e.timer=X.pounceTime;let t=e.swipe?Math.min(1.1,r):Math.min(4.5,r+.6);e.pounce={from:e.pos.clone(),dir:Am(e.pounceDir),dist:t,t:0},e.heading=e.pounceDir}break;case`pounce`:{let r=e.pounce;r.t=Math.min(1,r.t+t/X.pounceTime),e.pos.copy(r.from).addScaledVector(r.dir,r.dist*r.t),e.pos.y=a.heightAt(e.pos.x,e.pos.z)+Math.sin(r.t*Math.PI)*.6,e.wantSpeed=0,e.speed=r.dist/X.pounceTime;let o=e.pos.clone().addScaledVector(r.dir,.45),s=Math.hypot(o.x-c.x,o.z-c.z),l=Math.abs(o.y+.2-c.y),u=this._inThicket(n,.4);if(n.alive&&u&&s<X.killRadius&&!r.blocked&&(r.blocked=!0,this.events.push({text:`The bobcat crashed into the thicket after you!`,type:`good`})),n.alive&&!u&&l<1.2+X.treeClimbHeight*(n.climbing,0)&&s<X.killRadius&&!(n.climbing&&n.heightAboveGround>X.treeClimbHeight)){n.kill(`bobcat`),this.events.push({text:`Killed by a bobcat`,type:`death`}),e.state=`eat`,e.timer=999;break}r.t>=1&&(n.alive&&s<X.grazeRadius&&!n.climbing&&(!r.blocked||Math.random()<.3)&&(this.world.energy.kJ=Math.max(0,this.world.energy.kJ-X.grazeKJ),this.events.push({text:`The bobcat's claws grazed you! −${X.grazeKJ} kJ`,type:`danger`}),i.onHit?.()),e.state=`recover`,e.timer=.9);break}case`recover`:l(e.heading,0),e.timer<0&&(e.state=e.aware>.5?`chase`:`search`,e.timer=7,e.chaseTime=Math.max(e.chaseTime,X.giveUpSec*.6));break;case`treewait`:{let i=performance.now()*4e-4+e.pos.x;l(u(c.x+Math.cos(i)*1.5,c.z+Math.sin(i)*1.5),1.2),e.lookUp=!0,n.alive&&n.climbing&&n.heightAboveGround<X.treeClimbHeight&&r<2.2&&Math.random()<t*.8&&(e.state=`windup`,e.timer=X.pounceWindup,e.pounceDir=u(c.x,c.z)),!n.climbing&&r<10&&(e.state=`chase`,e.chaseTime=X.giveUpSec*.4,e.lookUp=!1),e.timer<0&&(e.state=`leave`,e.lookUp=!1,this.events.push({text:`The bobcat gave up and slipped away`,type:`good`}));break}case`search`:l(u(e.lastSeen.x+Math.sin(e.timer)*3,e.lastSeen.z+Math.cos(e.timer)*3),X.walk*.8),e.sniff=!0,e.aware>X.chaseAt&&e.timer<4&&(e.state=`chase`,e.chaseTime=0,e.sniff=!1),e.timer<0&&(e.state=e.hunted||Math.random()<.6?`leave`:`patrol`,e.route=null,e.sniff=!1,e.timer=0);break;case`leave`:e.exitH??=Math.atan2(e.pos.x-c.x,e.pos.z-c.z)+(Math.random()-.5)*.8,e.leaveT=(e.leaveT||0)+t,l(e.exitH,X.walk*1.2),e.aware>X.stalkAt&&(e.state=`stalk`,e.timer=20,e.exitH=null,e.leaveT=0);break;default:l(e.heading,0)}e.state!==`windup`&&(e.crouch=e.state===`stalk`?.75:0)}_move(e,t){if(e.state===`pounce`)return;let{terrain:n,veg:r}=this.world,i=n.coverAt(e.pos.x,e.pos.z),a=n.habitatAt(e.pos.x,e.pos.z),o=Math.max(X.shrubSpeedFloor,1-.95*i.shrub)*(n.isSand(a)?X.sandSpeed:1),s=(e.wantSpeed||0)*o;if(e.state===`patrol`||e.state===`investigate`||e.state===`leave`||e.state===`search`){let t=e.wantHeading??e.heading,r=t,i=-1e9;for(let a=-3;a<=3;a++){let o=t+a*.35,s=n.coverAt(e.pos.x+Math.sin(o)*2.5,e.pos.z+Math.cos(o)*2.5).shrub,c=n.coverAt(e.pos.x+Math.sin(o)*6,e.pos.z+Math.cos(o)*6).shrub,l=Math.cos(a*.35)-(s*.8+c*.5);l>i&&(i=l,r=o)}e.wantHeading=r}if(e.heading=Cd(e.heading,e.wantHeading??e.heading,e.state===`chase`?7:3.5,t),e.state===`chase`||e.state===`search`||e.state===`windup`){let n=r.inThicket(e.pos.x+Math.sin(e.heading)*1,e.pos.z+Math.cos(e.heading)*1);n>.35&&n>=r.inThicket(e.pos.x,e.pos.z)&&(s=Math.min(s,.25),e.edgeDir=e.edgeDir||(Math.random()<.5?-1:1),e.heading+=e.edgeDir*1.4*t)}let c=e.pos.x+Math.sin(e.heading)*2,l=e.pos.z+Math.cos(e.heading)*2;n.waterDepthAt(c,l)>.2&&(e.heading+=t*3,s*=.3),e.speed=xd(e.speed,s,e.state===`chase`?4:3,t),e.pos.x+=Math.sin(e.heading)*e.speed*t,e.pos.z+=Math.cos(e.heading)*e.speed*t;for(let n of r.segmentsNear(e.pos.x,e.pos.z,.8,this._segs)){if(n.kind!==`trunk`)continue;let r=e.pos.x-n.ax,i=e.pos.z-n.az,a=Math.hypot(r,i),o=n.r+.3;if(a<o&&a>1e-4){let s=r/a,c=i/a;e.pos.x=n.ax+s*o,e.pos.z=n.az+c*o;let l=-c*Math.sin(e.heading)+s*Math.cos(e.heading)>=0?1:-1;e.pos.x+=-c*l*e.speed*t,e.pos.z+=s*l*e.speed*t}}e.stuckT=(e.stuckT||0)+t,e.stuckT>2&&(e.lastPos&&e.lastPos.distanceTo(e.pos)<.4&&(e.wantSpeed||0)>.5&&e.state!==`treewait`&&(e.heading+=(Math.random()<.5?-1:1)*(.8+Math.random()),e.state===`patrol`&&(e.route=null),e.state===`leave`&&(e.exitH=e.heading)),e.stuckT=0,(e.lastPos||=new B).copy(e.pos)),e.pos.y=n.heightAt(e.pos.x,e.pos.z),n.normalAt(e.pos.x,e.pos.z,e.normal)}_animate(e,t,n){let r=e.model;r.position.copy(e.pos);let i=Am(e.heading,new B),a=Dm.clone().lerp(e.normal,.6).normalize();i.addScaledVector(a,-i.dot(a)).normalize();let o=new B().crossVectors(a,i).normalize();Om.makeBasis(o,a,i),km.setFromRotationMatrix(Om),r.quaternion.slerp(km,1-Math.exp(-10*t));let s=Math.atan2(n.position.x-e.pos.x,n.position.z-e.pos.z),c=e.aware>.25?J(Sd(s-e.heading),-1,1):null;e.anim.update(t,{speed:e.state===`pounce`?9:e.speed,crouch:e.crouch||0,stretch:e.state===`pounce`?Math.sin(e.pounce.t*Math.PI):0,coil:+(e.state===`windup`),sniff:!!e.sniff,snarl:e.state===`windup`||e.state===`pounce`,lookYaw:c??void 0,lookPitch:e.lookUp?-.6:void 0,eat:e.state===`eat`})}},Nm=K.ohv,Pm=new B(0,1,0),Fm=[{file:`ohv_sandrail.glb`,name:`dune buggy`,len:3.6,wid:1.9,wheelR:.36,speed:[12,20],color:14833439,weight:.45},{file:`ohv_atv.glb`,name:`ATV`,len:2,wid:1.2,wheelR:.3,speed:[9,15],color:2977338,weight:.3},{file:`ohv_utv.glb`,name:`side-by-side`,len:3.2,wid:1.6,wheelR:.38,speed:[10,18],color:15909424,weight:.25}],Im=new Set([q.OPEN_SAND,q.BEACH,q.SWASH,q.ROAD]);function Lm(e){let t=new An;t.name=`vehicle`;let n=new Na({color:e.color,roughness:.35,metalness:.2}),r=new Na({color:1776411,roughness:.8}),i=new di(new ma(e.wid*.8,.5,e.len*.8),n);i.position.y=e.wheelR+.35,i.castShadow=!0,i.name=`body`,t.add(i);let a=new di(new ma(e.wid*.75,.7,e.len*.45),new Na({color:3355443,wireframe:!0}));a.position.y=e.wheelR+.95,t.add(a);for(let[n,i,a]of[[`wheel_FL`,1,1],[`wheel_FR`,-1,1],[`wheel_RL`,1,-1],[`wheel_RR`,-1,-1]]){let o=new di(new _a(e.wheelR,e.wheelR,.3,12).rotateZ(Math.PI/2),r);o.position.set(i*e.wid*.5,e.wheelR,a*e.len*.36),o.name=n,o.castShadow=!0,t.add(o)}let o=new di(new ha(.22,.5,4,8),new Na({color:2767450}));o.position.set(0,e.wheelR+1,0),o.name=`rider`,t.add(o);let s=new An;s.name=`whip`,s.position.set(-e.wid*.3,e.wheelR+.5,-e.len*.42);let c=new di(new _a(.008,.012,2.1,4),r);c.position.y=1.05,s.add(c);let l=new di(new xa(.35,.22),new Na({color:16734720,emissive:5576704,side:2}));return l.position.set(.17,1.98,0),s.add(l),t.add(s),t}function Rm(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);t.clearRect(0,0,64,64);for(let e of[8,56]){for(let n=0;n<64;n+=6)t.fillStyle=`rgba(80,65,45,0.55)`,t.fillRect(e-6,n,12,3);t.fillStyle=`rgba(90,75,55,0.25)`,t.fillRect(e-7,0,14,64)}let n=new ua(e);return n.colorSpace=He,n}var zm=class{constructor(e,t){this.T=e,this.model=t,this.pos=new B,this.vy=0,this.heading=0,this.speed=0,this.target=Y(e.speed[0],e.speed[1],Math.random()),this.air=!1,this.wheels=[`wheel_FL`,`wheel_FR`,`wheel_RL`,`wheel_RR`].map(e=>t.getObjectByName(e)).filter(Boolean),this.whip=t.getObjectByName(`whip`),this.wheelSpin=0,this.trackAcc=0,this.engine=null,this.q=new Nt,this.lastWarn=0}},Bm=class{constructor(e){this.world=e,this.list=[],this.templates=[],this.diff=K.difficulty.normal,this.events=[],this.spawnTimer=3,this.trackMax=1800,this.trackIdx=0;let t=new xa(1,1).rotateX(-Math.PI/2);this.tracks=new Li(t,new Na({map:Rm(),transparent:!0,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}),this.trackMax),this.tracks.count=0,this.tracks.frustumCulled=!1,this.tracks.receiveShadow=!0,e.scene.add(this.tracks),this.pMax=900,this.pPos=new Float32Array(this.pMax*3),this.pVel=new Float32Array(this.pMax*3),this.pLife=new Float32Array(this.pMax);let n=new Rr;n.setAttribute(`position`,new Cr(this.pPos,3)),this.particles=new sa(n,new na({color:13483932,size:.12,transparent:!0,opacity:.7,depthWrite:!1})),this.particles.frustumCulled=!1,e.scene.add(this.particles),this.pIdx=0,this._m=new H}async load(){for(let e of Fm){let t=await this.world.lib.loadCreature(e.file);this.templates.push({T:e,gltf:t,merged:t?this._mergeStatic(t.scene):null})}}_mergeStatic(e){e.updateMatrixWorld(!0);let t=e=>{for(let t=e;t;t=t.parent)if(/^(wheel_|whip|rider|passenger)/.test(t.name))return!0;return!1},n=new Map,r=new An;r.name=`vehicle`,e.traverse(e=>{if(!e.isMesh||t(e))return;let r=e.geometry.clone().applyMatrix4(e.matrixWorld);for(let e of Object.keys(r.attributes))[`position`,`normal`,`uv`].includes(e)||r.deleteAttribute(e);r.attributes.uv||r.setAttribute(`uv`,new Er(new Float32Array(r.attributes.position.count*2),2));let i=r.index?r.toNonIndexed():r,a=n.get(e.material)||[];a.push(i),n.set(e.material,a)});for(let[e,t]of n){let n=Nd(t,!1);if(n){let t=new di(n,e);t.castShadow=!0,r.add(t)}}let i=[],a=e=>/^(wheel_(FL|FR|RL|RR)$|whip$|rider$|passenger$)/.test(e.name);e.traverse(e=>{if(a(e)){for(let t=e.parent;t;t=t.parent)if(a(t))return;i.push(e)}});for(let e of i){let t=e.clone(!0);e.matrixWorld.decompose(t.position,t.quaternion,t.scale),r.add(t)}return r}_drivable(e,t){let n=this.world.terrain;return n.inMap(e,t,30)?Im.has(n.habitatAt(e,t))&&n.waterDepthAt(e,t)<.05:!1}_sandAround(e){let t=0,n=0;for(let r of[Nm.sandRadius*.3,Nm.sandRadius*.65,Nm.sandRadius])for(let i=0;i<12;i++){let a=i/12*Math.PI*2+r;this._drivable(e.x+Math.cos(a)*r,e.z+Math.sin(a)*r)&&t++,n++}return t/n}_startVisit(e){let t=this._spawn(e);if(!t){this.visitT=20;return}let n=Nm.party[0]+Math.floor(Math.random()*(Nm.party[1]-Nm.party[0]+1));this.party={t:0,dur:Y(Nm.visitSec[0],Nm.visitSec[1],Math.random()),left:n-1,nextAt:2+Math.random()*3,at:t.pos.clone()}}_spawn(e,t=null){let{terrain:n}=this.world;for(let r=0;r<40;r++){let r=Math.random()*Math.PI*2,i=t?6+Math.random()*20:Y(Nm.spawnDist[0],Nm.spawnDist[1],Math.random()),a=(t||e.position).x+Math.cos(r)*i,o=(t||e.position).z+Math.sin(r)*i;if(!this._drivable(a,o))continue;let s=0;for(let e=0;e<8;e++)this._drivable(a+Math.cos(e)*15,o+Math.sin(e)*15)&&s++;if(s<6)continue;let c=Math.random(),l=this.templates[0];for(let e of this.templates)if(c-=e.T.weight,c<=0){l=e;break}let u=l.merged?l.merged.clone(!0):l.gltf?l.gltf.scene.clone(!0):Lm(l.T);u.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.frustumCulled=!1)});let d=new An;d.add(u);let f=new An,p=new $r({color:16773576}),m=new $r({color:16771504,transparent:!0,opacity:0,blending:2,depthWrite:!1,side:2});for(let e of[-1,1]){let t=new di(new Sa(.07,8,6),p);t.position.set(e*l.T.wid*.3,l.T.wheelR+.45,l.T.len*.48),f.add(t);let n=new di(new va(2.2,14,16,1,!0).translate(0,-7,0).rotateX(-Math.PI/2-.08),m);n.position.copy(t.position),f.add(n)}f.visible=!1,d.add(f),this.world.scene.add(d);let h=new zm(l.T,d);return h.lights=f,h.beamMat=m,h.pos.set(a,n.heightAt(a,o),o),h.heading=Math.random()*Math.PI*2,h.engine=this.world.audio?.engine(l.T.name),h.likesHotspot=Math.random()<.6,this.list.push(h),h}}_steer(e,t){let{terrain:n}=this.world,r=n.habitatAt(e.pos.x,e.pos.z),i=r===q.SWASH||r===q.BEACH,a=e.heading,o=-1e9;for(let t=-4;t<=4;t++){let r=e.heading+t*.22,s=-Math.abs(t)*.12;for(let t of[8,16,26]){let n=e.pos.x+Math.sin(r)*t,i=e.pos.z+Math.cos(r)*t;this._drivable(n,i)?s+=.25:s-=t<10?3:1.4}let c=e.pos.x+Math.sin(r)*20,l=e.pos.z+Math.cos(r)*20;if(s+=J((n.heightAt(c,l)-e.pos.y)*.05,-.2,.3),i&&(s+=Math.abs(Math.cos(r))*.4),e.leaving&&this._marten){let t=e.pos.x-this._marten.x,n=e.pos.z-this._marten.z;s+=Math.cos(r-Math.atan2(t,n))*.9}else if(this.hotspot&&e.likesHotspot){let t=this.hotspot.x-e.pos.x,n=this.hotspot.z-e.pos.z;Math.hypot(t,n)>12&&(s+=Math.cos(r-Math.atan2(t,n))*.55)}s+=(Math.random()-.5)*.05,s>o&&(o=s,a=r)}o<-3&&(a=e.heading+Math.PI*.7),e.heading=Cd(e.heading,a,1.6,t);let s=Math.abs(Sd(a-e.heading));e.wantSpeed=e.target*(1-J(s*.8,0,.6))}update(e,t,n){let{terrain:r,audio:i}=this.world;this.diff=n.diff||this.diff;let a=n.night;if(this._marten=t.position,this.sandT=(this.sandT??0)-e,this.sandT<=0&&(this.sandT=4,this.sandNear=this._sandAround(t.position)),this.visitT??=Y(Nm.firstVisitSec[0],Nm.firstVisitSec[1],Math.random()),this.party){let n=this.party;if(n.t+=e,n.left>0&&n.t>=n.nextAt&&this.list.length<Nm.maxActive&&(this._spawn(t,n.at)?n.left--:n.left=0,n.nextAt=n.t+2+Math.random()*4),n.t>n.dur)for(let e of this.list)e.leaving=!0;if(n.t>n.dur+75)for(let e=this.list.length-1;e>=0;e--)this._remove(this.list[e],e);n.t>n.dur&&!this.list.length&&(this.party=null,this.visitT=Math.max(40,-Math.log(1-Math.random())*Nm.visitGapSec))}else{let r=(.06+.94*J((this.sandNear??0)/.25,0,1))*(a?Nm.nightFactor:1)*this.diff.ohvCount*(n.weekendBoost||1);this.visitT-=e*r,this.visitT<=0&&t.alive&&this._startVisit(t)}if(this.hotTimer=(this.hotTimer??0)-e,this.hotTimer<=0){this.hotTimer=6+Math.random()*6;let e=r.habitatAt(t.position.x,t.position.z),n=e===q.OPEN_SAND||e===q.BEACH||e===q.SWASH;this.hotspot=n?{x:t.position.x+(Math.random()-.5)*70,z:t.position.z+(Math.random()-.5)*70}:null}let o=null;for(let a=this.list.length-1;a>=0;a--){let s=this.list[a],c=s.pos.distanceTo(t.position);if(c>Nm.despawnDist){this._remove(s,a);continue}s.air||this._steer(s,e),s.speed=xd(s.speed,s.wantSpeed??s.target,1.2,e);let l=Math.sin(s.heading),u=Math.cos(s.heading),d=r.heightAt(s.pos.x+l*2,s.pos.z+u*2)-r.heightAt(s.pos.x,s.pos.z);s.speed*=1-J(d*.06,-.02,.12)*e*4,s.pos.x,s.pos.z;let f=s.pos.y;s.pos.x+=l*s.speed*e,s.pos.z+=u*s.speed*e;let p=r.heightAt(s.pos.x,s.pos.z);if(s.air)s.vy-=9.8*e,s.pos.y+=s.vy*e,s.pos.y<=p&&(s.pos.y=p,s.air=!1,c<120&&i?.sfx(`thud`,s.pos,{v:J(-s.vy/8,.2,1)}),s.vy=0);else{let t=(p-f)/Math.max(e,.001);p<f-.12&&s.speed>9?(s.air=!0,s.vy=Math.max(0,s.lastGroundVy||0),s.pos.y=f+(s.lastGroundVy||0)*e):(s.pos.y=p,s.lastGroundVy=t)}let m=r.normalAt(s.pos.x,s.pos.z,new B,1.4),h=s.air?Pm.clone().lerp(m,.3):m,g=new B(l,0,u);g.addScaledVector(h,-g.dot(h)).normalize();let _=new B().crossVectors(h,g).normalize();this._m.makeBasis(_,h,g),s.q.setFromRotationMatrix(this._m),s.model.quaternion.slerp(s.q,1-Math.exp(-8*e)),s.model.position.copy(s.pos),s.wheelSpin+=s.speed*e/s.T.wheelR;for(let e of s.wheels)e.rotation.x=s.wheelSpin;s.whip&&(s.whip.rotation.x=-.25-Math.sin(performance.now()*.008)*.08-s.speed*.01,s.whip.rotation.z=Math.sin(performance.now()*.005+a)*.1),s.engine?.update(s.pos,s.speed,s.air);let v=this.world.sky?1-this.world.sky.daylight:0;if(s.lights&&(s.lights.visible=v>.3,s.beamMat.opacity=.12*v),!s.air&&s.speed>4){for(s.trackAcc+=s.speed*e;s.trackAcc>1.4;)s.trackAcc-=1.4,this._track(s);if(c<160)for(let e=0;e<3;e++)this._particle(s)}if(t.alive&&!(t.climbing&&t.heightAboveGround>.6)){let e=t.position.x-s.pos.x,r=t.position.z-s.pos.z,i=e*l+r*u,a=e*u-r*l;Math.abs(i)<s.T.len/2+.3&&Math.abs(a)<s.T.wid/2+.25&&Math.abs(t.position.y-s.pos.y)<1.2&&(t.kill(`ohv`),this.events.push({text:`Run over by a ${s.T.name}`,type:`death`})),-(e*l+r*u),c<45&&i>0&&Math.abs(a)<6&&(o=s),c<8&&performance.now()-s.lastWarn>4e3&&(s.lastWarn=performance.now(),n.onNearMiss?.(s))}}this.warning=o,this._updateParticles(e)}_track(e){let t=this.trackIdx++%this.trackMax,n=new B(e.T.wid*1.05,1,1.5),r=new Nt().setFromAxisAngle(Pm,e.heading),i=this.world.terrain.normalAt(e.pos.x,e.pos.z),a=new Nt().setFromUnitVectors(Pm,i);r.premultiply(a),this._m.compose(new B(e.pos.x,this.world.terrain.heightAt(e.pos.x,e.pos.z)+.03,e.pos.z),r,n),this.tracks.setMatrixAt(t,this._m),this.tracks.count=Math.min(this.trackMax,this.trackIdx),this.tracks.instanceMatrix.needsUpdate=!0}_particle(e){let t=this.pIdx++%this.pMax,n=-e.T.len*.45,r=(Math.random()<.5?-1:1)*e.T.wid*.45,i=Math.sin(e.heading),a=Math.cos(e.heading);this.pPos[t*3]=e.pos.x+i*n+a*r,this.pPos[t*3+1]=e.pos.y+.2,this.pPos[t*3+2]=e.pos.z+a*n-i*r,this.pVel[t*3]=-i*e.speed*.3+(Math.random()-.5)*2,this.pVel[t*3+1]=1.5+Math.random()*2.5,this.pVel[t*3+2]=-a*e.speed*.3+(Math.random()-.5)*2,this.pLife[t]=.9+Math.random()*.6}_updateParticles(e){for(let t=0;t<this.pMax;t++)this.pLife[t]<=0?this.pPos[t*3+1]=-1e3:(this.pLife[t]-=e,this.pVel[t*3+1]-=6*e,this.pPos[t*3]+=this.pVel[t*3]*e,this.pPos[t*3+1]+=this.pVel[t*3+1]*e,this.pPos[t*3+2]+=this.pVel[t*3+2]*e);this.particles.geometry.attributes.position.needsUpdate=!0}_remove(e,t){e.engine?.stop(),this.world.scene.remove(e.model),this.list.splice(t,1)}clear(){for(let e=this.list.length-1;e>=0;e--)this._remove(this.list[e],e);this.party=null,this.visitT=null,this.sandNear=0}},Vm=new B(0,1,0),Hm={deer:{file:`blacktailed_deer.glb`,gait:bp.deer,walk:.9,run:9,spawnHab:[q.FOREST,q.THICKET,q.MEADOW,q.WET_FOREST,q.SPARSE],seasons:[`spring`,`summer`,`fall`,`winter`],ph:{L:1.4,Hs:.9,Hh:.95,tail:.2,nTail:2,headL:.28,width:.36,body:9072726,legs:7232070,tailC:2761760,bib:14208184}},bear:{file:`black_bear.glb`,gait:bp.bobcat,walk:.8,run:7,spawnHab:[q.FOREST,q.THICKET],seasons:[`summer`,`fall`],ph:{L:1.5,Hs:.85,Hh:.88,tail:.1,nTail:1,headL:.3,width:.55,body:1381139,legs:1052688,tailC:1381139,bib:3812386}}},Um=class{constructor(e){this.world=e,this.list=[],this.templates={},this.timer=20,this.events=[],this.season=`fall`}async load(){for(let[e,t]of Object.entries(Hm))this.templates[e]=await this.world.lib.loadCreature(t.file)}clear(){for(let e of this.list)this.world.scene.remove(e.model);this.list.length=0}_spawn(e,t){let n=Hm[e],{terrain:r}=this.world;for(let i=0;i<25;i++){let i=Math.random()*Math.PI*2,a=45+Math.random()*70,o=t.position.x+Math.cos(i)*a,s=t.position.z+Math.sin(i)*a;if(!r.inMap(o,s,30)||!n.spawnHab.includes(r.habitatAt(o,s))||r.waterDepthAt(o,s)>0)continue;let c,l=this.templates[e];l?(c=Id(l.scene),c.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.frustumCulled=!1)})):c=kp(n.ph);let u=new An;u.add(c),this.world.scene.add(u);let d={kind:e,K:n,model:u,anim:new Cp(c,n.gait),pos:new B(o,r.heightAt(o,s),s),heading:Math.random()*6.28,speed:0,state:`browse`,timer:3+Math.random()*5,normal:new B(0,1,0)};return this.list.push(d),d}}update(e,t,n){let{terrain:r,veg:i,audio:a}=this.world;if(this.timer-=e,this.timer<=0){this.timer=50+Math.random()*60;let e=this.list.filter(e=>e.kind===`deer`).length,n=this.list.filter(e=>e.kind===`bear`).length;e<2&&Math.random()<.7?this._spawn(`deer`,t):n<1&&Hm.bear.seasons.includes(this.season)&&Math.random()<.35&&this._spawn(`bear`,t)}for(let o=this.list.length-1;o>=0;o--){let s=this.list[o],c=s.pos.distanceTo(t.position);if(c>220){this.world.scene.remove(s.model),this.list.splice(o,1);continue}s.timer-=e;let l=0,u=s.heading;if(s.kind===`deer`)t.alive&&c<9&&(t.activity===`sprint`||c<3.5)&&s.state!==`flee`&&(s.state=`flee`,s.timer=4,a?.sfx(`flushBig`,s.pos,{v:.6})),s.state===`flee`?(l=s.K.run,u=Math.atan2(s.pos.x-t.position.x,s.pos.z-t.position.z),s.timer<0&&(s.state=`walk`,s.timer=6)):s.state===`walk`?(l=s.K.walk,s.timer<0&&(s.state=`browse`,s.timer=4+Math.random()*8)):s.timer<0&&(s.state=`walk`,s.timer=3+Math.random()*4,s.heading+=(Math.random()-.5)*2,u=s.heading);else if(t.alive&&c<7&&s.state!==`charge`&&s.state!==`retreat`&&(s.state=`charge`,s.timer=2.2,a?.sfx(`growl`,s.pos),this.events.push({text:`A black bear is feeding on these huckleberries — back off!`,type:`danger`})),s.state===`charge`)l=s.K.run*.6,u=Math.atan2(t.position.x-s.pos.x,t.position.z-s.pos.z),c<1.4&&!t.climbing&&(this.world.energy.kJ=Math.max(0,this.world.energy.kJ-120),this.events.push({text:`Swatted by the bear! −120 kJ`,type:`danger`}),n.onHit?.(),s.state=`retreat`,s.timer=6),(s.timer<0||c>14)&&(s.state=`retreat`,s.timer=5);else if(s.state===`retreat`)l=s.K.walk,s.timer<0&&(s.state=`browse`);else if(s.state===`walk`)l=s.K.walk,s.timer<0&&(s.state=`browse`,s.timer=6+Math.random()*10);else if(s.timer<0){s.state=`walk`,s.timer=4+Math.random()*5;let e=null;i.shrubsNear(s.pos.x,s.pos.z,20,t=>{t.fruitG0!=null&&(!e||Math.random()<.2)&&(e=t)}),s.heading=e?Math.atan2(e.x-s.pos.x,e.z-s.pos.z):s.heading+(Math.random()-.5)*2,u=s.heading}s.heading=Cd(s.heading,u,3,e);let d=r.coverAt(s.pos.x,s.pos.z);s.speed=xd(s.speed,l*Math.max(.35,1-.5*d.shrub),3,e),s.pos.x+=Math.sin(s.heading)*s.speed*e,s.pos.z+=Math.cos(s.heading)*s.speed*e,r.waterDepthAt(s.pos.x,s.pos.z)>.3&&(s.heading+=Math.PI*e),s.pos.y=r.heightAt(s.pos.x,s.pos.z),r.normalAt(s.pos.x,s.pos.z,s.normal,1.2);let f=new B(Math.sin(s.heading),0,Math.cos(s.heading)),p=Vm.clone().lerp(s.normal,.5).normalize();f.addScaledVector(p,-f.dot(p)).normalize();let m=new H().makeBasis(new B().crossVectors(p,f).normalize(),p,f);s.model.quaternion.slerp(new Nt().setFromRotationMatrix(m),1-Math.exp(-6*e)),s.model.position.copy(s.pos),s.anim.update(e,{speed:s.speed,eat:s.state===`browse`,snarl:s.state===`charge`,lookYaw:c<25?J(Sd(Math.atan2(t.position.x-s.pos.x,t.position.z-s.pos.z)-s.heading),-1,1):void 0})}}},Wm=class{constructor(e,t=2200){this.n=t;let n=new Float32Array(t*6);this.seed=new Float32Array(t*3);for(let e=0;e<t;e++)this.seed[e*3]=(Math.random()-.5)*40,this.seed[e*3+1]=Math.random()*20,this.seed[e*3+2]=(Math.random()-.5)*40;let r=new Rr;r.setAttribute(`position`,new Cr(n,3)),this.mesh=new ea(r,new Hi({color:11187904,transparent:!0,opacity:0,depthWrite:!1})),this.mesh.frustumCulled=!1,e.add(this.mesh),this.t=0}update(e,t,n,r={x:1.2,z:.6}){if(this.mesh.visible=n>.06,!this.mesh.visible)return;this.t+=e,this.mesh.material.opacity=Math.min(.55,n*.8);let i=this.mesh.geometry.attributes.position.array,a=Math.floor(this.n*Math.min(1,n*1.4));for(let e=0;e<this.n;e++){let n=e*6;if(e>=a){i[n+1]=i[n+4]=-9999;continue}let o=this.seed[e*3],s=this.seed[e*3+2],c=(this.seed[e*3+1]-this.t*9)%20;c<0&&(c+=20);let l=t.position.x+o+r.x*(c-10)*.08,u=t.position.z+s+r.z*(c-10)*.08,d=t.position.y-6+c;i[n]=l,i[n+1]=d,i[n+2]=u,i[n+3]=l-r.x*.05,i[n+4]=d-.45,i[n+5]=u-r.z*.05}this.mesh.geometry.attributes.position.needsUpdate=!0}},Gm=K.senses;new B;var Km=new B,qm=new H,Jm=new U,Ym={prey:{ghost:new U(1,.55,.12),line:new U(1,.62,.16)},quarry:{ghost:new U(1,.78,.2),line:new U(1,.86,.3)},pred:{ghost:new U(1,.22,.12),line:new U(1,.3,.18)}},Xm=1.5,Zm={value:.003};function Qm(e,t){let n=new $r({map:e?.map||null,color:e?.color?e.color.clone():new U(.6,.5,.4),transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1});return n.depthFunc=6,n.onBeforeCompile=e=>{e.uniforms.uOlW=Zm,e.uniforms.uRim=t.rim,e.uniforms.uLevel=t.level,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vGhN; varying vec3 vGhV; uniform float uOlW;`).replace(`#include <project_vertex>`,`#include <project_vertex>
        #ifdef USE_SKINNING
          vGhN = normalize(transformedNormal);
        #else
          vGhN = normalize(normalMatrix * normal);
        #endif
        mvPosition.xyz += vGhN * (uOlW * 0.5 * -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        vGhV = normalize(-mvPosition.xyz);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vGhN; varying vec3 vGhV; uniform vec3 uRim; uniform float uLevel;`).replace(`#include <opaque_fragment>`,`float rim = 1.0 - abs(dot(normalize(vGhN), normalize(vGhV)));
        vec3 body = outgoingLight * 1.5 + 0.04;
        vec3 c = mix(body, uRim, 0.18 + 0.72 * pow(rim, 1.8));
        gl_FragColor = vec4(c, uLevel * (0.6 + 0.4 * rim));`)},n.customProgramCacheKey=()=>`sense-ghost-tex`+(e?.map?`-map`:``),n}function $m(){let e=new $r({color:16777215,side:1,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1});return e.onBeforeCompile=e=>{e.uniforms.uOlW=Zm,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uOlW;`).replace(`#include <project_vertex>`,`#include <project_vertex>
        #ifdef USE_SKINNING
          vec3 olN = normalize(transformedNormal);
          #ifdef FLIP_SIDED
            olN = -olN;
          #endif
        #else
          vec3 olN = normalize(normalMatrix * normal);
        #endif
        mvPosition.xyz += olN * (uOlW * -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;`)},e.customProgramCacheKey=()=>`sense-outline-px`,e}function eh(e,t,n){let r;return e.isSkinnedMesh?(r=new Ci(e.geometry,t),r.bind(e.skeleton,e.bindMatrix)):r=new di(e.geometry,t),r.userData.isGlow=!0,r.renderOrder=n,r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r.position.copy(e.position),r.quaternion.copy(e.quaternion),r.scale.copy(e.scale),r.visible=!1,e.parent.add(r),r}function th(e){let t={rim:{value:new U},level:{value:0}},n=$m(),r=[],i=[],a=[];e.traverse(e=>{e.isMesh&&!e.userData.isGlow&&!/_fur\d+$/.test(e.name)&&!/eye/i.test(e.name)&&!/eye/i.test(e.material?.name||``)&&a.push(e)});for(let e of a)r.push(eh(e,Qm(Array.isArray(e.material)?e.material[0]:e.material,t),991)),i.push(eh(e,n,990));return{ghosts:r,lines:i,U:t,om:n,level:0,hide(){for(let e of r)e.visible=!1;for(let e of i)e.visible=!1;this.level=0}}}function nh(e,t){Zm.value=Xm*2*Math.tan(Mt.degToRad(e.fov)/2)/Math.max(100,t)}var rh=class{constructor(e){this.world=e,this.quarry=null,this.message=null;let t=new ga(.045,8).rotateX(-Math.PI/2),n=new $r({color:16777215,transparent:!0,depthTest:!1,depthWrite:!1,blending:2,fog:!1,toneMapped:!1});this.trailCap=1600,this.trails=new Li(t,n,this.trailCap),this.trails.instanceColor=new ki(new Float32Array(this.trailCap*3),3),this.trails.count=0,this.trails.renderOrder=980,this.trails.frustumCulled=!1,e.scene.add(this.trails)}clear(){this.quarry=null,this.trails.count=0}_setGlow(e,t,n,r){let i=e.glow||(n>.01||r>.01?e.glow=th(e.model):null);if(!i)return;i.level=n;let a=Ym[t];i.U.rim.value.copy(a.ghost),i.U.level.value=J(n,0,1)*.85,i.om.color.copy(a.line),i.om.opacity=J(r,0,1)*.9;for(let e of i.ghosts)e.visible=n>.01;for(let e of i.lines)e.visible=r>.01}track(e,t){let n=this.world.prey,r=e.getWorldDirection(Km),i=null,a=-1e9;for(let o of n.list){if(!o.alive||o.state===`gone`)continue;let n=o.pos.distanceTo(t.position);if(n>Gm.trackRange)continue;let s=o.center.clone();if(!((o.glow?.level??0)>.1||o.flash>0||n<6||this.world.veg.visibility(e.position,s,o.perch?.ref)>.3))continue;let c=s.sub(e.position).normalize().dot(r);if(c<Math.cos(Mt.degToRad(32)))continue;let l=c*3-n*.015+(o.flash>0?.25:0)+(o===this.quarry?-.5:0);l>a&&(a=l,i=o)}i?(this.quarry=i,this.message=`Tracking a ${i.sp.name.replace(/ \(.*\)$/,``).toLowerCase()}. Stalk it with C, then click to pounce.`):(this.message=this.quarry?null:`Nothing in your sights to track. Hold Q to sense, or face a sound and press R.`,this.quarry&&(this.quarry=null,this.message=`Stopped tracking.`))}update(e,{marten:t,cam:n,sensing:r,bobcats:i}){let a=this.world.prey;for(let t of a.cues)t.t<e*1.5&&t.prey?.model&&(t.prey.flash=1);let o=this.quarry;o&&(!o.alive||o.state===`gone`||!a.list.includes(o)||o.pos.distanceTo(t.position)>Gm.trackKeep)&&(this.message=o.alive?`Lost the ${o.sp.name.replace(/ \(.*\)$/,``).toLowerCase()}.`:null,this.quarry=null);let s=t.position;nh(n,innerHeight);for(let t of a.list){t.flash=Math.max(0,t.flash-e/Gm.flashSec);let n=t.pos.distanceTo(s),i=0,a=0;if(r&&n<Gm.senseRange&&(i=J(1.15-n/Gm.senseRange,.35,1),a=.55),t.flash>0&&n<Gm.songCueRange){let e=t.flash*J(1.25-n/Gm.songCueRange,.35,1);i=Math.max(i,e),a=Math.max(a,e*.7)}let o=t===this.quarry;if(o){let e=.85+.15*Math.sin(performance.now()*.006);i=Math.max(i,.8*e),a=Math.max(a,e)}this._setGlow(t,o?`quarry`:`prey`,i,a)}for(let e of i.list){let t=e.pos.distanceTo(s),n=r&&t<Gm.predatorRange?J(1.2-t/Gm.predatorRange,.4,1):0;this._setGlow(e,`pred`,n,n*.8)}let c=0;if(r){let e=a.clock;for(let t of a.list){if(!t.trail.length||t.pos.distanceTo(s)>Gm.senseRange)continue;let n=t===this.quarry?1.6:1;for(let r of t.trail){let t=e-r.t;if(t>Gm.trailSec||c>=this.trailCap)continue;let i=(1-t/Gm.trailSec)*.9*n;qm.makeTranslation(r.x,r.y,r.z),this.trails.setMatrixAt(c,qm),this.trails.setColorAt(c,Jm.setRGB(1*i,.72*i,.36*i)),c++}}}this.trails.count=c,c&&(this.trails.instanceMatrix.needsUpdate=!0,this.trails.instanceColor.needsUpdate=!0);let l=this.quarry;l&&l.pos.distanceTo(s)<32?(Vf.uTunnelPos.value.copy(l.center),Vf.uTunnelOn.value=1):Vf.uTunnelOn.value=0}},ih=e=>document.getElementById(e),ah=class{constructor(e,t){this.terrain=e,this.el={hud:ih(`hud`),clock:ih(`clock`),season:ih(`season`),habitat:ih(`habitat`),eFill:ih(`energy-fill`),eText:ih(`energy-text`),burn:ih(`burn-text`),eStatus:ih(`energy-status`),sFill:ih(`stamina-fill`),cover:ih(`cover-text`),coverIcon:ih(`cover-icon`),prompt:ih(`prompt`),feed:ih(`feed`),threat:ih(`threat-text`),strip:ih(`compass-strip`),bracket:ih(`target-bracket`),tlabel:ih(`target-label`),charge:ih(`charge-ring`),hint:ih(`pounce-hint`),banner:ih(`banner`),coach:ih(`coach`),coachText:ih(`coach-text`),coachStep:ih(`coach-step`),vignette:ih(`vignette`),flash:ih(`flash`)},this.mini=ih(`minimap`),this.mctx=this.mini.getContext(`2d`),this.overlay=ih(`overlay`),this.octx=this.overlay.getContext(`2d`),this.mapImg=t,this._resize(),addEventListener(`resize`,()=>this._resize()),this._buildCompass(),this.lastPrompt=``,this.heartTimer=0}_resize(){let e=Math.min(2,devicePixelRatio||1);this.overlay.width=innerWidth*e,this.overlay.height=innerHeight*e,this.octx.setTransform(e,0,0,e,0,0)}_buildCompass(){let e=this.el.strip;e.innerHTML=``;let t={0:`N`,45:`NE`,90:`E`,135:`SE`,180:`S`,225:`SW`,270:`W`,315:`NW`};this.compassMarks=[];for(let n=-1;n<=1;n++)for(let r=0;r<360;r+=15){let i=document.createElement(`span`),a=t[r];i.textContent=a||`·`,a&&a.length===1&&(i.className=`card`),i.dataset.deg=r+n*360,e.appendChild(i)}this.markerEls=[]}show(e){this.el.hud.classList.toggle(`hidden`,!e)}toast(e,t=`good`,n=null){let r=document.createElement(`div`);for(r.className=`toast `+t,r.innerHTML=(n==null?``:`<span class="kj">+${Math.round(n)} kJ</span>`)+e,this.el.feed.prepend(r);this.el.feed.children.length>6;)this.el.feed.lastChild.remove();setTimeout(()=>{r.style.opacity=`0`,setTimeout(()=>r.remove(),700)},t===`death`?8e3:4500)}banner(e,t=``,n=`good`){let r=this.el.banner;r.querySelector(`.b-main`).textContent=e,r.querySelector(`.b-sub`).textContent=t,r.className=`show `+n,clearTimeout(this._bannerT),this._bannerT=setTimeout(()=>{r.className=n},1700)}coach(e,t){this.el.coach.classList.toggle(`hidden`,!e),e&&(this._coachHtml!==e&&(this.el.coachText.innerHTML=e,this._coachHtml=e),this.el.coachStep.textContent=t||``)}flash(e=`#fff`,t=.5){let n=this.el.flash;n.style.background=e,n.style.transition=`none`,n.style.opacity=t,requestAnimationFrame(()=>{n.style.transition=`opacity .6s`,n.style.opacity=0})}update(e,t){let{marten:n,energy:r,cam:i,camRig:a,sky:o,prey:s,bobcats:c,ohvs:l,terrain:u,senses:d}=t,f=this.el,p=Math.floor(t.gameHours/24)+1,m=t.gameHours%24,h=Math.floor(m),g=Math.floor((m-h)*60);f.clock.textContent=`Day ${p} · ${String(h).padStart(2,`0`)}:${String(g).padStart(2,`0`)}${o.isNight?` · night`:``}`,f.season.textContent=`${t.season[0].toUpperCase()+t.season.slice(1)} · ${o.fogAmount>.65?`marine fog`:o.fogAmount>.35?`overcast`:`clearing`}${o.rain>.2?` · rain`:``}`;let _=u.habitatInfo(n.position.x,n.position.z);f.habitat.textContent=n.climbing?`Up a tree · ${n.heightAboveGround.toFixed(1)} m`:_.name;let v=r.frac;f.eFill.style.width=(v*100).toFixed(1)+`%`,f.eFill.style.background=v>.5?`linear-gradient(90deg,#6e9e57,#a9c76c)`:v>.25?`linear-gradient(90deg,#b49a3c,#e3c55a)`:`linear-gradient(90deg,#9b3b2a,#e2674f)`,f.eText.textContent=`${Math.round(r.kJ)} / ${r.capacity} kJ`,f.burn.textContent=`−${r.burnRate.toFixed(1)} kJ/s`,f.eStatus.textContent=r.kJ<=0?`STARVING`:v<K.energy.lowFrac?`Hungry — slowing down`:v>.97?`Full`:``,f.sFill.style.width=(n.stamina*100).toFixed(0)+`%`;let y=n.climbing?.45:u.concealmentAt(n.position.x,n.position.z),b=n.position,x=!n.climbing&&(t.veg?.inThicket(b.x,b.z)??0)>.15,[S,C]=x?[`●`,`In a thicket`]:y>.6?[`●`,`Hidden in cover`]:y>.3?[`◐`,`Partly hidden`]:[`○`,`Exposed — no cover`],w=n.activity===`sprint`?` · noisy`:n.crouching?` · stalking`:n.speed<.15?` · still`:``;f.coverIcon.textContent=S,f.cover.textContent=C+w,f.cover.style.color=x||y>.6?`#a8d38f`:y>.3?`#e8d79a`:`#ff9d8a`;let T=n.prompt||``;T!==this.lastPrompt&&(f.prompt.textContent=T,this.lastPrompt=T);let E=c.nearest,D=``;E&&c.threat>.55&&n.alive&&(D=E.state===`stalk`?`Something is stalking you…`:`BOBCAT!`),l.warning&&n.alive&&!D&&(D=`Vehicle approaching!`),f.threat.textContent=D;let O=Math.max(c.threat*(E&&E.state!==`stalk`?1:.5),v<.15?.6:0,+(r.kJ<=0));f.vignette.style.opacity=J(O,0,1).toFixed(2),this.heartTimer-=e,O>.5&&this.heartTimer<=0&&n.alive&&(t.audio.sfx(`heartbeat`),this.heartTimer=O>.9?.5:.8),this._compass(a.yaw,t),this._minimap(t),this._reticle(t),this._overlay(t)}_compass(e,t){let n=(-e*180/Math.PI+360)%360;for(let e of this.el.strip.children){let t=180+(+e.dataset.deg-n)*3;e.style.left=t+`px`,e.style.display=t<-20||t>380?`none`:``}}_worldToMini(e,t,n,r,i,a){return[a+(e-n)*i,a+(t-r)*i]}_minimap(e){let t=this.mctx,n=this.terrain,r=e.marten,i=this.mini.width,a=i/2,o=i/300;if(t.save(),t.clearRect(0,0,i,i),t.beginPath(),t.arc(a,a,a,0,Math.PI*2),t.clip(),t.fillStyle=`#1d3b57`,t.fillRect(0,0,i,i),this.mapImg){let e=this.mapImg.width,a=this.mapImg.height,o=(r.position.x-150-n.x0)/n.worldW*e,s=(r.position.z-150-n.z0)/n.worldH*a;t.drawImage(this.mapImg,o,s,300/n.worldW*e,300/n.worldH*a,0,0,i,i)}for(let n of e.prey.carcasses){if(n.carried||n.type===`nest`&&!n.nest.found)continue;let[e,i]=this._worldToMini(n.position.x,n.position.z,r.position.x,r.position.z,o,a);t.fillStyle=n.type===`carrion`?`#9fd3ff`:n.type===`nest`?`#c9f08a`:`#ffcf7a`,t.beginPath(),t.arc(e,i,3.5,0,Math.PI*2),t.fill()}for(let n of e.bobcats.list){if(n.pos.distanceTo(r.position)>(e.senses.active?K.senses.predatorRange:25)&&n.aware<.5)continue;let[i,s]=this._worldToMini(n.pos.x,n.pos.z,r.position.x,r.position.z,o,a);t.fillStyle=`#ff5a40`,t.beginPath(),t.arc(i,s,4.5,0,Math.PI*2),t.fill()}for(let n of e.ohvs.list){let[e,i]=this._worldToMini(n.pos.x,n.pos.z,r.position.x,r.position.z,o,a);t.fillStyle=`#ff9a1f`,t.fillRect(e-3,i-3,6,6)}t.translate(a,a),t.rotate(-e.camRig.yaw),t.fillStyle=`#fff`,t.strokeStyle=`#000`,t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.fillStyle=`#fff`,t.font=`bold 11px sans-serif`,t.textAlign=`center`,t.fillText(`N`,a,12)}_project(e,t){let n=e.clone().project(t);return{x:(n.x*.5+.5)*innerWidth,y:(-n.y*.5+.5)*innerHeight,behind:n.z>1}}_reticle(e){let t=!e.aimTarget&&e.spotTarget,n=e.aimTarget||e.spotTarget,r=this.el,i=``,a=``;if(n&&e.marten.alive){let o=n.center.clone(),s=this._project(o,e.cam),c=J(40/Math.max(1,e.cam.position.distanceTo(o))*18,t?16:18,80);r.bracket.style.display=`block`;let l=t?0:1-ym(n),u=t?`spot`:l>.8?`good`:l>.45?`risky`:`bad`;if(r.bracket.className=u,r.tlabel.classList.toggle(`spot`,!!t),!t){let t=e.marten,r=Math.hypot(n.pos.x-t.position.x,n.pos.z-t.position.z),o=oh(t.charging?t.charge:0),s=u===`good`?`it hasn't noticed you`:u===`risky`?`risky: it is watching`:`it is alarmed and will likely dodge`;a=u,i=t.charging?o>=r?`RELEASE — POUNCE! · ${s}`:`keep holding… leap ${o.toFixed(1)} of ${r.toFixed(1)} m`:r<=oh(0)?`CLICK — POUNCE · ${s}`:`HOLD CLICK to coil, release to pounce (${r.toFixed(1)} m) · ${s}`,u===`bad`&&!t.charging&&(i=`It is alarmed: freeze and let it calm down, or it will dodge`)}r.bracket.style.left=s.x-innerWidth/2-c/2+`px`,r.bracket.style.top=s.y-innerHeight/2-c/2+`px`,r.bracket.style.width=r.bracket.style.height=c+`px`,r.tlabel.style.display=`block`,r.tlabel.style.left=s.x-innerWidth/2+c/2+6+`px`,r.tlabel.style.top=s.y-innerHeight/2-c/2-4+`px`;let d=Math.hypot(n.pos.x-e.marten.position.x,n.pos.z-e.marten.position.z);r.tlabel.textContent=t?`${n.sp.name} · ${Math.round(d)} m — stalk closer (C)`:`${n.sp.name} · ${n.sp.kJ} kJ`}else r.bracket.style.display=`none`,r.tlabel.style.display=`none`;let o=e.sense?.quarry;if(!e.aimTarget&&o&&o.alive&&e.marten.alive&&!e.marten.pouncing){let t=Math.hypot(o.pos.x-e.marten.position.x,o.pos.z-e.marten.position.z);t<8&&(i=`${t.toFixed(1)} m — creep within ${K.marten.chargedPounceRange.toFixed(1)} m to pounce${e.marten.crouching?``:` (C to crouch)`}`,a=``)}e.marten.charging&&!e.aimTarget&&(i=`Release to pounce · hold longer to leap farther`,a=``),r.hint.textContent!==i&&(r.hint.textContent=i),r.hint.className!==a&&(r.hint.className=a);let s=e.marten.charging?e.marten.charge:0;r.charge.style.borderColor=s>0?`rgba(255,${200-s*120},${120-s*100},${.4+s*.6})`:`transparent`,r.charge.style.transform=`scale(${1+s*.6})`}_overlay(e){let t=this.octx;t.clearRect(0,0,innerWidth,innerHeight);let n=e.cam,r=e.marten;if(e.senses.active&&r.alive){t.save();for(let i of e.prey.list){let e=i.pos.distanceTo(r.position);if(e>K.senses.senseRange)continue;let a=this._project(i.center,n);if(a.behind)continue;let o=J(1-e/K.senses.senseRange,.2,1);t.font=`11px sans-serif`,t.textAlign=`center`,e>14?(t.fillStyle=`rgba(255,205,120,${o*.9})`,t.strokeStyle=`rgba(10,14,12,${o*.6})`,t.lineWidth=1.5,t.beginPath(),t.moveTo(a.x,a.y-12-4),t.lineTo(a.x+4,a.y-12),t.lineTo(a.x,a.y-12+4),t.lineTo(a.x-4,a.y-12),t.closePath(),t.stroke(),t.fill()):(t.lineWidth=3,t.strokeStyle=`rgba(10,14,12,${o*.6})`,t.strokeText(i.sp.name.replace(/ \(.*\)$/,``),a.x,a.y-16),t.fillStyle=`rgba(255,236,200,${o})`,t.fillText(i.sp.name.replace(/ \(.*\)$/,``),a.x,a.y-16))}for(let i of e.senses.fruit){let e=Math.hypot(i.x-r.position.x,i.z-r.position.z);if(e>15)continue;let a=this._project(new B(i.x,i.y+i.h*.6,i.z),n);a.behind||(t.fillStyle=`rgba(150,115,215,${.75*J(1.2-e/15,.3,1)})`,t.beginPath(),t.arc(a.x,a.y,3,0,Math.PI*2),t.fill())}for(let i of e.prey.carcasses){if(i.carried||i.position.distanceTo(r.position)>(i.type===`nest`&&!i.nest.found?14:60))continue;let e=this._project(i.position.clone().add(new B(0,.2,0)),n);e.behind||(t.fillStyle=`rgba(255,200,110,0.9)`,t.font=`12px sans-serif`,t.textAlign=`center`,t.fillText(`◆ ${i.name} ${Math.round(i.kJ)} kJ`,e.x,e.y))}t.restore()}r.alive&&r.charging&&this._landing(t,e),!e.senses.active&&r.alive&&this._soundCues(t,e),r.alive&&this._quarry(t,e),r.alive&&this._bobcats(t,e);let i=innerWidth/2,a=innerHeight/2,o=[];for(let t of e.bobcats.list){let n=t.pos.distanceTo(r.position),i=e.senses.active&&n<K.senses.predatorRange;(t.aware>.35||i||n<12)&&o.push({p:t.pos,w:J(t.aware+(i?.4:0),.3,1),col:`255,80,60`})}e.ohvs.warning&&o.push({p:e.ohvs.warning.pos,w:.8,col:`255,160,40`});for(let n of o){let o=n.p.x-r.position.x,s=n.p.z-r.position.z,c=Math.atan2(o,-s)+e.camRig.yaw;t.strokeStyle=`rgba(${n.col},${.35+n.w*.55})`,t.lineWidth=6,t.beginPath(),t.arc(i,a,90,c-Math.PI/2-.35,c-Math.PI/2+.35),t.stroke()}}};ah.prototype._soundCues=function(e,t){let n=K.senses,r=t.marten,i=innerWidth,a=innerHeight,o=(t,n,r,i,a,o)=>{e.font=i,e.lineWidth=3,e.strokeStyle=`rgba(10,14,12,${o*.75})`,e.strokeText(t,n,r),e.fillStyle=`rgba(${a},${o})`,e.fillText(t,n,r)};e.save(),e.textAlign=`center`,e.lineJoin=`round`;for(let s of t.prey.cues){let c=s.prey,l=c.pos.distanceTo(r.position),u=s.kind===`song`,d=s.kind===`alarm`,f=u?n.songCueRange:d?60:n.hearRange;if(l>f)continue;let p=u||d?2:1.2,m=J(1-s.t/p,0,1)*J(1.3-l/f,.45,1);if(m<=.01)continue;let h=this._project((c.center??c.pos).clone(),t.cam),g=h.x,_=h.y,v=!1;h.behind&&(g=i-g,_=a-_),(h.behind||g<30||g>i-30||_<70||_>a-60)&&(v=!0,g=J(g,30,i-30),_=J(_,70,a-60),h.behind&&(_=a*.62)),e.textAlign=g>i-90?`right`:g<90?`left`:`center`;let y=s.t*12;if(d)o(`!`,g,_-10-y,`bold ${v?18:22}px sans-serif`,`255,150,120`,m),o(s.label??c.sp.name,g,_-30-y,`12px sans-serif`,`255,205,190`,m);else if(u)o(`♪`,g,_-12-y,`bold ${v?22:26}px sans-serif`,`240,248,255`,m),l<26&&o((s.label??c.sp.name).replace(/ \(.*\)$/,``),g,_-36-y,`13px sans-serif`,`225,238,248`,m);else{let t=11+s.t*14;for(let[n,r]of[[4.5,`rgba(10,14,12,${m*.55})`],[2.2,`rgba(255,226,170,${m})`]]){e.lineWidth=n,e.strokeStyle=r;for(let n of[-1,1])e.beginPath(),e.arc(g,_,t,n>0?-.6:Math.PI-.6,n>0?.6:Math.PI+.6),e.stroke()}}}e.restore()};function oh(e){let t=K.marten;return t.pounceRange+(t.chargedPounceRange-t.pounceRange)*e+.45}ah.prototype._bobcats=function(e,t){let n=t.marten;for(let r of t.bobcats.list){if(!(r.seenT>0))continue;let i=this._project(r.pos.clone().add(new B(0,.35,0)),t.cam);if(i.behind)continue;let a=r.pos.distanceTo(n.position),o=J(r.seenT/.8,0,1),s=r.state===`chase`||r.state===`windup`||r.state===`pounce`?`charging!`:r.state===`stalk`?`stalking you!`:r.aware>.35?`suspicious`:r.state===`investigate`?`heading for your catch`:`hasn't seen you`,c=J(520/Math.max(1,a),16,60),l=c*.4;e.save(),e.strokeStyle=`rgba(255,90,60,${.95*o})`,e.lineWidth=2.5;for(let[t,n]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.beginPath(),e.moveTo(i.x+t*c,i.y+n*(c-l)),e.lineTo(i.x+t*c,i.y+n*c),e.lineTo(i.x+t*(c-l),i.y+n*c),e.stroke();e.font=`bold 13px sans-serif`,e.textAlign=`center`,e.lineJoin=`round`,e.lineWidth=3,e.strokeStyle=`rgba(10,14,12,${.75*o})`,e.fillStyle=`rgba(255,140,110,${o})`;let u=`BOBCAT · ${Math.round(a)} m`;e.strokeText(u,i.x,i.y-c-8),e.fillText(u,i.x,i.y-c-8),e.font=`12px sans-serif`,e.strokeText(s,i.x,i.y+c+15),e.fillText(s,i.x,i.y+c+15),e.restore()}},ah.prototype._landing=function(e,t){let n=K.marten,r=t.marten,i=n.pounceRange+(n.chargedPounceRange-n.pounceRange)*r.charge,a=new B,o=t.aimTarget,s=new B,c=!1;if(o){s.set(o.pos.x-r.position.x,0,o.pos.z-r.position.z);let e=s.length();s.multiplyScalar(1/Math.max(e,.001)),a.copy(r.position).addScaledVector(s,Math.min(e+.2,i)),c=oh(r.charge)>=e}else t.cam.getWorldDirection(s),s.y=0,s.normalize(),a.copy(r.position).addScaledVector(s,i);a.y=this.terrain.heightAt(a.x,a.z),e.save(),e.strokeStyle=c?`rgba(150,240,130,.95)`:`rgba(255,230,180,.85)`,e.lineWidth=2.5,e.beginPath();for(let n=0;n<=24;n++){let r=n/24*Math.PI*2,i=this._project(new B(a.x+Math.cos(r)*.28,a.y+.03,a.z+Math.sin(r)*.28),t.cam);if(i.behind){e.restore();return}n===0?e.moveTo(i.x,i.y):e.lineTo(i.x,i.y)}e.stroke(),e.restore()},ah.prototype._quarry=function(e,t){let n=t.sense?.quarry;if(!n)return;let r=t.marten,i=innerWidth,a=innerHeight,o=n.pos.distanceTo(r.position),s=this._project(n.center.clone(),t.cam),c=n.state===`fly`||n.state===`flee`||n.state===`leap`?`fleeing`:n.aware>.75?`alarmed`:n.aware>.35?`wary`:n.looking?`watching — freeze`:`feeding — move`,l=c.startsWith(`feeding`)?`150,225,120`:c.startsWith(`watching`)||c===`wary`?`245,205,95`:`255,115,85`,u=n.sp.name.replace(/ \(.*\)$/,``),d=(t,n,r,i,a,o=`center`)=>{e.font=i,e.textAlign=o,e.lineJoin=`round`,e.lineWidth=3,e.strokeStyle=`rgba(10,14,12,.7)`,e.strokeText(t,n,r),e.fillStyle=`rgb(${a})`,e.fillText(t,n,r)};if(e.save(),!s.behind&&s.x>24&&s.x<i-24&&s.y>70&&s.y<a-60){let r=t.aimTarget===n,i=J(260/Math.max(1,o),11,34);if(r)i=J(40/Math.max(1,t.cam.position.distanceTo(n.center))*18,18,80)/2+4;else{let t=i*.45;e.strokeStyle=`rgba(255,238,195,.95)`,e.lineWidth=2;for(let[n,r]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.beginPath(),e.moveTo(s.x+n*i,s.y+r*(i-t)),e.lineTo(s.x+n*i,s.y+r*i),e.lineTo(s.x+n*(i-t),s.y+r*i),e.stroke();d(`${u} · ${Math.round(o)} m`,s.x,s.y-i-20,`12px sans-serif`,`255,240,210`)}let a=s.x-28,f=s.y-i-13;e.fillStyle=`rgba(10,14,12,.6)`,e.fillRect(a-1,f-1,58,6),e.fillStyle=`rgb(${l})`,e.fillRect(a,f,56*J(n.aware,.03,1),4),d(c,s.x,s.y+i+14,`11px sans-serif`,l)}else{let t=s.x,n=s.y;s.behind&&(t=i-t,n=a-n);let r=i/2,c=a/2,l=Math.atan2(n-c,t-r),f=Math.min((i/2-46)/Math.max(.001,Math.abs(Math.cos(l))),(a/2-70)/Math.max(.001,Math.abs(Math.sin(l)))),p=r+Math.cos(l)*f,m=c+Math.sin(l)*f;e.translate(p,m),e.rotate(l),e.fillStyle=`rgba(255,238,195,.95)`,e.strokeStyle=`rgba(10,14,12,.7)`,e.lineWidth=2,e.beginPath(),e.moveTo(14,0),e.lineTo(-8,-9),e.lineTo(-4,0),e.lineTo(-8,9),e.closePath(),e.stroke(),e.fill(),e.setTransform(1,0,0,1,0,0);let h=Math.min(2,devicePixelRatio||1);e.setTransform(h,0,0,h,0,0),d(`${u} · ${Math.round(o)} m`,p-Math.cos(l)*26,m-Math.sin(l)*26+4,`12px sans-serif`,`255,240,210`)}e.restore()};function sh(e,t,n,r,i){let a=e.getContext(`2d`);a.clearRect(0,0,e.width,e.height),t&&a.drawImage(t,0,0,e.width,e.height);let o=e.width/n.worldW,s=e.height/n.worldH,c=(e,t)=>[(e-n.x0)*o,(t-n.z0)*s];for(let e of i.carcasses){if(e.carried||e.type===`nest`&&!e.nest.found)continue;let[t,n]=c(e.position.x,e.position.z);a.fillStyle=`#ffcf7a`,a.beginPath(),a.arc(t,n,4,0,Math.PI*2),a.fill()}let[l,u]=c(r.position.x,r.position.z);a.strokeStyle=`#fff`,a.lineWidth=3,a.beginPath(),a.arc(l,u,9,0,Math.PI*2),a.stroke(),a.fillStyle=`#d9a05a`,a.beginPath(),a.arc(l,u,5,0,Math.PI*2),a.fill(),a.fillStyle=`rgba(0,0,0,.55)`,a.fillRect(14,e.height-40,170,28),a.fillStyle=`#fff`,a.fillRect(22,e.height-22,500*o,4),a.font=`12px sans-serif`,a.fillText(`500 m`,26+500*o,e.height-17),a.fillText(`N ↑`,e.width-40,24)}function ch(e,t){if(!e||!t?.clips)return;let n=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),r=[];for(let e of Object.values(t.clips)){let t=Object.values(e).flat();if(!t.length)continue;let i=t[0];r.push(`<li><b>${n(i.en)}</b> <i>${n(i.sci)}</i>: ${t.map(e=>`<a href="https://xeno-canto.org/${e.xc}" target="_blank" rel="noopener">XC${e.xc}</a> ${n(e.rec)} (${n(e.type)}; ${n(e.lic)})`).join(` · `)}</li>`)}e.innerHTML=`<h3>Sound credits</h3><p class="tiny">Animal voices are short excerpts (trimmed, filtered, normalised) of field recordings shared on
    <a href="https://xeno-canto.org" target="_blank" rel="noopener">xeno-canto.org</a>, each under its recordist's Creative Commons licence. Thank you to the recordists.</p>
    <ul class="sound-credits">${r.join(``)}</ul>`}function lh(e){e.innerHTML=`<table class="guide"><thead><tr><th>Species</th><th>Mass</th><th>Energy</th><th>FO (Eriksson et al. 2019)</th><th>Natural history</th></tr></thead><tbody>${[...Iu].sort((e,t)=>(t.eriksson||0)-(e.eriksson||0)||(t.fo||0)-(e.fo||0)).map(e=>`<tr><td><b>${e.name}</b><br><i>${e.sci}</i>${e.spawnable?``:`<br><span style="color:#e8c35a">not in game</span>`}</td>
        <td class="num">${e.massG} g</td><td class="num">${e.kJ} kJ</td><td class="num">${e.eriksson==null?`–`:e.eriksson+`%`}</td><td>${e.note}</td></tr>`).join(``)}</tbody></table>`}function uh(e){e.innerHTML=Wu.filter(e=>e.id!==0).map(e=>`<span><i style="background:${e.color}"></i>${e.name}</span>`).join(``)}var Z=e=>document.getElementById(e),dh=(e,t=!0)=>Z(e).classList.toggle(`hidden`,!t),Q={state:`loading`,season:`fall`,difficulty:`normal`,quality:`medium`,gameHours:K.startHour,clockSec:0};window.G=Q;function fh(e,t){Z(`load-fill`).style.width=(e*100).toFixed(0)+`%`,Z(`load-text`).textContent=t}async function ph(){let e=Z(`game`),t=new Cu({canvas:e,antialias:!0,powerPreference:`high-performance`});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.setSize(innerWidth,innerHeight),t.toneMapping=4,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=1;let r=new zn,i=new Mo(68,innerWidth/innerHeight,.05,3e3);addEventListener(`resize`,()=>{t.setSize(innerWidth,innerHeight),i.aspect=innerWidth/innerHeight,i.updateProjectionMatrix()}),Object.assign(Q,{renderer:t,scene:r,cam:i});try{let e=await fetch(`deploy.json`);e.ok&&(e.headers.get(`content-type`)||``).includes(`json`)&&(window.DEPLOY=await e.json())}catch{}fh(.05,`Reading lidar terrain and habitat map…`);let a=await Qu(),o=new $u(a);o.makeDataTextures(),fh(.2,`Painting sand, needle litter and moss…`),await new Promise(e=>setTimeout(e,10));let s=gd(t),c=null,l=null;try{c=await _d(o.dir+(a.meta.provisional,`colormap_2k.jpg`))}catch{c=null}if(!c){let e=document.createElement(`canvas`);e.width=e.height=4,c=new ua(e)}c.wrapS=c.wrapT=n,c.anisotropy=4,l=await new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=o.dir+`minimap.jpg`});let u=nd(o,{...s,macro:c});r.add(o.initMeshes(u));let d=new kd(r,t,Q.season),f=new Md(r,o,d);Object.assign(Q,{terrain:o,sky:d,water:f,minimapImg:l}),fh(.3,`Growing shore pine, huckleberry and salal…`);let p=new Qf;await p.loadPlants((e,t)=>fh(.3+e*.35,`Loading plants: ${t}`));let m=new lp(o,p,r,d.sun,{season:Q.season,quality:Q.quality});Q.veg=m,Q.lib=p,fh(.7,`Waking up the animals…`);let h=new _p;h.loadRecordings().then(e=>ch(Z(`guide-sounds`),e));let g={scene:r,terrain:o,veg:m,lib:p,audio:h,sky:d,energy:null,prey:null,threatLevel:0};Q.world=g,Q.audio=h;let _=new zp(g),v=new Em(g),y=new Mm(g),b=new Bm(g),x=new Um(g);g.prey=v,await Promise.all([_.load(),v.load(),y.load(),b.load(),x.load()]);let S=new Wm(r),C=new rh(g);Object.assign(Q,{marten:_,prey:v,bobcats:y,ohvs:b,ambient:x,rain:S,sense:C});let w=new up(e),T=new dp(i,o);T.segQuery=(e,t,n)=>m.segmentsNear(e,t,n);let E=new ah(o,l);Object.assign(Q,{input:w,camRig:T,hud:E}),lh(Z(`guide-body`)),uh(Z(`bigmap-legend`)),Q.start=mh(o),_.spawn(Q.start.x,Q.start.z,0),fh(.85,`Preparing the forest around you…`),T.update(.016,_);for(let e=0;e<8;e++)m.update(.016,i,_.position,900),o.updateLOD(i.position,900);t.compile(r,i),fh(1,`Ready`),vh(),matchMedia(`(pointer: coarse)`).matches&&!matchMedia(`(pointer: fine)`).matches&&dh(`touch-note`,!0),dh(`loading`,!1),dh(`title`,!0),Q.state=`title`,t.setAnimationLoop(Sh)}function mh(e){let t=-450,n=-640;for(let r=0;r<600;r+=6)for(let i=0;i<Math.PI*2;i+=.35){let a=t+Math.cos(i)*r,o=n+Math.sin(i)*r;if(!e.inMap(a,o,80)||e.habitatAt(a,o)!==q.FOREST)continue;let s=0;for(let t=0;t<8;t++)e.habitatAt(a+Math.cos(t)*15,o+Math.sin(t)*15)===q.FOREST&&s++;if(s>=6&&e.waterDepthAt(a,o)<0)return{x:a,z:o}}return{x:t,z:n}}function hh(){let{marten:e,prey:t,bobcats:n,ohvs:r,veg:i,sky:a,audio:o,input:s,hud:c,terrain:l}=Q;Q.season=Z(`opt-season`).value,Q.difficulty=Z(`opt-diff`).value,gh(Z(`opt-quality`).value),a.setSeason(Q.season),i.season=Q.season,i.berryState.clear(),i.cells.clear();for(let e of i.groups.values())e.count=0,e.commit();t.season=Q.season;for(let e of[...t.list])Q.scene.remove(e.model);t.list.length=0,t.nests.clear();for(let e of[...t.carcasses])t.removeCarcass(e);for(let e of n.list)Q.scene.remove(e.model);n.list.length=0,n.spawnCount=0,n.callSite=null,n.timer=Z(`opt-coach`).checked?420:K.bobcat.firstSpawnSec,r.clear(),Q.ambient.clear(),Q.ambient.season=Q.season,Q.ambient.timer=25,Q.energy=new fp(Q.difficulty),Q.world.energy=Q.energy,Q.diff=K.difficulty[Q.difficulty],Q.gameHours={spring:7.6,summer:6.8,fall:8.3,winter:8.8}[Q.season]??K.startHour,Q.stats={caught:0,berriesG:0,nearMisses:0,start:performance.now(),escapes:0},Q.deathShown=!1,Q.emptyPounces=0,Q.dodgeAt=0,Q.coach=Z(`opt-coach`).checked?{step:`sense`,t:0,held:0,again:!1,misses:0,vole:null}:null,Q.tips={t:0,shown:new Set(Q.coach?[`sense`,`track`,`stalk2`,`stalk`,`pounce`]:[])},Q.sense.clear();for(let e of t.flocks)e.members.length=0;t.flocks.length=0,e.spawn(Q.start.x,Q.start.z,Math.PI*.5),Q.camRig.yaw=Math.PI*.5,Q.camRig.pitch=-.15,Q.camRig.update(.016,e),i.prime(e.position.x,e.position.z,40);for(let t=0;t<4;t++)i.update(.016,Q.cam,e.position,a.cutDistance||900);t.seed(e,{night:!1,viewYaw:Q.camRig.yaw,cam:Q.cam}),Q.coach&&(Q.coach.vole=t.spawnTutorial(e,{viewYaw:Q.camRig.yaw,cam:Q.cam})),Q.prey.cues.length=0,o.init(),o.prefetch([...new Set(t.list.map(e=>e.sp.id)),`douglas_squirrel`,`frog`,`owl`,`stellers_jay`]),dh(`title`,!1),dh(`summary`,!1),dh(`pause`,!1),c.show(!0),Q.state=`play`,s.requestLock(),c.toast(`You wake in your rest site in the shore pine. Find food before your reserves run low.`,`info`),(Q.season===`spring`||Q.season===`summer`)&&setTimeout(()=>c.toast(`Nesting season: towhees, song sparrows, Pacific wrens and ruffed grouse nest on the ground, wrentits low in shrubs. Listen for alarm calls, and sniff (Q) to smell a nest.`,`info`),11e3),Q.coach||setTimeout(()=>c.toast(`Tip: hold Q to sniff out prey and ripe berries nearby.`,`info`),6e3)}function gh(e){Q.quality=e,Q.veg?.setQuality(e);let t=Q.renderer;t.setPixelRatio(Math.min(devicePixelRatio,e===`high`?2:e===`medium`?1.5:1)),t.shadowMap.enabled=e!==`low`,Q.sky.sun.castShadow=e!==`low`,Q.sky.sun.shadow.mapSize.set(e===`high`?4096:2048,e===`high`?4096:2048),Q.sky.sun.shadow.map&&(Q.sky.sun.shadow.map.dispose(),Q.sky.sun.shadow.map=null),Z(`opt-quality`).value=e,Z(`opt-quality2`).value=e}function _h(e){(Q.state===`play`||Q.state===`paused`)&&(Q.state=e?`paused`:`play`,dh(`pause`,e),e||Q.input.requestLock())}function vh(){let{input:e}=Q;Z(`btn-start`).onclick=hh,Z(`btn-resume`).onclick=()=>_h(!1),Z(`btn-quit`).onclick=()=>{Q.state=`title`,dh(`pause`,!1),dh(`title`,!0),Q.hud.show(!1),Q.ohvs.clear()},Z(`btn-guide`).onclick=()=>dh(`guide`,!0),Z(`btn-guide-close`).onclick=()=>dh(`guide`,!1),Z(`btn-controls`).onclick=()=>dh(`controls`,!0),Z(`btn-controls-close`).onclick=()=>dh(`controls`,!1),Z(`btn-again`).onclick=hh,Z(`btn-title`).onclick=()=>{dh(`summary`,!1),dh(`title`,!0),Q.state=`title`,Q.hud.show(!1)},Z(`opt-sens`).oninput=t=>{e.sensitivity=+t.target.value},Z(`opt-vol`).oninput=e=>Q.audio.setVolume(+e.target.value),Z(`opt-quality2`).onchange=e=>gh(e.target.value),Z(`opt-coach`).checked=!Dh(),e.onLockChange=e=>{!e&&Q.state===`play`&&_h(!0)},addEventListener(`keydown`,t=>{if(Q.state===`play`||Q.state===`paused`){if(t.code===`Escape`&&!e.locked)_h(Q.state===`play`);else{if(t.code===`Tab`){t.preventDefault();let n=Z(`guide`).classList.contains(`hidden`);dh(`guide`,n),n?e.exitLock():Q.state===`play`&&e.requestLock()}if(t.code===`KeyM`){let t=Z(`bigmap`).classList.contains(`hidden`);t&&(sh(Z(`bigmap-canvas`),Q.minimapImg,Q.terrain,Q.marten,Q.prey),e.exitLock()),dh(`bigmap`,t),!t&&Q.state===`play`&&e.requestLock()}if(t.code===`KeyH`){let t=Z(`controls`).classList.contains(`hidden`);dh(`controls`,t),t&&e.exitLock()}}}});for(let t of[`guide`,`bigmap`,`controls`])Z(t).addEventListener(`click`,n=>{n.target.id===t&&Q.state===`play`&&(dh(t,!1),e.requestLock())})}var yh=performance.now(),bh=new B,xh=new B;function Sh(e){let t=(e-yh)/1e3;yh=e,Q.slowmoT=(Q.slowmoT||0)-t;let n=J(t,5e-4,.05)*(Q.slowmoT>0?.3:1),{renderer:r,scene:i,cam:a,camRig:o,input:s,marten:c,terrain:l,veg:u,sky:d,water:f,hud:p}=Q,m=Q.state===`play`,h=!Z(`guide`).classList.contains(`hidden`)||!Z(`bigmap`).classList.contains(`hidden`)||!Z(`controls`).classList.contains(`hidden`);if(Q.state===`title`&&(Q.titleT=(Q.titleT||0)+n*.05,a.position.set(Q.start.x+Math.cos(Q.titleT)*26,l.heightAt(Q.start.x,Q.start.z)+9,Q.start.z+Math.sin(Q.titleT)*26),a.lookAt(Q.start.x,l.heightAt(Q.start.x,Q.start.z)+2,Q.start.z),d.update(n,9.5,a.position)),m&&!h){let t=n*24/K.dayLengthSec;Q.gameHours+=t;let r=d.isNight,i={gameHours:Q.gameHours,dtHours:t,night:r,rain:d.rain,diff:Q.diff,viewYaw:o.yaw,cam:a,toast:(e,t)=>p.toast(e,t),onCatch:e=>{Q.stats.caught++,Q.slowmoT=.28,o.shake=.5,p.toast(`Caught a ${e.name}!`,`good`),p.banner(`CAUGHT!`,`${e.name} · ${Math.round(e.kJ)} kJ`,`good`),kh(`catch`,e),Q.bobcats.hearDistress(c.position)},onEat:e=>{e.berry?Q.stats.berriesG+=K.berries.mouthfulG:(p.toast(`${e.name}${e.cached?` (rest cached)`:``}`,`good`,e.kJ),Q.audio.sfx(`eat`))},onHit:()=>{p.flash(`#a01000`,.45),o.shake=1},onNearMiss:()=>{Q.stats.nearMisses++,p.toast(`Close call with a vehicle!`,`danger`),o.shake=.6}};s.hit(`KeyV`)&&(o.firstPerson=!o.firstPerson,c.hideModel=o.firstPerson),o.handleInput(s,n),Q.senses=Q.senses||{active:!1,fruit:[],t:0},Q.senses.active=c.sniffing,Q.senses.t-=n,Q.senses.active&&Q.senses.t<=0&&(Q.senses.t=.4,Q.senses.fruit=[],u.shrubsNear(c.position.x,c.position.z,26,e=>{e.fruitG0!=null&&u.remaining(e)>e.fruitG0*.12&&Q.senses.fruit.push(e)})),Q.aimTarget=c.alive&&(c.state===`ground`||c.state===`limb`)?Q.prey.aimTarget(a,c.position,K.marten.chargedPounceRange):null;let l=Q.sense.quarry;l&&l.alive&&c.alive&&(c.state===`ground`||c.state===`limb`)&&Math.hypot(l.pos.x-c.position.x,l.pos.z-c.position.z)<K.marten.chargedPounceRange+.4&&Math.abs(l.pos.y-c.position.y)<2.4&&l.center.clone().sub(a.position).normalize().dot(a.getWorldDirection(bh))>Math.cos(Mt.degToRad(38))&&(Q.aimTarget=l),c.aimTarget=Q.aimTarget,Q.spotTarget=!Q.aimTarget&&!Q.sense.quarry&&c.alive?Q.prey.aimTarget(a,c.position,K.senses.spotRange*(1+.8*c.standing),!0):null,c.update(n,s,o,i),c.lastMiss&&=(wh(c.lastMiss),null),Q.prey.update(n,c,i),s.hit(`KeyR`)&&Q.sense.track(a,c),Q.sense.update(n,{marten:c,cam:a,sensing:c.sniffing,bobcats:Q.bobcats}),Q.sense.message&&(p.toast(Q.sense.message,`info`),Q.sense.message=null);let f=Q.bobcats.update(n,c,i);Q.world.threatLevel=f.threat,Q.ohvs.update(n,c,i),Q.ambient.update(n,c,i);for(let t of[Q.prey,Q.bobcats,Q.ohvs,Q.ambient])for(;t.events.length;){let n=t.events.shift();p.toast(n.text,n.type),n.banner&&(p.banner(n.banner,n.sub||``,n.type===`miss`?`miss`:`good`),n.type===`miss`&&(Q.dodgeAt=e,kh(`miss`,n.sub||`it dodged`)))}Fh(n,i),Ph(n),!c.alive&&!Q.deathShown&&(Q.deathShown=!0,p.flash(c.deathCause===`starvation`?`#000`:`#600`,.7),setTimeout(()=>Bh(),2600)),c.alive&&(Q.deathShown=!1)}if(Q.state===`play`||Q.state===`paused`){let e=Q.sense.quarry,t=0;if(m&&e&&e.alive&&c.alive&&c.crouching&&c.state===`ground`&&!o.firstPerson){let n=e.pos.distanceTo(c.position);n<14&&e.center.clone().sub(a.position).normalize().dot(a.getWorldDirection(bh))>.85&&(t=J((14-n)/6,0,1))}o.stalkTarget=t,o.update(n,c),d.update(m?n:0,Q.gameHours%24,c.position)}let g=Q.state===`title`?new B(Q.start.x,0,Q.start.z):c.position;if(Vf.uTime.value+=n,Vf.uGust.value=Math.sin(e*31e-5)*.4+Math.sin(e*.00113)*.25+(d.fogAmount<.4?.2:0),Vf.uPlayerPos.value.copy(c.position).add(new B(0,.15,0)),Vf.uOccluderFade.value=+(Q.state===`play`&&!o.firstPerson),u.update(n,a,g,d.cutDistance||900),l.updateLOD(a.position,Math.min(1400,(d.cutDistance||900)*1.3)),f.update(n,a.position),Q.rain.update(n,a,d.rain),Ih(n),Q.state===`play`||Q.state===`paused`){p.update(n,{...Q,energy:Q.energy,cam:a,senses:Q.senses||{active:!1,fruit:[]}}),a.getWorldDirection(bh),xh.set(0,1,0).applyQuaternion(a.quaternion);let e=l.coverAt(c.position.x,c.position.z);Q.audio.update({dt:n,listener:{pos:a.position,fwd:bh,up:xh},oceanDist:l.oceanDistanceAt(c.position.x,c.position.z),oceanDir:Rh(l,c.position),open:1-J(e.tree*1.2+e.shrub*.4,0,1),night:d.isNight,rain:d.rain,nearWater:zh(l,c.position),forest:J(e.tree+e.shrub*.6,0,1),dawn:Q.gameHours%24>5&&Q.gameHours%24<8,season:Q.season})}r.toneMappingExposure=d.exposure??1,r.render(i,a),Ch(n),s.endFrame()}var $={cam:new Mo(8,1.5,.03,300),look:new B,fov:8,on:!1,el:null,label:null,text:``,size:new z,rt:null,acc:1,quad:null,qscene:null,qcam:null};function Ch(e){let t=Q.sense?.quarry,n=Q.marten,r=Q.renderer,i=Q.cam;$.el||($.el=Z(`quarry-view`),$.label=$.el.querySelector(`.qv-label`));let a=(Q.state===`play`||Q.state===`paused`)&&t&&t.alive&&n.alive&&!Q.camRig.firstPerson&&t.pos.distanceTo(n.position)<40;if(a){let e=t.center.clone().project(i);a=e.z<1&&Math.abs(e.x)<1.1&&Math.abs(e.y)<1.1}if($.el.classList.toggle(`hidden`,!a),!a){$.on=!1;return}let o=$.el.getBoundingClientRect(),s=r.getPixelRatio(),c=Math.max(16,Math.round(o.width*s)),l=Math.max(16,Math.round(o.height*s));(!$.rt||$.rt.width!==c||$.rt.height!==l)&&($.rt?.dispose(),$.rt=new $t(c,l,{type:_,samples:4}),$.acc=1);let u=n.headWorld.clone();u.y+=.07;let d=t.center.clone(),f=Math.max(.3,u.distanceTo(d)),p=J(Mt.radToDeg(2*Math.atan((t.size*.95+.05)/f)),1.2,50);if($.on||($.look.copy(d),$.fov=p,$.on=!0,$.acc=1),$.look.lerp(d,1-Math.exp(-14*e)),$.fov+=(p-$.fov)*(1-Math.exp(-5*e)),$.acc+=e,$.acc>=1/20){$.acc=0;let e=$.cam;e.position.copy(u),e.fov=$.fov,e.aspect=o.width/o.height,e.updateProjectionMatrix(),e.lookAt($.look);let a=n.model?.visible,s=t.glow?.lines||[],c=s.map(e=>e.visible);n.model&&(n.model.visible=!1);for(let e of s)e.visible=!1;let l=r.shadowMap.autoUpdate,d=Q.scene.matrixWorldAutoUpdate;r.shadowMap.autoUpdate=!1,Q.scene.matrixWorldAutoUpdate=!1,nh(e,o.height),r.setRenderTarget($.rt),r.render(Q.scene,e),r.setRenderTarget(null),nh(i,innerHeight),r.shadowMap.autoUpdate=l,Q.scene.matrixWorldAutoUpdate=d,n.model&&(n.model.visible=a),s.forEach((e,t)=>{e.visible=c[t]})}$.quad||($.qscene=new zn,$.qcam=new Lo(-1,1,1,-1,0,1),$.quad=new di(new xa(2,2),new $r({depthTest:!1,depthWrite:!1})),$.qscene.add($.quad)),$.quad.material.map=$.rt.texture,r.getSize($.size);let m=$.size.y-o.bottom,h=r.autoClear;r.setScissorTest(!0),r.setScissor(o.left,m,o.width,o.height),r.setViewport(o.left,m,o.width,o.height),r.autoClear=!1,r.render($.qscene,$.qcam),r.autoClear=h,r.setScissorTest(!1),r.setViewport(0,0,$.size.x,$.size.y);let g=t.state===`flee`||t.state===`fly`||t.state===`leap`||t.state===`climbing`?`fleeing`:t.aware>.75?`alarmed`:t.aware>.35?`wary`:t.looking?`watching`:`feeding`,v={feeding:`feeding — move`,watching:`watching — freeze`,wary:`wary — freeze`,alarmed:`alarmed — wait`,fleeing:`fleeing`}[g],y=`${t.sp.name.replace(/ \(.*\)$/,``)} · <b class="${g}">${v}</b> · ${Math.hypot(t.pos.x-n.position.x,t.pos.z-n.position.z).toFixed(1)} m`;y!==$.text&&($.label.innerHTML=y,$.text=y)}function wh(e){let t=e.target;if(!(e.dodged||performance.now()-(Q.dodgeAt||0)<1500)){if(t){let e=Th(t),n=t.state===`flee`||t.state===`fly`||t.state===`leap`||t.state===`climbing`||t.state===`gone`?`the ${e} bolted before you landed`:`you fell short of the ${e}: hold the button longer to leap farther`;Q.hud.banner(`MISSED`,n,`miss`),kh(`miss`,n)}else++Q.emptyPounces<=2&&Q.hud.toast(`Nothing in reach: pounce when the bracket locks onto an animal (within about 3.5 m).`,`info`)}}var Th=e=>e.sp.name.replace(/ \(.*\)$/,``).replace(/^(Western|Northern|American|Black-capped|Golden-crowned|Spotted|Pacific) /,``).toLowerCase(),Eh=`martenDunes.coachDone`;function Dh(){try{return localStorage.getItem(Eh)===`1`}catch{return!1}}function Oh(){try{localStorage.setItem(Eh,`1`)}catch{}}function kh(e,t){let n=Q.coach;n&&n.step!==`caught`&&(e===`catch`?(n.step=`caught`,n.t=0):e===`miss`&&(n.step=`missed`,n.t=0,n.why=t,n.misses++))}var Ah={sense:`1 / 4`,track:`2 / 4`,stalk:`3 / 4`,pounce:`4 / 4`},jh=`color:#a8ec98`,Mh=`color:#f5cd6a`,Nh=`color:#ff9a7e`;function Ph(e){let t=Q.coach,n=Q.hud,r=Q.marten;if(!t)return;if(!r.alive){n.coach(null);return}t.t+=e;let i=Q.sense.quarry&&Q.sense.quarry.alive?Q.sense.quarry:null,a=t.vole&&t.vole.alive?t.vole:null,o=e=>{t.step=e,t.t=0},s=``;switch(t.step){case`sense`:if(r.sniffing&&(t.held+=e),i){o(`stalk`);break}if(t.held>.5){o(`track`);break}s=t.again||!a?`Find another animal: <b>hold Q</b> (or the right mouse button) to sense. Hidden animals show as amber shapes through the leaves. You can also listen for rustling <b>( )</b> and songs <b>♪</b>.`:`A <b>red-backed vole</b> is feeding in the litter ahead of you. <b>Hold Q</b> (or the right mouse button) to sense it: hidden animals show as amber shapes through the leaves.`;break;case`track`:if(i){o(`stalk`);break}s=`Keep holding <b>Q</b>, turn until the ${a&&!t.again?`vole`:`animal`} is in the middle of your view, and press <b>R</b> to track it. Its marker stays on screen even when you let go of Q.`;break;case`stalk`:{if(!i){t.again=!0,t.held=0,o(`sense`);break}if(Q.aimTarget){o(`pounce`);break}let e=Math.hypot(i.pos.x-r.position.x,i.pos.z-r.position.z),n=i.state===`flee`||i.state===`fly`||i.state===`leap`?`fleeing`:i.aware>.75?`alarmed`:i.looking?`watching`:`feeding`,a=n===`feeding`?`<b style="${jh}">feeding: move</b>`:n===`watching`?`<b style="${Mh}">watching: freeze!</b>`:`<b style="${Nh}">${n}</b>`;s=`${r.crouching?`Crouched.`:`Press <b>C</b> to crouch.`} Creep closer while it <b>feeds</b> (head down) and <b>freeze</b> while it <b>watches</b> (head up): it notices movement. Its marker says which.<br>Now: ${a} · ${e.toFixed(1)} m away · pounce reach about 3.5 m`;break}case`pounce`:if(r.pouncing)break;if(!Q.aimTarget){i?o(`stalk`):(t.again=!0,t.held=0,o(`sense`));break}s=`In reach! The bracket colour is your chance: <b style="${jh}">green</b>, it hasn't noticed you; <b style="${Mh}">amber</b>, it is watching; <b style="${Nh}">red</b>, alarmed (it will likely dodge). <b>Click</b> to pounce, or <b>hold</b> first to leap farther, as the prompt says.`;break;case`missed`:{let e=i?`It is still tracked: freeze until it calms down, then stalk again.`:`Hold <b>Q</b> to find another.`;s=/fell short/.test(t.why)?`Missed: you fell short. A quick click leaps about 2.5 m; <b>hold</b> the button to coil for up to 4 m, and let go when the prompt says <b>RELEASE</b>. ${e}`:`Missed: ${t.why}. A watching or alarmed animal can dodge, so wait until it feeds (head down) and the bracket is <b style="${jh}">green</b>. ${e}`,t.t>7&&(i?o(`stalk`):(t.again=!0,t.held=0,o(`sense`)));break}case`caught`:if(s=`Caught! Your marten eats as soon as it lands. Stay still until the meal is done: moving stops it, and leftovers are cached. That is the hunt: <b>listen → sense (Q) → track (R) → stalk (C) → pounce</b>.`,t.t>11){Oh(),Q.coach=null,n.coach(null),Q.bobcats.timer=Math.min(Q.bobcats.timer,40);return}}s&&n.coach(s,Ah[t.step]||``)}function Fh(e){let t=Q.tips=Q.tips||{t:0,shown:new Set};t.t+=e;let n=(e,n,r)=>{!t.shown.has(e)&&r&&(t.shown.add(e),Q.hud.toast(n,`info`))},r=Q.marten,i=Q.terrain.habitatAt(r.position.x,r.position.z);n(`hear`,`Listen: ♪ marks a bird singing nearby, ripples mark something rustling. Whatever made the sound glows for a moment, right where it is.`,Q.prey.cues.length>0&&t.t>6),n(`sense`,`Hold Q to sense: animals glow through the leaves, and voles and mice leave a scent trail you can follow.`,t.t>14),n(`track`,`Press R to track the animal in your sights. Its marker, distance and alertness stay on screen, and the leaves thin out between you.`,t.t>24||Q.marten.sniffing&&t.t>16),n(`stalk2`,`Your quarry's bar shows how alert it is. Keep it green: crouch (C), move slowly, stay in cover, then click to pounce.`,!!Q.sense.quarry),n(`flock`,`A flock! Birds in a group feed together and flush together. Get close to one quietly and pounce before they all go.`,Q.prey.flocks.some(e=>e.members.some(e=>e.pos.distanceTo(Q.marten.position)<25))),n(`squirrel`,`Douglas squirrels live in the trees. Climb after one (Space at a trunk) and corner it at the end of a limb.`,Q.prey.list.some(e=>e.state===`tree`&&e.pos.distanceTo(Q.marten.position)<20)),n(`stalk`,`Prey flush if you trot right up to them. Press C to crouch and stalk closer.`,t.t>25||!!Q.spotTarget),n(`pounce`,`Click to pounce at the prey in your reticle; hold the button to coil for a longer leap.`,t.t>50||!!Q.aimTarget),n(`sand`,`Open sand: no cover from bobcats, and off-highway vehicles ride here. Listen for engines and watch for orange whip flags.`,i===q.OPEN_SAND||i===q.BEACH),n(`bobcat`,`A bobcat is hunting you! Dive into dense huckleberry or salal — it cannot follow — or climb high (Space at a trunk).`,Q.bobcats.threat>.5),n(`jays`,`Steller's jays and small birds are scolding something on the ground: they mob predators. A bobcat may be passing. Hold Q: predators show red.`,Q.prey.cues.some(e=>e.bobcat)),n(`distress`,`Your catch squealed, and a bobcat heard it. Prey distress calls draw bobcats: eat in thick cover and keep an ear out for scolding jays.`,Q.bobcats.list.some(e=>e.state===`investigate`)),n(`hungry`,`Your reserves are low and you are slowing down. Ripe huckleberries are a quick, safe meal.`,Q.energy.frac<.3),n(`cache`,`Big prey won't fit in your reserve: the leftovers stay as a cache, marked on your map.`,Q.prey.carcasses.some(e=>e.cached)),n(`climb`,`Up a tree: look along a mossy limb and press W to walk out on it. Space to leap.`,r.climbing)}function Ih(e){let t=Q.terrain.material?.userData?.uniforms;t&&(t.uTime.value+=e,t.uWetness.value=Q.sky.rain)}var Lh=new B(-1,0,0);function Rh(e,t){let n=(t,n)=>e.oceanDistanceAt(t,n),r=n(t.x+30,t.z)-n(t.x-30,t.z),i=n(t.x,t.z+30)-n(t.x,t.z-30),a=Math.hypot(r,i);return a>.001&&Lh.lerp(new B(-r/a,0,-i/a),.05).normalize(),Lh}function zh(e,t){let n=1e9;for(let r=10;r<=220;r+=30)for(let i=0;i<6.28;i+=.8)if(e.waterLevelAt(t.x+Math.cos(i)*r,t.z+Math.sin(i)*r)>-50&&e.habitatAt(t.x+Math.cos(i)*r,t.z+Math.sin(i)*r)!==q.OCEAN&&(n=Math.min(n,r)),n<1e9)return n;return n}function Bh(){let{energy:e,marten:t,stats:n}=Q;Q.state=`dead`,Q.input.exitLock(),Q.hud.show(!1);let r=Q.gameHours/24-K.startHour/24,i=t.deathCause,a={bobcat:`Taken by a bobcat`,ohv:`Struck by an off-highway vehicle`,starvation:`Starved`},o={bobcat:`Bobcats are a known predator of martens. In the Oregon Dunes they are more common in inland forest than in the coastal shrub forest, where the dense, fruit-producing ericaceous understory may give martens a refuge (Eriksson et al. 2019).`,ohv:`Every human-caused death matters for these tiny, isolated populations: Linnell et al. (2018) estimated that just two to three human-caused deaths per year could drive a subpopulation of ~30 martens to extirpation within 30 years.`,starvation:`Martens have high metabolic rates and little fat: a marten needs roughly a quarter of its body weight in food each day — about seven red-backed voles (Eriksson et al. 2019). Fruiting huckleberry and salal help directly, and indirectly by feeding the prey.`};Z(`sum-title`).textContent=a[i]||`Your marten's run has ended`,Z(`sum-cause`).textContent=`${Q.season[0].toUpperCase()+Q.season.slice(1)} · survived ${r.toFixed(1)} days in the Horsfall dunes`;let s=e.dietSummary(Q.season),c=[[`${r.toFixed(1)}`,`days survived`],[`${Math.round(e.totalIn)}`,`kJ eaten`],[`${s.items}`,`prey & carrion eaten`],[`${Math.round(n.berriesG)} g`,`berries eaten`],[`${Math.round(t.distance)} m`,`travelled`],[`${s.scats}`,`scats left`],[`${Math.round(s.kJBy.berry||0)}`,`kJ from fruit`],[`${n.nearMisses}`,`close calls with vehicles`]].map(([e,t])=>`<div class="stat"><b>${e}</b><span>${t}</span></div>`).join(``);Z(`sum-stats`).innerHTML=c;let l=s.rows.slice(0,10);for(let e of s.topReal){if(l.length>=12)break;l.find(t=>t.id===e)||l.push({id:e,name:Lu[e].name,fo:0,rra:0,realFO:Math.min(100,Vu(Lu[e],Q.season)??0),realRRA:Lu[e].rra})}let u=Math.max(25,...l.map(e=>Math.max(e.fo,e.realFO||0))),d=Q.season===`summer`?`no published summer data for comparison`:`real Oregon Dunes martens in ${Q.season} (FO %; Eriksson et al. 2019)`;Z(`sum-diet`).innerHTML=`<div class="legend"><span style="background:#d9a05a"></span>your scats (FO %)<span style="background:#7fa7c9"></span>${d}</div>`+l.map(e=>`<div class="diet-row"><div>${e.name}</div><div class="diet-bars">
      <div class="diet-bar you" style="width:${(e.fo/u*100).toFixed(1)}%" title="${e.fo.toFixed(1)}%"></div>
      <div class="diet-bar real" style="width:${((e.realFO||0)/u*100).toFixed(1)}%" title="${(e.realFO||0).toFixed(1)}%"></div></div></div>`).join(``)+`<p class="tiny">Fruit (huckleberry/salal) appeared in <b>${s.scatsWithFruitPct.toFixed(0)}%</b> of your scats. In Eriksson et al. (2019), fruit occurred in 100% of fall and 86% of winter marten scats (0% in spring).</p>`,Z(`sum-note`).textContent=o[i]||``,dh(`summary`,!0)}window.__step=(e=1,t=1/60)=>{for(let n=0;n<e;n++)Sh(yh+t*1e3)},window.__captureHUD=async e=>{window.__step(1,1/60);let t=document.createElement(`canvas`);t.width=innerWidth,t.height=innerHeight;let n=t.getContext(`2d`);n.drawImage(Q.renderer.domElement,0,0,t.width,t.height),n.drawImage(document.getElementById(`overlay`),0,0,t.width,t.height);let r=document.getElementById(`target-bracket`);if(r.style.display===`block`){let e=r.getBoundingClientRect();n.strokeStyle=`#ffe0a0`,n.setLineDash(r.classList.contains(`spot`)?[5,4]:[]),n.lineWidth=2,n.strokeRect(e.x,e.y,e.width,e.height),n.setLineDash([]),n.font=`13px sans-serif`,n.fillStyle=`#ffe6bf`,n.fillText(document.getElementById(`target-label`).textContent,e.right+6,e.y)}let i=await new Promise(e=>t.toBlob(e,`image/jpeg`,.9));return(await fetch(`/__save?name=`+encodeURIComponent(e),{method:`POST`,body:i})).json()},window.__captureLook=async(e,t,n=10)=>{let{cam:r,camRig:i}=Q,a=i.update,o=r.fov;i.update=function(){r.fov=n,r.updateProjectionMatrix(),r.lookAt(t)},i.update();for(let e of Q.prey.list)Q.prey._animate(e,0);try{return await window.__capture(e,800,600)}finally{i.update=a,r.fov=o,r.updateProjectionMatrix()}},window.__capture=async(e,t=1600,n=900)=>{let{renderer:r,cam:i,scene:a}=Q,o=r.getPixelRatio(),s=new z;r.getSize(s),r.setPixelRatio(1),r.setSize(t,n,!1),i.aspect=t/n,i.updateProjectionMatrix(),nh(i,n);for(let e=0;e<3;e++)Q.veg.update(.016,i,Q.marten.position,Q.sky.cutDistance||900),r.render(a,i);nh(i,innerHeight);let c=await new Promise(e=>r.domElement.toBlob(e,`image/jpeg`,.9));return r.setPixelRatio(o),r.setSize(s.x,s.y,!1),r.domElement.style.width=`100vw`,r.domElement.style.height=`100vh`,i.aspect=innerWidth/innerHeight,i.updateProjectionMatrix(),(await fetch(`/__save?name=`+encodeURIComponent(e),{method:`POST`,body:c})).json()},ph().catch(e=>{console.error(e),fh(1,`Error: `+e.message)});