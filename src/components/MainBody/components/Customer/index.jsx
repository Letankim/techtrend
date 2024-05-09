import React from "react";
import Title from "../Title";
import avatarDefault from "../../../../images/avatar-default.png";
import "./style.css";
import ListCardCustomer from "./components/ListCardCustomer";

const Customer = () => {
  const customers = [
    {
      title: "Where else can you get this fantastic and magical service?",
      desc: "“The application was delivered before the expected day and the quality was magic. Where else can you get this fantastic and magical service?”",
      auth: {
        avatar: avatarDefault,
        name: "Seun Adetola",
        position: "Co-Founder",
        company: "SysAid",
      },
    },
    {
      title: "The follow-up after the deliveries was consistent.",
      desc: "“Amazing designs and quick response from TNT's project management team. The follow-up after the deliveries was consistent.”",
      auth: {
        avatar: avatarDefault,
        name: "Seun Adetola",
        position: "Co-Founder",
        company: "SysAid",
      },
    },
    {
      title: "Pleasure working with the recruitment cordinator.",
      desc: "“The process of finding an excellent QA candidate was good - the communication and pre-examination were superb. Pleasure working with the recruitment cordinator.”",
      auth: {
        avatar: avatarDefault,
        name: "Seun Adetola",
        position: "Co-Founder",
        company: "SysAid",
      },
    },
    {
      title: "Where else can you get this fantastic and magical service?",
      desc: "“The application was delivered before the expected day and the quality was magic. Where else can you get this fantastic and magical service?”",
      auth: {
        avatar: avatarDefault,
        name: "Seun Adetola",
        position: "Co-Founder",
        company: "SysAid",
      },
    },
    {
      title: "The follow-up after the deliveries was consistent.",
      desc: "“Amazing designs and quick response from TNT's project management team. The follow-up after the deliveries was consistent.”",
      auth: {
        avatar: avatarDefault,
        name: "Seun Adetola",
        position: "Co-Founder",
        company: "SysAid",
      },
    },
    {
      title: "Pleasure working with the recruitment cordinator.",
      desc: "“The process of finding an excellent QA candidate was good - the communication and pre-examination were superb. Pleasure working with the recruitment cordinator.”",
      auth: {
        avatar: avatarDefault,
        name: "Seun Adetola",
        position: "Co-Founder",
        company: "SysAid",
      },
    },
  ];
  return (
    <div className="customer">
      <Title
        title="Each and every client is important."
        desc="Our Success Stories"
      />
      <ListCardCustomer customers={customers} />
    </div>
  );
};

export default Customer;
