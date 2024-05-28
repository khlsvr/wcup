"use strict";var Runno=(()=>{var R=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var ue=Object.prototype.hasOwnProperty;var q=(u,e)=>{for(var t in e)R(u,t,{get:e[t],enumerable:!0})},fe=(u,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ae(e))!ue.call(u,i)&&i!==t&&R(u,i,{get:()=>e[i],enumerable:!(r=oe(e,i))||r.enumerable});return u};var be=u=>fe(R({},"__esModule",{value:!0}),u);var ge={};q(ge,{WASI:()=>Z,WASIContext:()=>U,WASISnapshotPreview1:()=>G});var G={};q(G,{Clock:()=>V,EVENT_SIZE:()=>v,EventReadWriteFlags:()=>me,EventType:()=>K,FILESTAT_SIZE:()=>B,FileDescriptorFlags:()=>g,FileStatTimestampFlags:()=>l,FileType:()=>N,LookupFlags:()=>ce,OpenFlags:()=>p,PreopenType:()=>H,Result:()=>F,RightsFlags:()=>h,SUBSCRIPTION_SIZE:()=>L,SubscriptionClockFlags:()=>z,Whence:()=>O});var F=(n=>(n[n.SUCCESS=0]="SUCCESS",n[n.E2BIG=1]="E2BIG",n[n.EACCESS=2]="EACCESS",n[n.EADDRINUSE=3]="EADDRINUSE",n[n.EADDRNOTAVAIL=4]="EADDRNOTAVAIL",n[n.EAFNOSUPPORT=5]="EAFNOSUPPORT",n[n.EAGAIN=6]="EAGAIN",n[n.EALREADY=7]="EALREADY",n[n.EBADF=8]="EBADF",n[n.EBADMSG=9]="EBADMSG",n[n.EBUSY=10]="EBUSY",n[n.ECANCELED=11]="ECANCELED",n[n.ECHILD=12]="ECHILD",n[n.ECONNABORTED=13]="ECONNABORTED",n[n.ECONNREFUSED=14]="ECONNREFUSED",n[n.ECONNRESET=15]="ECONNRESET",n[n.EDEADLK=16]="EDEADLK",n[n.EDESTADDRREQ=17]="EDESTADDRREQ",n[n.EDOM=18]="EDOM",n[n.EDQUOT=19]="EDQUOT",n[n.EEXIST=20]="EEXIST",n[n.EFAULT=21]="EFAULT",n[n.EFBIG=22]="EFBIG",n[n.EHOSTUNREACH=23]="EHOSTUNREACH",n[n.EIDRM=24]="EIDRM",n[n.EILSEQ=25]="EILSEQ",n[n.EINPROGRESS=26]="EINPROGRESS",n[n.EINTR=27]="EINTR",n[n.EINVAL=28]="EINVAL",n[n.EIO=29]="EIO",n[n.EISCONN=30]="EISCONN",n[n.EISDIR=31]="EISDIR",n[n.ELOOP=32]="ELOOP",n[n.EMFILE=33]="EMFILE",n[n.EMLINK=34]="EMLINK",n[n.EMSGSIZE=35]="EMSGSIZE",n[n.EMULTIHOP=36]="EMULTIHOP",n[n.ENAMETOOLONG=37]="ENAMETOOLONG",n[n.ENETDOWN=38]="ENETDOWN",n[n.ENETRESET=39]="ENETRESET",n[n.ENETUNREACH=40]="ENETUNREACH",n[n.ENFILE=41]="ENFILE",n[n.ENOBUFS=42]="ENOBUFS",n[n.ENODEV=43]="ENODEV",n[n.ENOENT=44]="ENOENT",n[n.ENOEXEC=45]="ENOEXEC",n[n.ENOLCK=46]="ENOLCK",n[n.ENOLINK=47]="ENOLINK",n[n.ENOMEM=48]="ENOMEM",n[n.ENOMSG=49]="ENOMSG",n[n.ENOPROTOOPT=50]="ENOPROTOOPT",n[n.ENOSPC=51]="ENOSPC",n[n.ENOSYS=52]="ENOSYS",n[n.ENOTCONN=53]="ENOTCONN",n[n.ENOTDIR=54]="ENOTDIR",n[n.ENOTEMPTY=55]="ENOTEMPTY",n[n.ENOTRECOVERABLE=56]="ENOTRECOVERABLE",n[n.ENOTSOCK=57]="ENOTSOCK",n[n.ENOTSUP=58]="ENOTSUP",n[n.ENOTTY=59]="ENOTTY",n[n.ENXIO=60]="ENXIO",n[n.EOVERFLOW=61]="EOVERFLOW",n[n.EOWNERDEAD=62]="EOWNERDEAD",n[n.EPERM=63]="EPERM",n[n.EPIPE=64]="EPIPE",n[n.EPROTO=65]="EPROTO",n[n.EPROTONOSUPPORT=66]="EPROTONOSUPPORT",n[n.EPROTOTYPE=67]="EPROTOTYPE",n[n.ERANGE=68]="ERANGE",n[n.EROFS=69]="EROFS",n[n.ESPIPE=70]="ESPIPE",n[n.ESRCH=71]="ESRCH",n[n.ESTALE=72]="ESTALE",n[n.ETIMEDOUT=73]="ETIMEDOUT",n[n.ETXTBSY=74]="ETXTBSY",n[n.EXDEV=75]="EXDEV",n[n.ENOTCAPABLE=76]="ENOTCAPABLE",n))(F||{}),V=(i=>(i[i.REALTIME=0]="REALTIME",i[i.MONOTONIC=1]="MONOTONIC",i[i.PROCESS_CPUTIME_ID=2]="PROCESS_CPUTIME_ID",i[i.THREAD_CPUTIME_ID=3]="THREAD_CPUTIME_ID",i))(V||{}),O=(r=>(r[r.SET=0]="SET",r[r.CUR=1]="CUR",r[r.END=2]="END",r))(O||{}),N=(a=>(a[a.UNKNOWN=0]="UNKNOWN",a[a.BLOCK_DEVICE=1]="BLOCK_DEVICE",a[a.CHARACTER_DEVICE=2]="CHARACTER_DEVICE",a[a.DIRECTORY=3]="DIRECTORY",a[a.REGULAR_FILE=4]="REGULAR_FILE",a[a.SOCKET_DGRAM=5]="SOCKET_DGRAM",a[a.SOCKET_STREAM=6]="SOCKET_STREAM",a[a.SYMBOLIC_LINK=7]="SYMBOLIC_LINK",a))(N||{}),H=(e=>(e[e.DIR=0]="DIR",e))(H||{}),K=(r=>(r[r.CLOCK=0]="CLOCK",r[r.FD_READ=1]="FD_READ",r[r.FD_WRITE=2]="FD_WRITE",r))(K||{}),ce={SYMLINK_FOLLOW:1},p={CREAT:1,DIRECTORY:2,EXCL:4,TRUNC:8},g={APPEND:1,DSYNC:2,NONBLOCK:4,RSYNC:8,SYNC:16},h={FD_DATASYNC:BigInt(1)<<BigInt(0),FD_READ:BigInt(1)<<BigInt(1),FD_SEEK:BigInt(1)<<BigInt(2),FD_FDSTAT_SET_FLAGS:BigInt(1)<<BigInt(3),FD_SYNC:BigInt(1)<<BigInt(4),FD_TELL:BigInt(1)<<BigInt(5),FD_WRITE:BigInt(1)<<BigInt(6),FD_ADVISE:BigInt(1)<<BigInt(7),FD_ALLOCATE:BigInt(1)<<BigInt(8),PATH_CREATE_DIRECTORY:BigInt(1)<<BigInt(9),PATH_CREATE_FILE:BigInt(1)<<BigInt(10),PATH_LINK_SOURCE:BigInt(1)<<BigInt(11),PATH_LINK_TARGET:BigInt(1)<<BigInt(12),PATH_OPEN:BigInt(1)<<BigInt(13),FD_READDIR:BigInt(1)<<BigInt(14),PATH_READLINK:BigInt(1)<<BigInt(15),PATH_RENAME_SOURCE:BigInt(1)<<BigInt(16),PATH_RENAME_TARGET:BigInt(1)<<BigInt(17),PATH_FILESTAT_GET:BigInt(1)<<BigInt(18),PATH_FILESTAT_SET_SIZE:BigInt(1)<<BigInt(19),PATH_FILESTAT_SET_TIMES:BigInt(1)<<BigInt(20),FD_FILESTAT_GET:BigInt(1)<<BigInt(21),FD_FILESTAT_SET_SIZE:BigInt(1)<<BigInt(22),FD_FILESTAT_SET_TIMES:BigInt(1)<<BigInt(23),PATH_SYMLINK:BigInt(1)<<BigInt(24),PATH_REMOVE_DIRECTORY:BigInt(1)<<BigInt(25),PATH_UNLINK_FILE:BigInt(1)<<BigInt(26),POLL_FD_READWRITE:BigInt(1)<<BigInt(27),SOCK_SHUTDOWN:BigInt(1)<<BigInt(28),SOCK_ACCEPT:BigInt(1)<<BigInt(29)},l={ATIM:1,ATIM_NOW:2,MTIM:4,MTIM_NOW:8},z={SUBSCRIPTION_CLOCK_ABSTIME:1},me={FD_READWRITE_HANGUP:1},B=64,L=48,v=32;var U=class{constructor(e){this.fs=e?.fs??{},this.args=e?.args??[],this.env=e?.env??{},this.stdin=e?.stdin??(()=>null),this.stdout=e?.stdout??(()=>{}),this.stderr=e?.stderr??(()=>{}),this.debug=e?.debug,this.isTTY=!!e?.isTTY}};var P=class{constructor(e){this.nextFD=10;this.openMap=new Map;this.fs={...e},this.openMap.set(3,new _(this.fs,"/"))}openFile(e,t,r){let i=new S(e,r);t&&(i.buffer=new Uint8Array(new ArrayBuffer(1024),0,0));let s=this.nextFD;return this.openMap.set(s,i),this.nextFD++,[0,s]}openDir(e,t){let r=new _(e,t),i=this.nextFD;return this.openMap.set(i,r),this.nextFD++,[0,i]}hasDir(e,t){return t==="."?!0:e.containsDirectory(t)}open(e,t,r,i){let s=!!(r&p.CREAT),o=!!(r&p.DIRECTORY),f=!!(r&p.EXCL),a=!!(r&p.TRUNC),b=this.openMap.get(e);if(!(b instanceof _))return[8];if(b.containsFile(t))return o?[54]:f?[20]:this.openFile(b.get(t),a,i);if(this.hasDir(b,t)){if(t===".")return this.openDir(this.fs,"/");let c=`/${t}/`,m=Object.entries(this.fs).filter(([d])=>d.startsWith(c));return this.openDir(Object.fromEntries(m),c)}else{if(s){let c=b.fullPath(t);return this.fs[c]={path:c,mode:"binary",content:new Uint8Array,timestamps:{access:new Date,modification:new Date,change:new Date}},this.openFile(this.fs[c],a,i)}return[76]}}close(e){if(!this.openMap.has(e))return 8;let t=this.openMap.get(e);return t instanceof S&&t.sync(),this.openMap.delete(e),0}read(e,t){let r=this.openMap.get(e);return!r||r instanceof _?[8]:[0,r.read(t)]}pread(e,t,r){let i=this.openMap.get(e);return!i||i instanceof _?[8]:[0,i.pread(t,r)]}write(e,t){let r=this.openMap.get(e);return!r||r instanceof _?8:(r.write(t),0)}pwrite(e,t,r){let i=this.openMap.get(e);return!i||i instanceof _?8:(i.pwrite(t,r),0)}sync(e){let t=this.openMap.get(e);return!t||t instanceof _?8:(t.sync(),0)}seek(e,t,r){let i=this.openMap.get(e);return!i||i instanceof _?[8]:[0,i.seek(t,r)]}tell(e){let t=this.openMap.get(e);return!t||t instanceof _?[8]:[0,t.tell()]}renumber(e,t){return!this.exists(e)||!this.exists(t)?8:e===t?0:(this.close(t),this.openMap.set(t,this.openMap.get(e)),0)}unlink(e,t){let r=this.openMap.get(e);if(!(r instanceof _))return 8;if(!r.contains(t))return 44;for(let i of Object.keys(this.fs))(i===r.fullPath(t)||i.startsWith(`${r.fullPath(t)}/`))&&delete this.fs[i];return 0}rename(e,t,r,i){let s=this.openMap.get(e),o=this.openMap.get(r);if(!(s instanceof _)||!(o instanceof _))return 8;if(!s.contains(t))return 44;if(o.contains(i))return 20;let f=s.fullPath(t),a=o.fullPath(i);for(let b of Object.keys(this.fs))if(b.startsWith(f)){let c=b.replace(f,a);this.fs[c]=this.fs[b],this.fs[c].path=c,delete this.fs[b]}return 0}list(e){let t=this.openMap.get(e);return t instanceof _?[0,t.list()]:[8]}stat(e){let t=this.openMap.get(e);return t instanceof S?[0,t.stat()]:[8]}pathStat(e,t){let r=this.openMap.get(e);if(!(r instanceof _))return[8];if(r.containsFile(t)){let i=r.fullPath(t),s=new S(this.fs[i],0).stat();return[0,s]}else if(this.hasDir(r,t)){if(t===".")return[0,new _(this.fs,"/").stat()];let i=`/${t}/`,s=Object.entries(this.fs).filter(([f])=>f.startsWith(i)),o=new _(Object.fromEntries(s),i).stat();return[0,o]}else return[76]}setFlags(e,t){let r=this.openMap.get(e);return r instanceof S?(r.setFlags(t),0):8}setSize(e,t){let r=this.openMap.get(e);return r instanceof S?(r.setSize(Number(t)),0):8}setAccessTime(e,t){let r=this.openMap.get(e);return r instanceof S?(r.setAccessTime(t),0):8}setModificationTime(e,t){let r=this.openMap.get(e);return r instanceof S?(r.setModificationTime(t),0):8}pathSetAccessTime(e,t,r){let i=this.openMap.get(e);if(!(i instanceof _))return 8;let s=i.get(t);if(!s)return 76;let o=new S(s,0);return o.setAccessTime(r),o.sync(),0}pathSetModificationTime(e,t,r){let i=this.openMap.get(e);if(!(i instanceof _))return 8;let s=i.get(t);if(!s)return 76;let o=new S(s,0);return o.setModificationTime(r),o.sync(),0}pathCreateDir(e,t){let r=this.openMap.get(e);if(!(r instanceof _))return 8;if(r.contains(t))return 76;let i=`${r.fullPath(t)}/.runno`;return this.fs[i]={path:i,timestamps:{access:new Date,modification:new Date,change:new Date},mode:"string",content:""},0}exists(e){return this.openMap.has(e)}fileType(e){let t=this.openMap.get(e);return t?t instanceof S?4:3:0}fileFdflags(e){let t=this.openMap.get(e);return t instanceof S?t.fdflags:0}},S=class{constructor(e,t){this._offset=BigInt(0);this.isDirty=!1;if(this.file=e,this.file.mode==="string"){let r=new TextEncoder;this.buffer=r.encode(this.file.content)}else this.buffer=this.file.content;this.fdflags=t,this.flagAppend=!!(t&g.APPEND),this.flagDSync=!!(t&g.DSYNC),this.flagNonBlock=!!(t&g.NONBLOCK),this.flagRSync=!!(t&g.RSYNC),this.flagSync=!!(t&g.SYNC)}get offset(){return Number(this._offset)}read(e){let t=this.buffer.subarray(this.offset,this.offset+e);return this._offset+=BigInt(t.length),t}pread(e,t){return this.buffer.subarray(t,t+e)}write(e){if(this.isDirty=!0,this.flagAppend){let t=this.buffer.length;this.resize(t+e.byteLength),this.buffer.set(e,t)}else{let t=Math.max(this.offset+e.byteLength,this.buffer.byteLength);this.resize(t),this.buffer.set(e,this.offset),this._offset+=BigInt(e.byteLength)}(this.flagDSync||this.flagSync)&&this.sync()}pwrite(e,t){if(this.isDirty=!0,this.flagAppend){let r=this.buffer.length;this.resize(r+e.byteLength),this.buffer.set(e,r)}else{let r=Math.max(t+e.byteLength,this.buffer.byteLength);this.resize(r),this.buffer.set(e,t)}(this.flagDSync||this.flagSync)&&this.sync()}sync(){if(!this.isDirty)return;if(this.isDirty=!1,this.file.mode==="binary"){this.file.content=new Uint8Array(this.buffer);return}let e=new TextDecoder;this.file.content=e.decode(this.buffer)}seek(e,t){switch(t){case 0:this._offset=e;break;case 1:this._offset+=e;break;case 2:this._offset=BigInt(this.buffer.length)+e;break}return this._offset}tell(){return this._offset}stat(){return{path:this.file.path,timestamps:this.file.timestamps,type:4,byteLength:this.buffer.length}}setFlags(e){this.fdflags=e}setSize(e){this.resize(e)}setAccessTime(e){this.file.timestamps.access=e}setModificationTime(e){this.file.timestamps.modification=e}resize(e){if(e<=this.buffer.buffer.byteLength){this.buffer=new Uint8Array(this.buffer.buffer,0,e);return}let t;this.buffer.buffer.byteLength===0?t=new ArrayBuffer(e<1024?1024:e*2):e>this.buffer.buffer.byteLength*2?t=new ArrayBuffer(e*2):t=new ArrayBuffer(this.buffer.buffer.byteLength*2);let r=new Uint8Array(t,0,e);r.set(this.buffer),this.buffer=r}};function M(u,e){let t=e.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&"),r=new RegExp(`^${t}`);return u.replace(r,"")}var _=class{constructor(e,t){this.dir=e,this.prefix=t}containsFile(e){for(let t of Object.keys(this.dir))if(M(t,this.prefix)===e)return!0;return!1}containsDirectory(e){for(let t of Object.keys(this.dir))if(M(t,this.prefix).startsWith(`${e}/`))return!0;return!1}contains(e){for(let t of Object.keys(this.dir)){let r=M(t,this.prefix);if(r===e||r.startsWith(`${e}/`))return!0}return!1}get(e){return this.dir[this.fullPath(e)]}fullPath(e){return`${this.prefix}${e}`}list(){let e=[],t=new Set;for(let r of Object.keys(this.dir)){let i=M(r,this.prefix);if(i.includes("/")){let s=i.split("/")[0];if(t.has(s))continue;t.add(s),e.push({name:s,type:3})}else e.push({name:i,type:4})}return e}stat(){return{path:this.prefix,timestamps:{access:new Date,modification:new Date,change:new Date},type:3,byteLength:0}}};var j=[];function A(u){j.push(u)}function he(){let u=j;return j=[],u}var Z=class u{static async start(e,t={}){let r=new u(t),i=await WebAssembly.instantiateStreaming(e,r.getImportObject());return r.start(i)}constructor(e){this.context=new U(e),this.drive=new P(this.context.fs)}getImportObject(){return{wasi_snapshot_preview1:this.getImports("preview1",this.context.debug),wasi_unstable:this.getImports("unstable",this.context.debug)}}start(e,t={}){this.instance=e.instance,this.module=e.module,this.memory=t.memory??this.instance.exports.memory;let r=this.instance.exports._start;try{r()}catch(i){if(i instanceof x)return{exitCode:i.code,fs:this.drive.fs};if(i instanceof WebAssembly.RuntimeError)return{exitCode:134,fs:this.drive.fs};throw i}return{exitCode:0,fs:this.drive.fs}}getImports(e,t){let r={args_get:this.args_get.bind(this),args_sizes_get:this.args_sizes_get.bind(this),clock_res_get:this.clock_res_get.bind(this),clock_time_get:this.clock_time_get.bind(this),environ_get:this.environ_get.bind(this),environ_sizes_get:this.environ_sizes_get.bind(this),proc_exit:this.proc_exit.bind(this),random_get:this.random_get.bind(this),sched_yield:this.sched_yield.bind(this),fd_advise:this.fd_advise.bind(this),fd_allocate:this.fd_allocate.bind(this),fd_close:this.fd_close.bind(this),fd_datasync:this.fd_datasync.bind(this),fd_fdstat_get:this.fd_fdstat_get.bind(this),fd_fdstat_set_flags:this.fd_fdstat_set_flags.bind(this),fd_fdstat_set_rights:this.fd_fdstat_set_rights.bind(this),fd_filestat_get:this.fd_filestat_get.bind(this),fd_filestat_set_size:this.fd_filestat_set_size.bind(this),fd_filestat_set_times:this.fd_filestat_set_times.bind(this),fd_pread:this.fd_pread.bind(this),fd_prestat_dir_name:this.fd_prestat_dir_name.bind(this),fd_prestat_get:this.fd_prestat_get.bind(this),fd_pwrite:this.fd_pwrite.bind(this),fd_read:this.fd_read.bind(this),fd_readdir:this.fd_readdir.bind(this),fd_renumber:this.fd_renumber.bind(this),fd_seek:this.fd_seek.bind(this),fd_sync:this.fd_sync.bind(this),fd_tell:this.fd_tell.bind(this),fd_write:this.fd_write.bind(this),path_filestat_get:this.path_filestat_get.bind(this),path_filestat_set_times:this.path_filestat_set_times.bind(this),path_open:this.path_open.bind(this),path_rename:this.path_rename.bind(this),path_unlink_file:this.path_unlink_file.bind(this),path_create_directory:this.path_create_directory.bind(this),path_link:this.path_link.bind(this),path_readlink:this.path_readlink.bind(this),path_remove_directory:this.path_remove_directory.bind(this),path_symlink:this.path_symlink.bind(this),poll_oneoff:this.poll_oneoff.bind(this),proc_raise:this.proc_raise.bind(this),sock_accept:this.sock_accept.bind(this),sock_recv:this.sock_recv.bind(this),sock_send:this.sock_send.bind(this),sock_shutdown:this.sock_shutdown.bind(this),sock_open:this.sock_open.bind(this),sock_listen:this.sock_listen.bind(this),sock_connect:this.sock_connect.bind(this),sock_setsockopt:this.sock_setsockopt.bind(this),sock_bind:this.sock_bind.bind(this),sock_getlocaladdr:this.sock_getlocaladdr.bind(this),sock_getpeeraddr:this.sock_getpeeraddr.bind(this),sock_getaddrinfo:this.sock_getaddrinfo.bind(this)};e==="unstable"&&(r.path_filestat_get=this.unstable_path_filestat_get.bind(this),r.fd_filestat_get=this.unstable_fd_filestat_get.bind(this),r.fd_seek=this.unstable_fd_seek.bind(this));for(let[i,s]of Object.entries(r))r[i]=function(){let o=s.apply(this,arguments);if(t){let f=he();o=t(i,[...arguments],o,f)??o}return o};return r}get envArray(){return Object.entries(this.context.env).map(([e,t])=>`${e}=${t}`)}args_get(e,t){let r=new DataView(this.memory.buffer);for(let i of this.context.args){r.setUint32(e,t,!0),e+=4;let s=new TextEncoder().encode(`${i}\0`);new Uint8Array(this.memory.buffer,t,s.byteLength).set(s),t+=s.byteLength}return 0}args_sizes_get(e,t){let r=this.context.args,i=r.reduce((o,f)=>o+new TextEncoder().encode(`${f}\0`).byteLength,0),s=new DataView(this.memory.buffer);return s.setUint32(e,r.length,!0),s.setUint32(t,i,!0),0}clock_res_get(e,t){switch(e){case 0:case 1:case 2:case 3:return new DataView(this.memory.buffer).setBigUint64(t,BigInt(1e6),!0),0}return 28}clock_time_get(e,t,r){switch(e){case 0:case 1:case 2:case 3:return new DataView(this.memory.buffer).setBigUint64(r,y(new Date),!0),0}return 28}environ_get(e,t){let r=new DataView(this.memory.buffer);for(let i of this.envArray){r.setUint32(e,t,!0),e+=4;let s=new TextEncoder().encode(`${i}\0`);new Uint8Array(this.memory.buffer,t,s.byteLength).set(s),t+=s.byteLength}return 0}environ_sizes_get(e,t){let r=this.envArray.reduce((s,o)=>s+new TextEncoder().encode(`${o}\0`).byteLength,0),i=new DataView(this.memory.buffer);return i.setUint32(e,this.envArray.length,!0),i.setUint32(t,r,!0),0}proc_exit(e){throw new x(e)}random_get(e,t){let r=new Uint8Array(this.memory.buffer,e,t);return globalThis.crypto.getRandomValues(r),0}sched_yield(){return 0}fd_read(e,t,r,i){if(e===1||e===2)return 58;let s=new DataView(this.memory.buffer),o=k(s,t,r),f=new TextEncoder,a=0,b=0;for(let c of o){let m;if(e===0){let E=this.context.stdin(c.byteLength);if(!E)break;m=f.encode(E)}else{let[E,C]=this.drive.read(e,c.byteLength);if(E){b=E;break}else m=C}let d=Math.min(c.byteLength,m.byteLength);c.set(m.subarray(0,d)),a+=d}return A({bytesRead:a}),s.setUint32(i,a,!0),b}fd_write(e,t,r,i){if(e===0)return 58;let s=new DataView(this.memory.buffer),o=k(s,t,r),f=new TextDecoder,a=0,b=0;for(let c of o)if(c.byteLength!==0){if(e===1||e===2){let m=e===1?this.context.stdout:this.context.stderr,d=f.decode(c);m(d),A({output:d})}else if(b=this.drive.write(e,c),b!=0)break;a+=c.byteLength}return s.setUint32(i,a,!0),b}fd_advise(){return 0}fd_allocate(e,t,r){return this.drive.pwrite(e,new Uint8Array(Number(r)),Number(t))}fd_close(e){return this.drive.close(e)}fd_datasync(e){return this.drive.sync(e)}fd_fdstat_get(e,t){if(e<3){let f;if(this.context.isTTY){let b=X^h.FD_SEEK^h.FD_TELL;f=$(2,0,b)}else f=$(2,0);return new Uint8Array(this.memory.buffer,t,f.byteLength).set(f),0}if(!this.drive.exists(e))return 8;let r=this.drive.fileType(e),i=this.drive.fileFdflags(e),s=$(r,i);return new Uint8Array(this.memory.buffer,t,s.byteLength).set(s),0}fd_fdstat_set_flags(e,t){return this.drive.setFlags(e,t)}fd_fdstat_set_rights(){return 0}fd_filestat_get(e,t){return this.shared_fd_filestat_get(e,t,"preview1")}unstable_fd_filestat_get(e,t){return this.shared_fd_filestat_get(e,t,"unstable")}shared_fd_filestat_get(e,t,r){let i=r==="unstable"?te:ee;if(e<3){let b;switch(e){case 0:b="/dev/stdin";break;case 1:b="/dev/stdout";break;case 2:b="/dev/stderr";break;default:b="/dev/undefined";break}let c=i({path:b,byteLength:0,timestamps:{access:new Date,modification:new Date,change:new Date},type:2});return new Uint8Array(this.memory.buffer,t,c.byteLength).set(c),0}let[s,o]=this.drive.stat(e);if(s!=0)return s;A({resolvedPath:o.path,stat:o});let f=i(o);return new Uint8Array(this.memory.buffer,t,f.byteLength).set(f),0}fd_filestat_set_size(e,t){return this.drive.setSize(e,t)}fd_filestat_set_times(e,t,r,i){let s=null;i&l.ATIM&&(s=I(t)),i&l.ATIM_NOW&&(s=new Date);let o=null;if(i&l.MTIM&&(o=I(r)),i&l.MTIM_NOW&&(o=new Date),s){let f=this.drive.setAccessTime(e,s);if(f!=0)return f}if(o){let f=this.drive.setModificationTime(e,o);if(f!=0)return f}return 0}fd_pread(e,t,r,i,s){if(e===1||e===2)return 58;if(e===0)return this.fd_read(e,t,r,s);let o=new DataView(this.memory.buffer),f=k(o,t,r),a=0,b=0;for(let c of f){let[m,d]=this.drive.pread(e,c.byteLength,Number(i)+a);if(m!==0){b=m;break}let E=Math.min(c.byteLength,d.byteLength);c.set(d.subarray(0,E)),a+=E}return o.setUint32(s,a,!0),b}fd_prestat_dir_name(e,t,r){if(e!==3)return 8;let i=new TextEncoder().encode("/");return new Uint8Array(this.memory.buffer,t,r).set(i.subarray(0,r)),0}fd_prestat_get(e,t){if(e!==3)return 8;let r=new TextEncoder().encode("."),i=new DataView(this.memory.buffer,t);return i.setUint8(0,0),i.setUint32(4,r.byteLength,!0),0}fd_pwrite(e,t,r,i,s){if(e===0)return 58;if(e===1||e===2)return this.fd_write(e,t,r,s);let o=new DataView(this.memory.buffer),f=k(o,t,r),a=0,b=0;for(let c of f)if(c.byteLength!==0){if(b=this.drive.pwrite(e,c,Number(i)),b!=0)break;a+=c.byteLength}return o.setUint32(s,a,!0),b}fd_readdir(e,t,r,i,s){let[o,f]=this.drive.list(e);if(o!=0)return o;let a=[],b=0;for(let{name:D,type:T}of f){let W=de(D,T,b);a.push(W),b++}a=a.slice(Number(i));let c=a.reduce((D,T)=>D+T.byteLength,0),m=new Uint8Array(c),d=0;for(let D of a)m.set(D,d),d+=D.byteLength;let E=new Uint8Array(this.memory.buffer,t,r),C=m.subarray(0,r);return E.set(C),new DataView(this.memory.buffer).setUint32(s,C.byteLength,!0),0}fd_renumber(e,t){return this.drive.renumber(e,t)}fd_seek(e,t,r,i){let[s,o]=this.drive.seek(e,t,r);return s!==0||(A({newOffset:o.toString()}),new DataView(this.memory.buffer).setBigUint64(i,o,!0)),s}unstable_fd_seek(e,t,r,i){let s=Se[r];return this.fd_seek(e,t,s,i)}fd_sync(e){return this.drive.sync(e)}fd_tell(e,t){let[r,i]=this.drive.tell(e);return r!==0||new DataView(this.memory.buffer).setBigUint64(t,i,!0),r}path_filestat_get(e,t,r,i,s){return this.shared_path_filestat_get(e,t,r,i,s,"preview1")}unstable_path_filestat_get(e,t,r,i,s){return this.shared_path_filestat_get(e,t,r,i,s,"unstable")}shared_path_filestat_get(e,t,r,i,s,o){let f=o==="unstable"?te:ee,a=new TextDecoder().decode(new Uint8Array(this.memory.buffer,r,i));A({path:a});let[b,c]=this.drive.pathStat(e,a);if(b!=0)return b;let m=f(c);return new Uint8Array(this.memory.buffer,s,m.byteLength).set(m),b}path_filestat_set_times(e,t,r,i,s,o,f){let a=null;f&l.ATIM&&(a=I(s)),f&l.ATIM_NOW&&(a=new Date);let b=null;f&l.MTIM&&(b=I(o)),f&l.MTIM_NOW&&(b=new Date);let c=new TextDecoder().decode(new Uint8Array(this.memory.buffer,r,i));if(a){let m=this.drive.pathSetAccessTime(e,c,a);if(m!=0)return m}if(b){let m=this.drive.pathSetModificationTime(e,c,b);if(m!=0)return m}return 0}path_open(e,t,r,i,s,o,f,a,b){let c=new DataView(this.memory.buffer),m=w(this.memory,r,i),d=!!(s&p.CREAT),E=!!(s&p.DIRECTORY),C=!!(s&p.EXCL),J=!!(s&p.TRUNC),D=!!(a&g.APPEND),T=!!(a&g.DSYNC),W=!!(a&g.NONBLOCK),ne=!!(a&g.RSYNC),ie=!!(a&g.SYNC);A({path:m,openFlags:{createFileIfNone:d,failIfNotDir:E,failIfFileExists:C,truncateFile:J},fileDescriptorFlags:{flagAppend:D,flagDSync:T,flagNonBlock:W,flagRSync:ne,flagSync:ie}});let[Y,se]=this.drive.open(e,m,s,a);return Y||(c.setUint32(b,se,!0),Y)}path_rename(e,t,r,i,s,o){let f=w(this.memory,t,r),a=w(this.memory,s,o);return A({oldPath:f,newPath:a}),this.drive.rename(e,f,i,a)}path_unlink_file(e,t,r){let i=w(this.memory,t,r);return A({path:i}),this.drive.unlink(e,i)}poll_oneoff(e,t,r,i){for(let o=0;o<r;o++){let f=new Uint8Array(this.memory.buffer,e+o*L,L),a=_e(f),b=new Uint8Array(this.memory.buffer,t+o*v,v),c=0,m=0;switch(a.type){case 0:for(;new Date<a.timeout;);b.set(Ee(a.userdata,0));break;case 1:if(a.fd<3)a.fd===0?(m=0,c=32):m=8;else{let[d,E]=this.drive.stat(a.fd);m=d,c=E?E.byteLength:0}b.set(re(a.userdata,m,1,BigInt(c)));break;case 2:if(c=0,m=0,a.fd<3)a.fd===0?m=8:(m=0,c=1024);else{let[d,E]=this.drive.stat(a.fd);m=d,c=E?E.byteLength:0}b.set(re(a.userdata,m,1,BigInt(c)));break}}return new DataView(this.memory.buffer,i,4).setUint32(0,r,!0),0}path_create_directory(e,t,r){let i=w(this.memory,t,r);return this.drive.pathCreateDir(e,i)}path_link(){return 52}path_readlink(){return 52}path_remove_directory(){return 52}path_symlink(){return 52}proc_raise(){return 52}sock_accept(){return 52}sock_recv(){return 52}sock_send(){return 52}sock_shutdown(){return 52}sock_open(){return 52}sock_listen(){return 52}sock_connect(){return 52}sock_setsockopt(){return 52}sock_bind(){return 52}sock_getlocaladdr(){return 52}sock_getpeeraddr(){return 52}sock_getaddrinfo(){return 52}},X=h.FD_DATASYNC|h.FD_READ|h.FD_SEEK|h.FD_FDSTAT_SET_FLAGS|h.FD_SYNC|h.FD_TELL|h.FD_WRITE|h.FD_ADVISE|h.FD_ALLOCATE|h.PATH_CREATE_DIRECTORY|h.PATH_CREATE_FILE|h.PATH_LINK_SOURCE|h.PATH_LINK_TARGET|h.PATH_OPEN|h.FD_READDIR|h.PATH_READLINK|h.PATH_RENAME_SOURCE|h.PATH_RENAME_TARGET|h.PATH_FILESTAT_GET|h.PATH_FILESTAT_SET_SIZE|h.PATH_FILESTAT_SET_TIMES|h.FD_FILESTAT_GET|h.FD_FILESTAT_SET_SIZE|h.FD_FILESTAT_SET_TIMES|h.PATH_SYMLINK|h.PATH_REMOVE_DIRECTORY|h.PATH_UNLINK_FILE|h.POLL_FD_READWRITE|h.SOCK_SHUTDOWN|h.SOCK_ACCEPT,x=class extends Error{constructor(e){super(),this.code=e}};function w(u,e,t){return new TextDecoder().decode(new Uint8Array(u.buffer,e,t))}function k(u,e,t){let r=Array(t);for(let i=0;i<t;i++){let s=u.getUint32(e,!0);e+=4;let o=u.getUint32(e,!0);e+=4,r[i]=new Uint8Array(u.buffer,s,o)}return r}function _e(u){let e=new Uint8Array(8);e.set(u.subarray(0,8));let t=u[8],r=new DataView(u.buffer,u.byteOffset+9);switch(t){case 1:case 2:return{userdata:e,type:t,fd:r.getUint32(0,!0)};case 0:let i=r.getUint16(24,!0),s=y(new Date),o=r.getBigUint64(8,!0),f=r.getBigUint64(16,!0),a=i&z.SUBSCRIPTION_CLOCK_ABSTIME?o:s+o;return{userdata:e,type:t,id:r.getUint32(0,!0),timeout:I(a),precision:I(a+f)}}}function ee(u){let e=new Uint8Array(B),t=new DataView(e.buffer);return t.setBigUint64(0,BigInt(0),!0),t.setBigUint64(8,BigInt(Q(u.path)),!0),t.setUint8(16,u.type),t.setBigUint64(24,BigInt(1),!0),t.setBigUint64(32,BigInt(u.byteLength),!0),t.setBigUint64(40,y(u.timestamps.access),!0),t.setBigUint64(48,y(u.timestamps.modification),!0),t.setBigUint64(56,y(u.timestamps.change),!0),e}function te(u){let e=new Uint8Array(B),t=new DataView(e.buffer);return t.setBigUint64(0,BigInt(0),!0),t.setBigUint64(8,BigInt(Q(u.path)),!0),t.setUint8(16,u.type),t.setUint32(20,1,!0),t.setBigUint64(24,BigInt(u.byteLength),!0),t.setBigUint64(32,y(u.timestamps.access),!0),t.setBigUint64(40,y(u.timestamps.modification),!0),t.setBigUint64(48,y(u.timestamps.change),!0),e}function $(u,e,t){let r=t??X,i=t??X,s=new Uint8Array(24),o=new DataView(s.buffer,0,24);return o.setUint8(0,u),o.setUint32(2,e,!0),o.setBigUint64(8,r,!0),o.setBigUint64(16,i,!0),s}function de(u,e,t){let r=new TextEncoder().encode(u),i=24+r.byteLength,s=new Uint8Array(i),o=new DataView(s.buffer);return o.setBigUint64(0,BigInt(t+1),!0),o.setBigUint64(8,BigInt(Q(u)),!0),o.setUint32(16,r.length,!0),o.setUint8(20,e),s.set(r,24),s}function Ee(u,e){let t=new Uint8Array(32);t.set(u,0);let r=new DataView(t.buffer);return r.setUint16(8,e,!0),r.setUint16(10,0,!0),t}function re(u,e,t,r){let i=new Uint8Array(32);i.set(u,0);let s=new DataView(i.buffer);return s.setUint16(8,e,!0),s.setUint16(10,t,!0),s.setBigUint64(16,r,!0),i}function Q(u,e=0){let t=3735928559^e,r=1103547991^e;for(let i=0,s;i<u.length;i++)s=u.charCodeAt(i),t=Math.imul(t^s,2654435761),r=Math.imul(r^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&r)+(t>>>0)}function y(u){return BigInt(u.getTime())*BigInt(1e6)}function I(u){return new Date(Number(u/BigInt(1e6)))}var Se={0:1,1:2,2:0};return be(ge);})();
