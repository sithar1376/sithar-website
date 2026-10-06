"use client";

import { cloneElement, useState, type ReactElement } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";

type Status = { type:"idle"|"loading"|"success"|"error"|"unconfigured"; message?:string };
const initial = { fullName:"", businessName:"", email:"", phone:"", website:"", businessType:"", service:"", challenge:"", message:"", company:"" };

export function ContactForm({endpoint}:{endpoint?:string}){
  const [values,setValues]=useState(initial); const [errors,setErrors]=useState<Record<string,string>>({}); const [status,setStatus]=useState<Status>({type:"idle"});
  const set=(field:keyof typeof initial)=>(event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>setValues({...values,[field]:event.target.value});
  function validate(){const next:Record<string,string>={}; if(!values.fullName.trim())next.fullName="Please enter your full name.";if(!values.businessName.trim())next.businessName="Please enter your organization, community, or N/A.";if(!/^\S+@\S+\.\S+$/.test(values.email))next.email="Please enter a valid email address.";if(!values.businessType.trim())next.businessType="Please tell me about your work or interest.";if(!values.service)next.service="Please choose a focus area.";if(!values.challenge.trim())next.challenge="Please share what you would like to discuss.";setErrors(next);return Object.keys(next).length===0;}
  async function submit(event:React.FormEvent){event.preventDefault();if(values.company)return;if(!validate()){setStatus({type:"error",message:"Please check the highlighted fields."});return;}setStatus({type:"loading"});
    if(!endpoint){await new Promise((resolve)=>setTimeout(resolve,650));setStatus({type:"unconfigured",message:"Your details look ready. Message delivery has not been connected yet, so nothing was sent. You can still use the connection option above."});return;}
    const payload={
      name:values.fullName.trim(),
      email:values.email.trim(),
      organization:values.businessName.trim(),
      phone:values.phone.trim(),
      website:values.website.trim(),
      work_or_interest:values.businessType.trim(),
      focus_area:values.service,
      discussion:values.challenge.trim(),
      message:values.message.trim(),
      _subject:`New Smile With Sithar message from ${values.fullName.trim()}`,
      _template:"table",
      _url:`${window.location.origin}/contact`,
      _honey:values.company,
    };
    try{const response=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(payload)});const result=await response.json().catch(()=>null) as {success?:boolean|string}|null;if(!response.ok||result?.success===false||result?.success==="false")throw new Error("Request failed");setValues(initial);setStatus({type:"success",message:"Thanks—your message has been sent. Sithar will follow up as soon as possible."});}catch{setStatus({type:"error",message:"Your message could not be sent. Please try again or use the connection option above."});}
  }
  return <form className="contact-form" onSubmit={submit} noValidate aria-busy={status.type==="loading"}>
    <div className="form-heading"><p className="eyebrow">SEND A MESSAGE</p><h2>Introduce yourself</h2><p>Share what you are working on, what interests you, and what you would like to discuss.</p></div>
    <div className="form-grid">
      <Field label="Full Name" required error={errors.fullName}><input name="name" value={values.fullName} onChange={set("fullName")} autoComplete="name" /></Field>
      <Field label="Organization, community, or N/A" required error={errors.businessName}><input name="organization" value={values.businessName} onChange={set("businessName")} autoComplete="organization" /></Field>
      <Field label="Email" required error={errors.email}><input name="email" type="email" value={values.email} onChange={set("email")} autoComplete="email" /></Field>
      <Field label="Phone Number" hint="Optional"><input name="phone" type="tel" value={values.phone} onChange={set("phone")} autoComplete="tel" /></Field>
      <Field label="Website or profile" hint="Optional"><input name="website" type="url" placeholder="https://" value={values.website} onChange={set("website")} autoComplete="url" /></Field>
      <Field label="Tell me about your work or interest" required error={errors.businessType}><input name="work_or_interest" value={values.businessType} onChange={set("businessType")} /></Field>
      <Field label="What would you like to connect about?" required error={errors.service} wide><select name="focus_area" value={values.service} onChange={set("service")}><option value="">Choose a focus area</option><option>Dental Outreach</option><option>Oral Health Education</option><option>AI &amp; Digital Learning</option><option>Sharing &amp; Supporting Others</option><option>Another Idea</option></select></Field>
      <Field label="What would you like to discuss?" required error={errors.challenge} wide><textarea name="discussion" rows={4} value={values.challenge} onChange={set("challenge")} /></Field>
      <Field label="Message" hint="Optional" wide><textarea name="message" rows={5} value={values.message} onChange={set("message")} /></Field>
      <div className="honeypot" aria-hidden="true"><label>Company<input name="_honey" tabIndex={-1} autoComplete="off" value={values.company} onChange={set("company")}/></label></div>
    </div>
    {status.type!=="idle"&&status.type!=="loading"&&<div className={`form-status ${status.type}`} role="status">{status.type==="success"?<CheckCircle2 size={19}/>:<AlertCircle size={19}/>}<span>{status.message}</span></div>}
    <button className="button button-primary form-submit" disabled={status.type==="loading"} type="submit">{status.type==="loading"?<><LoaderCircle className="spin" size={18}/>Sending your message…</>:<>Send My Message<Send size={17}/></>}</button>
    <p className="spam-note">Your information will only be used to respond to your enquiry.</p>
  </form>;
}

function Field({label,required,hint,error,wide,children}:{label:string;required?:boolean;hint?:string;error?:string;wide?:boolean;children:ReactElement<Record<string, unknown>>}){
  const id=label.toLowerCase().replace(/[^a-z0-9]+/g,"-");
  return <div className={`field ${wide?"field-wide":""}`}><label htmlFor={id}>{label}{required&&<span aria-hidden="true"> *</span>}{hint&&<small>{hint}</small>}</label>{cloneElement(children,{id,"aria-invalid":Boolean(error),"aria-describedby":error?`${id}-error`:undefined})}{error&&<span id={`${id}-error`} className="field-error">{error}</span>}</div>;
}
