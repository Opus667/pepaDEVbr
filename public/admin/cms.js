// public/admin/cms.js
import CMS from "netlify-cms-app";
import React from "react";
import ReactDOM from "react-dom";

// Simple preview for Projects
function ProjectPreview({ entry }) {
  const data = entry.get("data").toJS
    ? entry.get("data").toJS()
    : entry.get("data");
  const lang = "pt";
  const content = data.languages?.[lang] || {};
  return (
    <article style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1>{data.title}</h1>
      {data.hero && (
        <img src={data.hero} alt={data.title} style={{ maxWidth: "100%" }} />
      )}
      <h3>Resumo ({lang})</h3>
      <p>{content.summary}</p>
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
      <hr />
      <small>
        Category: {data.meta?.category} • Progress: {data.meta?.progress}%
      </small>
    </article>
  );
}

CMS.registerPreviewTemplate("projects", ProjectPreview);
CMS.registerPreviewTemplate("insights", ProjectPreview);
CMS.registerPreviewTemplate("studio", ProjectPreview);

// Optional: register a custom widget preview for language object etc.
