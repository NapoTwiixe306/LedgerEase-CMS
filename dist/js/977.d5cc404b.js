"use strict";(self["webpackChunkledgerease_cms"]=self["webpackChunkledgerease_cms"]||[]).push([[977],{2977:function(e,a,s){s.r(a),s.d(a,{default:function(){return E}});var t=s(6252),l=s(9963);const i={class:"register"},o={class:"register2"},n=(0,t._)("h1",{class:"title"},"Let's get started",-1),r={class:"input"},u=(0,t._)("label",{class:"input-label",for:"name"},"Nom d'utilisateur :",-1),c={class:"input"},d=(0,t._)("label",{class:"input-label",for:"email"},"Email :",-1),p={class:"input"},m=(0,t._)("label",{class:"input-label",for:"password"},"Mot de passe :",-1),_=(0,t._)("div",{class:"action"},[(0,t._)("button",{class:"action-button",type:"submit"}," Créer un compte ")],-1),h={class:"forgot"},b=(0,t._)("span",null,"Vous avez déjà un compte ? ",-1),f=(0,t._)("span",{class:"vertical-bar"},null,-1),v={class:"social-log"},w={href:""},g={href:""};function y(e,a,s,y,k,W){const C=(0,t.up)("Navbar"),U=(0,t.up)("router-link"),z=(0,t.up)("font-awesome-icon"),F=(0,t.up)("Footer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(C),(0,t._)("div",i,[(0,t._)("div",o,[n,(0,t._)("form",{onSubmit:a[3]||(a[3]=(0,l.iM)(((...e)=>W.submitForm&&W.submitForm(...e)),["prevent"]))},[(0,t._)("div",r,[u,(0,t.wy)((0,t._)("input",{class:"input-field",id:"name",type:"text",placeholder:"Entrez votre nom d'utilisateur ici","onUpdate:modelValue":a[0]||(a[0]=e=>k.name=e),required:""},null,512),[[l.nr,k.name]])]),(0,t._)("div",c,[d,(0,t.wy)((0,t._)("input",{class:"input-field",id:"email",type:"email",placeholder:"Entrez votre adresse email ici","onUpdate:modelValue":a[1]||(a[1]=e=>k.email=e),required:""},null,512),[[l.nr,k.email]])]),(0,t._)("div",p,[m,(0,t.wy)((0,t._)("input",{class:"input-field",id:"password",type:"password",placeholder:"Entrez votre mot de passe ici","onUpdate:modelValue":a[2]||(a[2]=e=>k.password=e),required:""},null,512),[[l.nr,k.password]])]),_],32),(0,t._)("div",h,[b,(0,t.Wm)(U,{to:"/create"},{default:(0,t.w5)((()=>[(0,t.Uk)("Connectez-vous")])),_:1})])]),f,(0,t._)("div",v,[(0,t._)("a",w,[(0,t.Wm)(z,{icon:["fab","google"],class:"social"}),(0,t.Uk)(" Continue With Google")]),(0,t._)("a",g,[(0,t.Wm)(z,{icon:["fab","github"],class:"social"}),(0,t.Uk)(" Continue With Github")])])]),(0,t.Wm)(F)],64)}s(7658);var k=s(4560),W=s(9797),C=s(6154),U=s(7283),z={components:{Navbar:k.Z,Footer:W.Z},data(){return{name:"",email:"",password:""}},methods:{async submitForm(){try{const e=await C.Z.post("http://localhost:3000/auth/register",{name:this.name,email:this.email,password:this.password});console.log(e),await U.Z.push({path:"/create"})}catch(e){console.log(e.response.data)}}}},F=s(3744);const Z=(0,F.Z)(z,[["render",y]]);var E=Z}}]);
//# sourceMappingURL=977.d5cc404b.js.map