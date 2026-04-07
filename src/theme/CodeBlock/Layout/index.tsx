import React, { useCallback, useRef, useState } from "react";
import clsx from "clsx";
import { ThemeClassNames, usePrismTheme } from "@docusaurus/theme-common";
import {
  useCodeBlockContext,
  getPrismCssVariables,
} from "@docusaurus/theme-common/internal";
import Content from "@theme/CodeBlock/Content";
import Buttons from "@theme/CodeBlock/Buttons";
import { WindowContainer } from "@site/src/components/General/WindowContainer";
import styles from "./styles.module.css";

type Tab = "preview" | "code";

export default function CodeBlockLayout({ className }: { className?: string }) {
  const { metadata } = useCodeBlockContext();
  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);
  const language = metadata.language || "text";
  const isHtml = language === "html";

  const [activeTab, setActiveTab] = useState<Tab>("preview");
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [frameHeight, setFrameHeight] = useState(0);

  const handleFrameLoad = useCallback(() => {
    const doc = frameRef.current?.contentDocument;
    if (doc?.documentElement) {
      setFrameHeight(doc.documentElement.scrollHeight);
    }
  }, []);

  // Force browser default styles for the iframe
  const previewSrcDoc = `<!DOCTYPE html><html><head><meta name="color-scheme" content="light"></head><body>${metadata.code}</body></html>`;

  const chromeTitle = isHtml ? (
    <div className={styles.chromeTitleRow}>
      <span className={styles.languageLabel}>{language}</span>
      <div className={styles.tabs}>
        <button
          className={clsx(
            styles.tab,
            activeTab === "preview" && styles.tabActive,
          )}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={clsx(styles.tab, activeTab === "code" && styles.tabActive)}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>
    </div>
  ) : (
    <span className={styles.languageLabel}>{language}</span>
  );

  const showPreview = isHtml && activeTab === "preview";

  return (
    <WindowContainer
      title={chromeTitle}
      className={clsx(styles.codeContainer, className, metadata.className)}
    >
      {/* Preview pane — only present for HTML blocks */}
      {isHtml && (
        <div
          className={styles.previewWrapper}
          style={{ display: showPreview ? undefined : "none" }}
        >
          <div className={styles.previewInner}>
            <iframe
              ref={frameRef}
              srcDoc={previewSrcDoc}
              title="HTML preview"
              className={styles.previewFrame}
              style={{ height: frameHeight || undefined }}
              onLoad={handleFrameLoad}
            />
          </div>
        </div>
      )}
      <div
        className={clsx(styles.codeContent, ThemeClassNames.common.codeBlock)}
        style={{
          ...prismCssVariables,
          display: showPreview ? "none" : undefined,
        }}
      >
        <Content />
        <Buttons />
      </div>
    </WindowContainer>
  );
}
