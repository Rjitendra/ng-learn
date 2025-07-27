import{k as M,l as w}from"./chunk-ATW432D2.js";import{Gb as C,Hb as O,Ib as u,K as t,Ua as m,W as s,Y as r,a as h,ac as g,b as x,cc as b,eb as j,lc as P,mc as y,n as o,r as p,v as d,x as v}from"./chunk-IDVU2DUC.js";var R=o([1,2,3]),S=class f{rxjsContent=`
  <!-- rxjs-overview.component.html -->
<div class="rxjs-container">
  <h1>\u{1F504} What is RxJS?</h1>
  <p>RxJS (Reactive Extensions for JavaScript) is a powerful library for reactive programming using Observables. It allows you to work with asynchronous data streams like events, HTTP responses, form changes, and more.</p>

  <div class="rxjs-section">
    <h2>\u{1F4E6} Core Concepts of RxJS</h2>
    <div class="rxjs-subsection">
      <h3>1. Observable</h3>
      <p>An Observable represents a stream of data over time. It can emit zero, one, or multiple values, either synchronously or asynchronously.</p>
      <p><strong>Use case:</strong> HTTP requests, user inputs, timers, etc.</p>
      <pre><code>import { of } from 'rxjs';

const obs$ = of(1, 2, 3); // Emits 1, 2, 3
obs$.subscribe(value => console.log(value));</code></pre>
    </div>

    <div class="rxjs-subsection">
      <h3>2. Observer</h3>
      <p>An Observer defines how to handle the values emitted by an Observable. It has three callbacks:</p>
      <ul>
        <li><code>next()</code> \u2192 called on each value</li>
        <li><code>error()</code> \u2192 called on error</li>
        <li><code>complete()</code> \u2192 called when done</li>
      </ul>
      <pre><code>obs$.subscribe({
  next: val => console.log(val),
  error: err => console.error(err),
  complete: () => console.log('Done')
});</code></pre>
    </div>

    <div class="rxjs-subsection">
      <h3>3. Operators</h3>
      <p>Operators are functions that modify observables. You use them with <code>.pipe()</code>.</p>
      <h4>\u{1F539} Categories of Operators:</h4>
      <ul>
        <li><strong>Creation:</strong> <code>of</code>, <code>from</code>, <code>interval</code></li>
        <li><strong>Transformation:</strong> <code>map</code>, <code>switchMap</code></li>
        <li><strong>Filtering:</strong> <code>filter</code>, <code>debounceTime</code></li>
        <li><strong>Combination:</strong> <code>merge</code>, <code>concat</code>, <code>combineLatest</code></li>
      </ul>
      <pre><code>import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

from([1, 2, 3, 4])
  .pipe(
    filter(n => n % 2 === 0),
    map(n => n * 10)
  )
  .subscribe(console.log); // 20, 40</code></pre>
    </div>

    <div class="rxjs-subsection">
      <h3>4. Subject</h3>
      <p>A <strong>Subject</strong> is a special kind of Observable that is also an Observer. It allows multicasting to many observers.</p>
      <p><strong>Use case:</strong> Sharing data (e.g., event bus, shared state).</p>
      <pre><code>import { Subject } from 'rxjs';

const subject = new Subject();
subject.subscribe(val => console.log('A:', val));
subject.subscribe(val => console.log('B:', val));

subject.next(1); // A: 1, B: 1</code></pre>
    </div>

    <div class="rxjs-subsection">
      <h3>5. BehaviorSubject</h3>
      <p>A <strong>BehaviorSubject</strong> holds a current value and emits the latest value to new subscribers immediately.</p>
      <pre><code>import { BehaviorSubject } from 'rxjs';

const counter$ = new BehaviorSubject(0);
counter$.subscribe(val => console.log(val)); // 0
counter$.next(1);</code></pre>
    </div>
  </div>

  <div class="rxjs-section">
    <h2>\u{1F170}\uFE0F RxJS in Angular</h2>
    <p>RxJS is built into Angular, and you use it in many places:</p>
    <ul>
      <li>\u2705 <strong>HttpClient:</strong> <code>this.http.get().subscribe(...)</code></li>
      <li>\u2705 <strong>Reactive Forms:</strong> <code>formControl.valueChanges.subscribe(...)</code></li>
      <li>\u2705 <strong>Routing:</strong> <code>ActivatedRoute.params</code>, <code>queryParams</code></li>
      <li>\u2705 <strong>NgRx:</strong> state management using Actions and Effects</li>
    </ul>
  </div>
</div>

`;tape1;data$;constructor(){}ngOnInit(){this.data$=d(R).pipe(r(e=>{console.log("Value before map:",e)}),p(e=>(console.log("Value inside map:",e),e)),s(e=>(console.log("Value inside switchMap:",e),o(e))));let a=()=>o({userId:1,name:"John Doe"}).pipe(t(500)),n=()=>o([{projectId:101,title:"Project A"},{projectId:102,title:"Project B"}]).pipe(t(500)),i=e=>o({projectId:e,description:`Details of project ${e}`}).pipe(t(300)),I=()=>v({stars:o(Math.floor(Math.random()*100)).pipe(t(200)),forks:o(Math.floor(Math.random()*50)).pipe(t(300)),watchers:o(Math.floor(Math.random()*75)).pipe(t(250))});a().pipe(r(e=>console.log("User Profile:",e)),s(()=>n().pipe(r(e=>console.log("User Projects:",e)),s(e=>d(...e.map(_=>i(_.projectId).pipe(r(c=>console.log("Project Detail:",c)),s(c=>I().pipe(r(l=>console.log("Project Stats:",l)),p(l=>x(h({},c),{stats:l}))))))))))).subscribe(e=>{console.log("\u{1F4E6} Final Project Data with Stats:",e)})}static \u0275fac=function(n){return new(n||f)};static \u0275cmp=j({type:f,selectors:[["ng-rxjs"]],decls:7,vars:4,consts:[[1,"container"]],template:function(n,i){n&1&&(C(0,"div",0)(1,"section"),g(2),u(3,"br"),g(4),P(5,"async"),u(6,"br"),O()()),n&2&&(m(2),b(" tape1- ",i.tape1),m(2),b(" tape1$- ",y(5,2,i.data$)))},dependencies:[w,M],styles:[".container[_ngcontent-%COMP%]{max-width:900px;margin:auto;background:#fff;border-radius:10px;padding:30px;box-shadow:0 4px 8px #0000001a}rxjs-container[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;max-width:900px;margin:auto;padding:20px;background-color:#fff;border-radius:10px;box-shadow:0 4px 10px #0000001a;color:#343a40}h1[_ngcontent-%COMP%]{font-size:32px;color:#007bff;margin-bottom:20px}h2[_ngcontent-%COMP%]{font-size:24px;color:#2c3e50;margin-top:25px}h3[_ngcontent-%COMP%]{color:#007bff;font-size:20px;margin-top:20px}h4[_ngcontent-%COMP%]{font-size:18px;color:#28a745}p[_ngcontent-%COMP%]{font-size:16px;line-height:1.6;color:#6c757d}ul[_ngcontent-%COMP%]{list-style-type:disc;margin-left:20px}li[_ngcontent-%COMP%]{font-size:16px;color:#495057;line-height:1.5}pre[_ngcontent-%COMP%]{background-color:#2e3b4e;color:#d4d7e0;padding:15px;border-radius:6px;font-family:Courier New,monospace;overflow-x:auto}code[_ngcontent-%COMP%]{background-color:#f4f4f4;padding:4px 8px;border-radius:4px;font-family:Courier New,monospace}.rxjs-section[_ngcontent-%COMP%]{margin-bottom:30px}.rxjs-subsection[_ngcontent-%COMP%]{margin-top:15px}strong[_ngcontent-%COMP%]{color:#28a745}"]})};export{S as RxjsComponent};
