import{S as _n,i as bn,s as wn,U as ua,y as Ln,z as Tn,A as Cn,V as In,W as hn,g as xn,d as Mn,B as Rn,X as Dn,k as a,q as t,a as F,Y as ya,e as mn,l as n,m as o,r,h as l,c,Z as fa,n as f,b as p,D as e,E as Sn}from"../chunks/index.85533aa3.js";import{P as Nn}from"../chunks/post_layout.81fb120e.js";function Hn(q){let d,v,g,D,y,h,J,Ie,ee,S,K,xe,le,N,W,Me,ae,H,z,Re,ne,k,V,Se,oe,Z,gs,Ne,te,G,j,He,re,A,As,ke,Ge,Q,Pe,E,_s,Ue,Xe,bs,Oe,Be,ws,$e,qe,Ls,Je,Ke,Ts,We,ie,P,Y,ze,pe,ss,Ve,Fe,T,es,Cs,Ze,je,Qe,_,Is,Ye,sl,el,ll,al,nl,ce,ls,ol,de,b,as,xs,tl,rl,il,ns,Ms,pl,Fl,cl,os,Rs,dl,yl,ye,U,ts,fl,fe,m,rs,Ss,ul,hl,Dl,is,Ns,ml,El,vl,ps,Hs,gl,Al,_l,Fs,ks,bl,wl,ue,X,cs,Ll,he,C,ds,Gs,Tl,Cl,Il,ys,Ps,xl,Ml,De,O,fs,Rl,me,I,Sl,Us,Nl,Hl,Ee,us,kl,ve,x,Xs,Gl,Pl,Os,Ul,ge,B,hs,Xl,Ae,u,Bs,Ol,Bl,$s,$l,ql,qs,Jl,Kl,Ds,Wl,L,Js,zl,Vl,Ks,Zl,jl,Ws,Ql,Yl,zs,sa,_e,Vs,vn=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" python="true"><div class="language-id">python</div><div class='code-container'><code><div class='line'><span style="color: #546E7A"># This is code implementation of Cost function.</span></div><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> numpy </span><span style="color: #89DDFF">as</span><span style="color: #EEFFFF"> np</span></div><div class='line'><span style="color: #C792EA">def</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">compute_cost</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">X</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">y</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">theta</span><span style="color: #89DDFF">):</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">"""</span></div><div class='line'><span style="color: #546E7A">  Calculates the cost function for given data</span></div><div class='line'></div><div class='line'><span style="color: #546E7A">  Arguments:</span></div><div class='line'><span style="color: #546E7A">  X : Input features passed in as vector or matrix(if multiple features)(use numpy)</span></div><div class='line'><span style="color: #546E7A">  y : Labels or ground truth values passed in as a vector</span></div><div class='line'><span style="color: #546E7A">  theta : parameters matrix for calculating the hypothesis function h.(should be passed as an array)</span></div><div class='line'><span style="color: #546E7A">  </span></div><div class='line'><span style="color: #546E7A">  Returns:</span></div><div class='line'><span style="color: #546E7A">  The cost function for all the training examples in dataset</span></div><div class='line'></div><div class='line'><span style="color: #546E7A">  </span><span style="color: #89DDFF">"""</span></div><div class='line'><span style="color: #EEFFFF">  m </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">len</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">y</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">  X </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">array</span><span style="color: #89DDFF">([</span><span style="color: #82AAFF">np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">ones</span><span style="color: #89DDFF">((</span><span style="color: #82AAFF">m</span><span style="color: #89DDFF">)),</span><span style="color: #82AAFF"> X</span><span style="color: #89DDFF">])</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #82AAFF">print</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">X</span><span style="color: #89DDFF">.</span><span style="color: #F07178">shape</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">  h </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> theta</span><span style="color: #89DDFF">.</span><span style="color: #F07178">T</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">*</span><span style="color: #EEFFFF"> X </span><span style="color: #546E7A"># matrix multiplication</span></div><div class='line'><span style="color: #EEFFFF">  C</span><span style="color: #89DDFF">=[]</span></div><div class='line'><span style="color: #EEFFFF">  C</span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF">h</span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF">y</span></div><div class='line'><span style="color: #EEFFFF">  C</span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF">np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">square</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">C</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">  J</span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF">np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">sum</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">C</span><span style="color: #89DDFF">)/(</span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">*</span><span style="color: #EEFFFF">m</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">return</span><span style="color: #EEFFFF"> J</span></div></code></div></pre>`,Zs,js,gn=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" python="true"><div class="language-id">python</div><div class='code-container'><code><div class='line'><span style="color: #546E7A"># Implementation of Gradient Descent Algorithm</span></div><div class='line'><span style="color: #C792EA">def</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">gradient_descent</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">X</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">y</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">theta</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF">alpha</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> num_iters</span><span style="color: #89DDFF">):</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">"""</span></div><div class='line'><span style="color: #546E7A">  Performs the gradient descent for the Data given no of iterations</span></div><div class='line'></div><div class='line'><span style="color: #546E7A">  Arguments:</span></div><div class='line'><span style="color: #546E7A">  X: Input array of data (for uni-variate linear reg : dim = (m,2))</span></div><div class='line'><span style="color: #546E7A">  y: labels</span></div><div class='line'><span style="color: #546E7A">  theta: parameters matrix (for 2 parameters : dim = (2,1))</span></div><div class='line'><span style="color: #546E7A">  Note: Dimensions of H : (m,1), Dimensions of y : (m,1) (Both should be equal)</span></div><div class='line'><span style="color: #546E7A">  Returns:</span></div><div class='line'><span style="color: #546E7A">  Theta values after the minimization process of loss function</span></div><div class='line'><span style="color: #546E7A">  </span><span style="color: #89DDFF">"""</span></div><div class='line'><span style="color: #EEFFFF">  J_history </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">zeros</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">num_iters</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">  m </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">len</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">y</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">  </span><span style="color: #89DDFF">for</span><span style="color: #EEFFFF"> iters </span><span style="color: #89DDFF">in</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">range</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">num_iters</span><span style="color: #89DDFF">-</span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">):</span></div><div class='line'><span style="color: #EEFFFF">    H </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">matmul</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">X</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF">theta</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    J </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">square</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">H</span><span style="color: #89DDFF">-</span><span style="color: #82AAFF">y</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    K </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">X</span><span style="color: #89DDFF">.</span><span style="color: #F07178">T</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">*</span><span style="color: #EEFFFF"> J</span></div><div class='line'><span style="color: #EEFFFF">    K </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> K</span><span style="color: #89DDFF">/</span><span style="color: #EEFFFF">m</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #546E7A"># Theta update step(parameter update step)</span></div><div class='line'></div><div class='line'><span style="color: #EEFFFF">    theta </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> theta </span><span style="color: #89DDFF">-</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">((</span><span style="color: #EEFFFF">alpha</span><span style="color: #89DDFF">)*</span><span style="color: #EEFFFF">K</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    J_history</span><span style="color: #89DDFF">[</span><span style="color: #EEFFFF">iters</span><span style="color: #89DDFF">]</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">compute_cost</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">X</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> y</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> theta</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #89DDFF">return</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">[</span><span style="color: #EEFFFF">theta</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> J_history</span><span style="color: #89DDFF">]</span></div><div class='line'></div><div class='line'></div></code></div></pre>`,Qs,Ys,An=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" python="true"><div class="language-id">python</div><div class='code-container'><code><div class='line'><span style="color: #546E7A"># An example code snippet illustrating the linear regression </span></div><div class='line'><span style="color: #546E7A"># Loading the dataset and preparing the data for the model training</span></div><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> pandas </span><span style="color: #89DDFF">as</span><span style="color: #EEFFFF"> pd</span></div><div class='line'><span style="color: #EEFFFF">df </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> pd</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">read_csv</span><span style="color: #89DDFF">(</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">/content/linear_reg.csv</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> </span><span style="color: #EEFFFF">names</span><span style="color: #89DDFF">=</span><span style="color: #82AAFF"> </span><span style="color: #89DDFF">[</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">X</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">y</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">])</span></div><div class='line'><span style="color: #EEFFFF">X </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> df</span><span style="color: #89DDFF">[</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">X</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">].</span><span style="color: #82AAFF">to_numpy</span><span style="color: #89DDFF">()</span></div><div class='line'><span style="color: #EEFFFF">y </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> df</span><span style="color: #89DDFF">[</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">y</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">].</span><span style="color: #82AAFF">to_numpy</span><span style="color: #89DDFF">()</span></div><div class='line'><span style="color: #EEFFFF">theta  </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">array</span><span style="color: #89DDFF">([</span><span style="color: #F78C6C">1</span><span style="color: #82AAFF"> </span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> </span><span style="color: #F78C6C">2</span><span style="color: #89DDFF">])</span></div><div class='line'><span style="color: #EEFFFF">X </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">expand_dims</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">X</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> </span><span style="color: #EEFFFF">axis</span><span style="color: #82AAFF"> </span><span style="color: #89DDFF">=</span><span style="color: #82AAFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">y </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">expand_dims</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">y</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> </span><span style="color: #EEFFFF">axis</span><span style="color: #82AAFF"> </span><span style="color: #89DDFF">=</span><span style="color: #82AAFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">theta </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> np</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">expand_dims</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">theta</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> </span><span style="color: #EEFFFF">axis</span><span style="color: #82AAFF"> </span><span style="color: #89DDFF">=</span><span style="color: #82AAFF"> </span><span style="color: #F78C6C">1</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">X</span><span style="color: #89DDFF">.</span><span style="color: #F07178">shape</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> y</span><span style="color: #89DDFF">.</span><span style="color: #F07178">shape</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> theta</span><span style="color: #89DDFF">.</span><span style="color: #F07178">shape</span></div></code></div></pre>`,se;return{c(){d=a("p"),v=t("This post has disabled table of contents."),g=F(),D=a("p"),y=t("When the "),h=a("code"),J=t("toc: false"),Ie=t(" on Front-Matter, toc should not be displayed."),ee=F(),S=a("h2"),K=a("a"),xe=t("Heading"),le=F(),N=a("h3"),W=a("a"),Me=t("Heading"),ae=F(),H=a("h4"),z=a("a"),Re=t("Heading"),ne=F(),k=a("h1"),V=a("a"),Se=t("Machine Learning Course Notes - AndrewNg(with code implementations of Algorithms)"),oe=F(),Z=a("blockquote"),gs=a("p"),Ne=t("My entire Machine learning course notes along with code implementations for all algorithms. The notes are based on the course taught by AndrewNg offered by stanford on Coursera."),te=F(),G=a("h2"),j=a("a"),He=t("Introduction to Machine learning:"),re=F(),A=a("ul"),As=a("li"),ke=t("Types of ML problems"),Ge=F(),Q=a("li"),Pe=t("Types of ML algorithms:"),E=a("ul"),_s=a("li"),Ue=t("Supervised learning"),Xe=F(),bs=a("li"),Oe=t("Unsupervised learning"),Be=F(),ws=a("li"),$e=t("semi supervised learning"),qe=F(),Ls=a("li"),Je=t("Reinforcement learning"),Ke=F(),Ts=a("li"),We=t("Singular Value Decomposition method"),ie=F(),P=a("h3"),Y=a("a"),ze=t("Definition of Machine Learning:"),pe=F(),ss=a("p"),Ve=t("Many attempts were made to define what is machine learning. Some of the prominent definitions are:"),Fe=F(),T=a("ul"),es=a("li"),Cs=a("strong"),Ze=t("Arthur Samuel(1959)"),je=t(" : Field of study that gives computers the ability to learn without being explicitly programmed."),Qe=F(),_=a("li"),Is=a("strong"),Ye=t("Tom Mitchell(1998)"),sl=t(":"),el=a("br"),ll=t(`
A well-posed learning problem is defined as:`),al=a("br"),nl=t(`
A computer program is said to learn from experience “E” with respect to some task “T” and some performance measure “P”, if its performance on T as measured by P improves with E.`),ce=F(),ls=a("p"),ol=t("Ex:  An email program detecting spam mails. In this example:"),de=F(),b=a("ul"),as=a("li"),xs=a("strong"),tl=t("Task “T”:"),rl=t(" classifying emails as spam or not"),il=F(),ns=a("li"),Ms=a("strong"),pl=t("Experience “E”:"),Fl=t(" watching you label email as spam or not spam"),cl=F(),os=a("li"),Rs=a("strong"),dl=t("Performance “P”:"),yl=t(" Fraction of emails correctly classified."),ye=F(),U=a("h3"),ts=a("a"),fl=t("Types of ML Algorithms(based on learning methods):"),fe=F(),m=a("ul"),rs=a("li"),Ss=a("strong"),ul=t("Supervised Learning:"),hl=t(" We give the dataset which contains input data with the labelled ground truths so that the model can learn from it and when trained can produce results which are more close to the actual labels."),Dl=F(),is=a("li"),Ns=a("strong"),ml=t("Unsupervised Learning:"),El=t("   Allows us to approach problems with little or no idea what our results would look like. These learning algorithms are used to identify the patterns in dataset that has datapoints that are neither classified nor labelled."),vl=F(),ps=a("li"),Hs=a("strong"),gl=t("Semi-supervised learning:"),Al=t("  is an approach to machine learning that combines a small amount of labeled data with a large amount of unlabeled data during training. Semi-supervised learning falls between unsupervised learning (with no labeled training data) and supervised learning (with only labeled training data). It is a special instance of weak supervision."),_l=F(),Fs=a("li"),ks=a("strong"),bl=t("Reinforcement learning:"),wl=t(" Reinforcement learning is a machine learning training method based on rewarding desired behaviors and/or punishing undesired ones. In general, a reinforcement learning agent is able to perceive and interpret its environment, take actions and learn through trial and error."),ue=F(),X=a("h3"),cs=a("a"),Ll=t("Types of problems in supervised learning:"),he=F(),C=a("ul"),ds=a("li"),Gs=a("strong"),Tl=t("Regression problems:"),Cl=t(" These are problems where our predictions have continous value attribute.(for example: Housing price prediction given different factors as input in the dataset, here house prices are continuous value numbers)"),Il=F(),ys=a("li"),Ps=a("strong"),xl=t("Classification problems"),Ml=t(": These problems have predictions that are discrete valued (for example: output is there 0(or)1 for binary classification)"),De=F(),O=a("h3"),fs=a("a"),Rl=t("Types of problems in Unsupervised learning:"),me=F(),I=a("p"),Sl=t("Given, a dataset the unsupervised learning algorithms will try to find some structure of pattern in the data. It decides that data lives in separate clusters. An example of this is "),Us=a("strong"),Nl=t("“Clustering Algorithm”"),Hl=t("."),Ee=F(),us=a("p"),kl=t("Examples:"),ve=F(),x=a("ul"),Xs=a("li"),Gl=t("Like Newstories in google news are arranged in a cohesive way"),Pl=F(),Os=a("li"),Ul=t("Genome identification and clustering the people based on genome."),ge=F(),B=a("h2"),hs=a("a"),Xl=t("Regression problems (Linear Regression):"),Ae=F(),u=a("ul"),Bs=a("li"),Ol=t("Weights and Bias units"),Bl=F(),$s=a("li"),$l=t("Contour plots"),ql=F(),qs=a("li"),Jl=t("Key Idea"),Kl=F(),Ds=a("li"),Wl=t("Gradient Descent Algorithm"),L=a("ul"),Js=a("li"),zl=t("For linear regression"),Vl=F(),Ks=a("li"),Zl=t("Batch Gradient Descent"),jl=F(),Ws=a("li"),Ql=t("Gradient Descent for Multi variable regression"),Yl=F(),zs=a("li"),sa=t("Cost Function and Loss function"),_e=F(),Vs=new ya(!1),Zs=F(),js=new ya(!1),Qs=F(),Ys=new ya(!1),se=mn(),this.h()},l(s){d=n(s,"P",{});var i=o(d);v=r(i,"This post has disabled table of contents."),i.forEach(l),g=c(s),D=n(s,"P",{});var be=o(D);y=r(be,"When the "),h=n(be,"CODE",{});var ha=o(h);J=r(ha,"toc: false"),ha.forEach(l),Ie=r(be," on Front-Matter, toc should not be displayed."),be.forEach(l),ee=c(s),S=n(s,"H2",{id:!0});var Da=o(S);K=n(Da,"A",{href:!0});var ma=o(K);xe=r(ma,"Heading"),ma.forEach(l),Da.forEach(l),le=c(s),N=n(s,"H3",{id:!0});var Ea=o(N);W=n(Ea,"A",{href:!0});var va=o(W);Me=r(va,"Heading"),va.forEach(l),Ea.forEach(l),ae=c(s),H=n(s,"H4",{id:!0});var ga=o(H);z=n(ga,"A",{href:!0});var Aa=o(z);Re=r(Aa,"Heading"),Aa.forEach(l),ga.forEach(l),ne=c(s),k=n(s,"H1",{id:!0});var _a=o(k);V=n(_a,"A",{href:!0});var ba=o(V);Se=r(ba,"Machine Learning Course Notes - AndrewNg(with code implementations of Algorithms)"),ba.forEach(l),_a.forEach(l),oe=c(s),Z=n(s,"BLOCKQUOTE",{});var wa=o(Z);gs=n(wa,"P",{});var La=o(gs);Ne=r(La,"My entire Machine learning course notes along with code implementations for all algorithms. The notes are based on the course taught by AndrewNg offered by stanford on Coursera."),La.forEach(l),wa.forEach(l),te=c(s),G=n(s,"H2",{id:!0});var Ta=o(G);j=n(Ta,"A",{href:!0});var Ca=o(j);He=r(Ca,"Introduction to Machine learning:"),Ca.forEach(l),Ta.forEach(l),re=c(s),A=n(s,"UL",{});var ms=o(A);As=n(ms,"LI",{});var Ia=o(As);ke=r(Ia,"Types of ML problems"),Ia.forEach(l),Ge=c(ms),Q=n(ms,"LI",{});var ea=o(Q);Pe=r(ea,"Types of ML algorithms:"),E=n(ea,"UL",{});var M=o(E);_s=n(M,"LI",{});var xa=o(_s);Ue=r(xa,"Supervised learning"),xa.forEach(l),Xe=c(M),bs=n(M,"LI",{});var Ma=o(bs);Oe=r(Ma,"Unsupervised learning"),Ma.forEach(l),Be=c(M),ws=n(M,"LI",{});var Ra=o(ws);$e=r(Ra,"semi supervised learning"),Ra.forEach(l),qe=c(M),Ls=n(M,"LI",{});var Sa=o(Ls);Je=r(Sa,"Reinforcement learning"),Sa.forEach(l),M.forEach(l),ea.forEach(l),Ke=c(ms),Ts=n(ms,"LI",{});var Na=o(Ts);We=r(Na,"Singular Value Decomposition method"),Na.forEach(l),ms.forEach(l),ie=c(s),P=n(s,"H3",{id:!0});var Ha=o(P);Y=n(Ha,"A",{href:!0});var ka=o(Y);ze=r(ka,"Definition of Machine Learning:"),ka.forEach(l),Ha.forEach(l),pe=c(s),ss=n(s,"P",{});var Ga=o(ss);Ve=r(Ga,"Many attempts were made to define what is machine learning. Some of the prominent definitions are:"),Ga.forEach(l),Fe=c(s),T=n(s,"UL",{});var we=o(T);es=n(we,"LI",{});var la=o(es);Cs=n(la,"STRONG",{});var Pa=o(Cs);Ze=r(Pa,"Arthur Samuel(1959)"),Pa.forEach(l),je=r(la," : Field of study that gives computers the ability to learn without being explicitly programmed."),la.forEach(l),Qe=c(we),_=n(we,"LI",{});var $=o(_);Is=n($,"STRONG",{});var Ua=o(Is);Ye=r(Ua,"Tom Mitchell(1998)"),Ua.forEach(l),sl=r($,":"),el=n($,"BR",{}),ll=r($,`
A well-posed learning problem is defined as:`),al=n($,"BR",{}),nl=r($,`
A computer program is said to learn from experience “E” with respect to some task “T” and some performance measure “P”, if its performance on T as measured by P improves with E.`),$.forEach(l),we.forEach(l),ce=c(s),ls=n(s,"P",{});var Xa=o(ls);ol=r(Xa,"Ex:  An email program detecting spam mails. In this example:"),Xa.forEach(l),de=c(s),b=n(s,"UL",{});var Es=o(b);as=n(Es,"LI",{});var aa=o(as);xs=n(aa,"STRONG",{});var Oa=o(xs);tl=r(Oa,"Task “T”:"),Oa.forEach(l),rl=r(aa," classifying emails as spam or not"),aa.forEach(l),il=c(Es),ns=n(Es,"LI",{});var na=o(ns);Ms=n(na,"STRONG",{});var Ba=o(Ms);pl=r(Ba,"Experience “E”:"),Ba.forEach(l),Fl=r(na," watching you label email as spam or not spam"),na.forEach(l),cl=c(Es),os=n(Es,"LI",{});var oa=o(os);Rs=n(oa,"STRONG",{});var $a=o(Rs);dl=r($a,"Performance “P”:"),$a.forEach(l),yl=r(oa," Fraction of emails correctly classified."),oa.forEach(l),Es.forEach(l),ye=c(s),U=n(s,"H3",{id:!0});var qa=o(U);ts=n(qa,"A",{href:!0});var Ja=o(ts);fl=r(Ja,"Types of ML Algorithms(based on learning methods):"),Ja.forEach(l),qa.forEach(l),fe=c(s),m=n(s,"UL",{});var R=o(m);rs=n(R,"LI",{});var ta=o(rs);Ss=n(ta,"STRONG",{});var Ka=o(Ss);ul=r(Ka,"Supervised Learning:"),Ka.forEach(l),hl=r(ta," We give the dataset which contains input data with the labelled ground truths so that the model can learn from it and when trained can produce results which are more close to the actual labels."),ta.forEach(l),Dl=c(R),is=n(R,"LI",{});var ra=o(is);Ns=n(ra,"STRONG",{});var Wa=o(Ns);ml=r(Wa,"Unsupervised Learning:"),Wa.forEach(l),El=r(ra,"   Allows us to approach problems with little or no idea what our results would look like. These learning algorithms are used to identify the patterns in dataset that has datapoints that are neither classified nor labelled."),ra.forEach(l),vl=c(R),ps=n(R,"LI",{});var ia=o(ps);Hs=n(ia,"STRONG",{});var za=o(Hs);gl=r(za,"Semi-supervised learning:"),za.forEach(l),Al=r(ia,"  is an approach to machine learning that combines a small amount of labeled data with a large amount of unlabeled data during training. Semi-supervised learning falls between unsupervised learning (with no labeled training data) and supervised learning (with only labeled training data). It is a special instance of weak supervision."),ia.forEach(l),_l=c(R),Fs=n(R,"LI",{});var pa=o(Fs);ks=n(pa,"STRONG",{});var Va=o(ks);bl=r(Va,"Reinforcement learning:"),Va.forEach(l),wl=r(pa," Reinforcement learning is a machine learning training method based on rewarding desired behaviors and/or punishing undesired ones. In general, a reinforcement learning agent is able to perceive and interpret its environment, take actions and learn through trial and error."),pa.forEach(l),R.forEach(l),ue=c(s),X=n(s,"H3",{id:!0});var Za=o(X);cs=n(Za,"A",{href:!0});var ja=o(cs);Ll=r(ja,"Types of problems in supervised learning:"),ja.forEach(l),Za.forEach(l),he=c(s),C=n(s,"UL",{});var Le=o(C);ds=n(Le,"LI",{});var Fa=o(ds);Gs=n(Fa,"STRONG",{});var Qa=o(Gs);Tl=r(Qa,"Regression problems:"),Qa.forEach(l),Cl=r(Fa," These are problems where our predictions have continous value attribute.(for example: Housing price prediction given different factors as input in the dataset, here house prices are continuous value numbers)"),Fa.forEach(l),Il=c(Le),ys=n(Le,"LI",{});var ca=o(ys);Ps=n(ca,"STRONG",{});var Ya=o(Ps);xl=r(Ya,"Classification problems"),Ya.forEach(l),Ml=r(ca,": These problems have predictions that are discrete valued (for example: output is there 0(or)1 for binary classification)"),ca.forEach(l),Le.forEach(l),De=c(s),O=n(s,"H3",{id:!0});var sn=o(O);fs=n(sn,"A",{href:!0});var en=o(fs);Rl=r(en,"Types of problems in Unsupervised learning:"),en.forEach(l),sn.forEach(l),me=c(s),I=n(s,"P",{});var Te=o(I);Sl=r(Te,"Given, a dataset the unsupervised learning algorithms will try to find some structure of pattern in the data. It decides that data lives in separate clusters. An example of this is "),Us=n(Te,"STRONG",{});var ln=o(Us);Nl=r(ln,"“Clustering Algorithm”"),ln.forEach(l),Hl=r(Te,"."),Te.forEach(l),Ee=c(s),us=n(s,"P",{});var an=o(us);kl=r(an,"Examples:"),an.forEach(l),ve=c(s),x=n(s,"UL",{});var Ce=o(x);Xs=n(Ce,"LI",{});var nn=o(Xs);Gl=r(nn,"Like Newstories in google news are arranged in a cohesive way"),nn.forEach(l),Pl=c(Ce),Os=n(Ce,"LI",{});var on=o(Os);Ul=r(on,"Genome identification and clustering the people based on genome."),on.forEach(l),Ce.forEach(l),ge=c(s),B=n(s,"H2",{id:!0});var tn=o(B);hs=n(tn,"A",{href:!0});var rn=o(hs);Xl=r(rn,"Regression problems (Linear Regression):"),rn.forEach(l),tn.forEach(l),Ae=c(s),u=n(s,"UL",{});var w=o(u);Bs=n(w,"LI",{});var pn=o(Bs);Ol=r(pn,"Weights and Bias units"),pn.forEach(l),Bl=c(w),$s=n(w,"LI",{});var Fn=o($s);$l=r(Fn,"Contour plots"),Fn.forEach(l),ql=c(w),qs=n(w,"LI",{});var cn=o(qs);Jl=r(cn,"Key Idea"),cn.forEach(l),Kl=c(w),Ds=n(w,"LI",{});var da=o(Ds);Wl=r(da,"Gradient Descent Algorithm"),L=n(da,"UL",{});var vs=o(L);Js=n(vs,"LI",{});var dn=o(Js);zl=r(dn,"For linear regression"),dn.forEach(l),Vl=c(vs),Ks=n(vs,"LI",{});var yn=o(Ks);Zl=r(yn,"Batch Gradient Descent"),yn.forEach(l),jl=c(vs),Ws=n(vs,"LI",{});var fn=o(Ws);Ql=r(fn,"Gradient Descent for Multi variable regression"),fn.forEach(l),vs.forEach(l),da.forEach(l),Yl=c(w),zs=n(w,"LI",{});var un=o(zs);sa=r(un,"Cost Function and Loss function"),un.forEach(l),w.forEach(l),_e=c(s),Vs=fa(s,!1),Zs=c(s),js=fa(s,!1),Qs=c(s),Ys=fa(s,!1),se=mn(),this.h()},h(){f(K,"href","#heading"),f(S,"id","heading"),f(W,"href","#heading-1"),f(N,"id","heading-1"),f(z,"href","#heading-2"),f(H,"id","heading-2"),f(V,"href","#machine-learning-course-notes---andrewngwith-code-implementations-of-algorithms"),f(k,"id","machine-learning-course-notes---andrewngwith-code-implementations-of-algorithms"),f(j,"href","#introduction-to-machine-learning"),f(G,"id","introduction-to-machine-learning"),f(Y,"href","#definition-of-machine-learning"),f(P,"id","definition-of-machine-learning"),f(ts,"href","#types-of-ml-algorithmsbased-on-learning-methods"),f(U,"id","types-of-ml-algorithmsbased-on-learning-methods"),f(cs,"href","#types-of-problems-in-supervised-learning"),f(X,"id","types-of-problems-in-supervised-learning"),f(fs,"href","#types-of-problems-in-unsupervised-learning"),f(O,"id","types-of-problems-in-unsupervised-learning"),f(hs,"href","#regression-problems-linear-regression"),f(B,"id","regression-problems-linear-regression"),Vs.a=Zs,js.a=Qs,Ys.a=se},m(s,i){p(s,d,i),e(d,v),p(s,g,i),p(s,D,i),e(D,y),e(D,h),e(h,J),e(D,Ie),p(s,ee,i),p(s,S,i),e(S,K),e(K,xe),p(s,le,i),p(s,N,i),e(N,W),e(W,Me),p(s,ae,i),p(s,H,i),e(H,z),e(z,Re),p(s,ne,i),p(s,k,i),e(k,V),e(V,Se),p(s,oe,i),p(s,Z,i),e(Z,gs),e(gs,Ne),p(s,te,i),p(s,G,i),e(G,j),e(j,He),p(s,re,i),p(s,A,i),e(A,As),e(As,ke),e(A,Ge),e(A,Q),e(Q,Pe),e(Q,E),e(E,_s),e(_s,Ue),e(E,Xe),e(E,bs),e(bs,Oe),e(E,Be),e(E,ws),e(ws,$e),e(E,qe),e(E,Ls),e(Ls,Je),e(A,Ke),e(A,Ts),e(Ts,We),p(s,ie,i),p(s,P,i),e(P,Y),e(Y,ze),p(s,pe,i),p(s,ss,i),e(ss,Ve),p(s,Fe,i),p(s,T,i),e(T,es),e(es,Cs),e(Cs,Ze),e(es,je),e(T,Qe),e(T,_),e(_,Is),e(Is,Ye),e(_,sl),e(_,el),e(_,ll),e(_,al),e(_,nl),p(s,ce,i),p(s,ls,i),e(ls,ol),p(s,de,i),p(s,b,i),e(b,as),e(as,xs),e(xs,tl),e(as,rl),e(b,il),e(b,ns),e(ns,Ms),e(Ms,pl),e(ns,Fl),e(b,cl),e(b,os),e(os,Rs),e(Rs,dl),e(os,yl),p(s,ye,i),p(s,U,i),e(U,ts),e(ts,fl),p(s,fe,i),p(s,m,i),e(m,rs),e(rs,Ss),e(Ss,ul),e(rs,hl),e(m,Dl),e(m,is),e(is,Ns),e(Ns,ml),e(is,El),e(m,vl),e(m,ps),e(ps,Hs),e(Hs,gl),e(ps,Al),e(m,_l),e(m,Fs),e(Fs,ks),e(ks,bl),e(Fs,wl),p(s,ue,i),p(s,X,i),e(X,cs),e(cs,Ll),p(s,he,i),p(s,C,i),e(C,ds),e(ds,Gs),e(Gs,Tl),e(ds,Cl),e(C,Il),e(C,ys),e(ys,Ps),e(Ps,xl),e(ys,Ml),p(s,De,i),p(s,O,i),e(O,fs),e(fs,Rl),p(s,me,i),p(s,I,i),e(I,Sl),e(I,Us),e(Us,Nl),e(I,Hl),p(s,Ee,i),p(s,us,i),e(us,kl),p(s,ve,i),p(s,x,i),e(x,Xs),e(Xs,Gl),e(x,Pl),e(x,Os),e(Os,Ul),p(s,ge,i),p(s,B,i),e(B,hs),e(hs,Xl),p(s,Ae,i),p(s,u,i),e(u,Bs),e(Bs,Ol),e(u,Bl),e(u,$s),e($s,$l),e(u,ql),e(u,qs),e(qs,Jl),e(u,Kl),e(u,Ds),e(Ds,Wl),e(Ds,L),e(L,Js),e(Js,zl),e(L,Vl),e(L,Ks),e(Ks,Zl),e(L,jl),e(L,Ws),e(Ws,Ql),e(u,Yl),e(u,zs),e(zs,sa),p(s,_e,i),Vs.m(vn,s,i),p(s,Zs,i),js.m(gn,s,i),p(s,Qs,i),Ys.m(An,s,i),p(s,se,i)},p:Sn,d(s){s&&l(d),s&&l(g),s&&l(D),s&&l(ee),s&&l(S),s&&l(le),s&&l(N),s&&l(ae),s&&l(H),s&&l(ne),s&&l(k),s&&l(oe),s&&l(Z),s&&l(te),s&&l(G),s&&l(re),s&&l(A),s&&l(ie),s&&l(P),s&&l(pe),s&&l(ss),s&&l(Fe),s&&l(T),s&&l(ce),s&&l(ls),s&&l(de),s&&l(b),s&&l(ye),s&&l(U),s&&l(fe),s&&l(m),s&&l(ue),s&&l(X),s&&l(he),s&&l(C),s&&l(De),s&&l(O),s&&l(me),s&&l(I),s&&l(Ee),s&&l(us),s&&l(ve),s&&l(x),s&&l(ge),s&&l(B),s&&l(Ae),s&&l(u),s&&l(_e),s&&Vs.d(),s&&l(Zs),s&&js.d(),s&&l(Qs),s&&l(se),s&&Ys.d()}}}function kn(q){let d,v;const g=[q[0],En];let D={$$slots:{default:[Hn]},$$scope:{ctx:q}};for(let y=0;y<g.length;y+=1)D=ua(D,g[y]);return d=new Nn({props:D}),{c(){Ln(d.$$.fragment)},l(y){Tn(d.$$.fragment,y)},m(y,h){Cn(d,y,h),v=!0},p(y,[h]){const J=h&1?In(g,[h&1&&hn(y[0]),h&0&&hn(En)]):{};h&2&&(J.$$scope={dirty:h,ctx:y}),d.$set(J)},i(y){v||(xn(d.$$.fragment,y),v=!0)},o(y){Mn(d.$$.fragment,y),v=!1},d(y){Rn(d,y)}}}const En={title:"Machine Learning Course Notes(Andrew Ng Course)",summary:"Course Notes of Andrew Ng's Machine Learning course on Coursera",created:"2021-11-01T00:00:00.000Z",tags:["Machine Learning"],toc:[{depth:2,title:"Heading",slug:"heading"},{depth:3,title:"Heading",slug:"heading-1"},{depth:4,title:"Heading",slug:"heading-2"},{depth:1,title:"Machine Learning Course Notes - AndrewNg(with code implementations of Algorithms)",slug:"machine-learning-course-notes---andrewngwith-code-implementations-of-algorithms"},{depth:2,title:"Introduction to Machine learning:",slug:"introduction-to-machine-learning"},{depth:3,title:"Definition of Machine Learning:",slug:"definition-of-machine-learning"},{depth:3,title:"Types of ML Algorithms(based on learning methods):",slug:"types-of-ml-algorithmsbased-on-learning-methods"},{depth:3,title:"Types of problems in supervised learning:",slug:"types-of-problems-in-supervised-learning"},{depth:3,title:"Types of problems in Unsupervised learning:",slug:"types-of-problems-in-unsupervised-learning"},{depth:2,title:"Regression problems (Linear Regression):",slug:"regression-problems-linear-regression"}],flags:[],updated:"2023-05-21T10:32:45.381Z",slug:"/machine-learning-notes/+page.md",path:"/machine-learning-notes"};function Gn(q,d,v){return q.$$set=g=>{v(0,d=ua(ua({},d),Dn(g)))},d=Dn(d),[d]}class Xn extends _n{constructor(d){super(),bn(this,d,Gn,kn,wn,{})}}export{Xn as default,En as metadata};
