import StepsAnimation from "./StepsAnimation";

export default function Home() {
  return (
    <>
      {/* ── Masthead ──────────────────────────────────────────────────────── */}
      <header className="mast">
        <div className="mast-left">
          Vol. 1 · No. 04 — Spring 2026
          <br />
          <span className="mast-sub">
            Slack-native AI · For teams that already moved on
          </span>
        </div>
        <div className="mast-logo">
          damyra<sup>.ai</sup>
        </div>
        <div className="mast-right">
          <a href="#integrations">Integrations</a>
          <a className="mast-cta" href="#cta">
            Get early access →
          </a>
        </div>
      </header>

      <div className="subrule">
        <span>Issue: The context gap → solved.</span>
        <span>For sales · ops · founders · anyone in Slack</span>
        <span>Read time: 90 sec.</span>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-bullet" />
            <span>The Front Page</span>
            <span className="eyebrow-seq">— 01 / Hero</span>
          </div>
          <h1 className="hero-hl">
            The <em>AI hire</em>
            <br />
            that already
            <br />
            knows your
            <br />
            company.
            <span className="stamp">Lives in Slack</span>
          </h1>
          <div className="deck">
            <p className="lead">
              Damyra lives in Slack, wired into your entire stack. Ask it
              anything in any channel — it already knows the context, the
              history, and who to pull from.
            </p>
          </div>
          <div className="cta-row">
            <a className="btn-primary" href="#cta">
              Get early access <span>→</span>
            </a>
            <a className="btn-ghost" href="#how">
              See it in a thread ↓
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <b>Live in 4 minutes.</b>
            </span>
            <span>
              <b>Zero data training.</b>
            </span>
            <span>
              <b>Enterprise-ready.</b>
            </span>
          </div>
        </div>

        {/* Slack thread mockup */}
        <div id="how">
          <div className="letter-cap">
            <span>Field dispatch / #product-launch</span>
            <span>10:42 AM</span>
          </div>
          <div className="slack-frame">
            <div className="slack-head">
              <span># product-launch · 9 members</span>
              <span className="slack-live">live</span>
            </div>
            <div className="slack-thread">
              <div className="msg">
                <div className="av">MR</div>
                <div>
                  <div className="msg-head">
                    <span className="msg-name">Maya R.</span>
                    <span className="msg-ts">10:42</span>
                  </div>
                  <div className="msg-body">
                    <span className="mention">@damyra</span> where are we on
                    the launch? give me the one-pager — pull from the PRD, the
                    last 10 docs, and last week&apos;s meetings.
                  </div>
                </div>
              </div>
              <div className="msg">
                <div className="av bot">D</div>
                <div>
                  <div className="msg-head">
                    <span className="msg-name bot">damyra</span>
                    <span className="msg-badge">app</span>
                    <span className="msg-ts">10:42</span>
                  </div>
                  <div className="msg-body">
                    On it — bridging context across Notion, Drive and Granola.
                  </div>
                  <StepsAnimation />
                  <div className="result-block">
                    <b>Launch is 9 days out.</b> Eng is on track; design has 2
                    open blockers; GTM hasn&apos;t started the FAQ. Want me to
                    draft the FAQ from the PRD + objections doc?
                  </div>
                </div>
              </div>
              <div className="msg">
                <div className="av">JT</div>
                <div>
                  <div className="msg-head">
                    <span className="msg-name">Jay T.</span>
                    <span className="msg-ts">10:43</span>
                  </div>
                  <div className="msg-body">
                    <span className="mention">@damyra</span> yes — and tag the
                    design blockers in Linear, please.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull quote ─────────────────────────────────────────────────────── */}
      <section className="pull">
        <div className="pull-label">Why this, why now</div>
        <div>
          <div className="pull-q">
            Every other AI tool is a new tab you forget to open. Damyra is the
            teammate you don&apos;t have to change your habits for — it already
            lives where your work happens.
          </div>
          <div className="pull-src">
            — <b>From the editors</b>, on what&apos;s broken about enterprise AI
            in 2026.
          </div>
        </div>
        <div className="pull-stat">
          <div className="num">
            04<sup>min</sup>
          </div>
          <div className="lbl">
            From install to first answer.
            <br />
            Per pilot. No services contract.
          </div>
        </div>
      </section>

      {/* ── Integrations ───────────────────────────────────────────────────── */}
      <section className="integrations" id="integrations">
        <div className="section-head">
          <div>
            <div className="section-tag">02 / The Connections</div>
          </div>
          <div>
            <h2>
              Wired into the tools you <em>already</em> live in.
            </h2>
            <p className="section-sub">
              Damyra reads your entire stack — and writes back to the tools you
              trust it to. OAuth in. Read by default. Write access you turn on,
              one tool at a time.
            </p>
          </div>
        </div>
        <div className="int-grid">
          {[
            { n: "01", name: "Slack", scope: "native · @damyra", cls: "live", stamp: "live" },
            { n: "02", name: "Notion", scope: "read · write", cls: "", stamp: "live" },
            { n: "03", name: "Drive", scope: "read", cls: "", stamp: "live" },
            { n: "04", name: "Granola", scope: "read · sync", cls: "", stamp: "live" },
            { n: "05", name: "Linear", scope: "read · write", cls: "", stamp: "live" },
            { n: "06", name: "GitHub", scope: "read", cls: "", stamp: "live" },
            { n: "07", name: "Gmail", scope: "read · draft", cls: "", stamp: "live" },
            { n: "08", name: "yours", scope: "ship in days", cls: "coming", stamp: "soon" },
          ].map((item) => (
            <div key={item.n} className={`int-cell ${item.cls}`}>
              <div className="int-num">№ {item.n}</div>
              <div className="int-name">{item.name}</div>
              <div className="int-scope">{item.scope}</div>
              <div className="int-stamp">{item.stamp}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── By the desk ────────────────────────────────────────────────────── */}
      <section className="desk" id="roles">
        <div className="section-head">
          <div>
            <div className="section-tag">03 / By the Desk</div>
          </div>
          <div>
            <h2>
              What it does, <em>per chair</em>.
            </h2>
            <p className="section-sub">
              Same Slack. Same @mention. The questions change with the desk you
              sit at — Damyra reads the room and pulls from the right corner of
              your stack.
            </p>
          </div>
        </div>
        <div className="desk-grid">
          <div className="desk-col">
            <div className="desk-role">
              <b>Sales</b>
              <span>№ 01</span>
            </div>
            <div className="desk-ask">
              Pull every touchpoint with Acme — last 90 days, all channels.
            </div>
            <div className="desk-does">
              <b>Reads:</b> Gmail · Slack · Notion · CRM
            </div>
            <ul>
              <li>Drafts the renewal email with the right context.</li>
              <li>Surfaces objections from last quarter&apos;s calls.</li>
              <li>Flags accounts that went quiet.</li>
            </ul>
            <div className="desk-stamp">Every deal, fully in context.</div>
          </div>
          <div className="desk-col">
            <div className="desk-role">
              <b>Ops</b>
              <span>№ 02</span>
            </div>
            <div className="desk-ask">
              Why are we behind on Q3? Show me the receipts.
            </div>
            <div className="desk-does">
              <b>Reads:</b> Linear · Drive · Granola · Slack
            </div>
            <ul>
              <li>Cross-checks roadmap commits against shipped tickets.</li>
              <li>Aggregates blockers across teams in one digest.</li>
              <li>Drafts the weekly update so you don&apos;t have to.</li>
            </ul>
            <div className="desk-stamp">The weekly update writes itself.</div>
          </div>
          <div className="desk-col">
            <div className="desk-role">
              <b>Founders</b>
              <span>№ 03</span>
            </div>
            <div className="desk-ask">
              Where are we vs. last board update — what changed?
            </div>
            <div className="desk-does">
              <b>Reads:</b> Notion · Drive · Granola · Email
            </div>
            <ul>
              <li>Diffs metrics, hires, and risks against last cycle.</li>
              <li>Pulls customer quotes from sales calls + support.</li>
              <li>Drafts the investor update in your voice.</li>
            </ul>
            <div className="desk-stamp">Your board update, in your voice, in minutes.</div>
          </div>
          <div className="desk-col">
            <div className="desk-role">
              <b>Engineering</b>
              <span>№ 04</span>
            </div>
            <div className="desk-ask">
              What&apos;s the context on PR #482? Why this approach?
            </div>
            <div className="desk-does">
              <b>Reads:</b> GitHub · Linear · Notion · Slack
            </div>
            <ul>
              <li>Threads design docs to the PRs that came from them.</li>
              <li>Surfaces past discussions on the same module.</li>
              <li>Tags reviewers based on code ownership + history.</li>
            </ul>
            <div className="desk-stamp">New hire context on day one.</div>
          </div>
        </div>
      </section>

      {/* ── On the wire ────────────────────────────────────────────────────── */}
      <section className="wire" id="compare">
        <div className="section-head">
          <div>
            <div className="section-tag">04 / On the Wire</div>
          </div>
          <div>
            <h2>
              The honest <em>comparison</em>.
            </h2>
            <p className="section-sub">
              A fair read of where Damyra fits against the AI-for-work tools
              you&apos;ve already trialed. Yes, this is the comparison table —
              but with the parts that actually matter at work.
            </p>
          </div>
        </div>
        <div className="wire-table">
          <div className="wire-row head">
            <div className="cell">Capability</div>
            <div className="cell us">damyra</div>
            <div className="cell">Generic chatbots</div>
            <div className="cell">Workspace AI add-ons</div>
            <div className="cell">Custom internal RAG</div>
          </div>
          <div className="wire-row">
            <div className="cell feat">Lives in Slack — no new tab</div>
            <div className="cell us">
              <span className="mark yes">✓</span> Native @mention
            </div>
            <div className="cell">
              <span className="mark no">—</span> Web app
            </div>
            <div className="cell">
              <span className="mark partial" /> Per-app sidebar
            </div>
            <div className="cell">
              <span className="mark no">—</span> Internal portal
            </div>
          </div>
          <div className="wire-row">
            <div className="cell feat">Cross-tool context</div>
            <div className="cell us">
              <span className="mark yes">✓</span> Notion + Drive + Granola + …
            </div>
            <div className="cell">
              <span className="mark no">—</span> Whatever you paste
            </div>
            <div className="cell">
              <span className="mark partial" /> One workspace only
            </div>
            <div className="cell">
              <span className="mark partial" /> If you build it
            </div>
          </div>
          <div className="wire-row">
            <div className="cell feat">Time to first answer</div>
            <div className="cell us">
              <b>4 min.</b> OAuth in.
            </div>
            <div className="cell">Instant — no context</div>
            <div className="cell">~1 day — admin setup</div>
            <div className="cell">3–6 months</div>
          </div>
          <div className="wire-row">
            <div className="cell feat">Trains on your data</div>
            <div className="cell us">
              <span className="mark yes">✓</span> Never.
            </div>
            <div className="cell">
              <span className="mark partial" /> Opt-out, sometimes
            </div>
            <div className="cell">
              <span className="mark partial" /> Per-tenant
            </div>
            <div className="cell">
              <span className="mark yes">✓</span> Yours
            </div>
          </div>
          <div className="wire-row">
            <div className="cell feat">Writes back (with permission)</div>
            <div className="cell us">
              <span className="mark yes">✓</span> Per-tool toggle
            </div>
            <div className="cell">
              <span className="mark no">—</span> Read-only
            </div>
            <div className="cell">
              <span className="mark partial" /> Inside that one tool
            </div>
            <div className="cell">
              <span className="mark partial" /> If you build it
            </div>
          </div>
          <div className="wire-row">
            <div className="cell feat">Pricing model</div>
            <div className="cell us">Per-seat, flat.</div>
            <div className="cell">Per-seat + tokens</div>
            <div className="cell">Per-seat × N add-ons</div>
            <div className="cell">Eng team&apos;s salary</div>
          </div>
        </div>
        <div className="wire-foot">
          <span>
            Reading: <b>✓</b> yes · <b>—</b> no · ▦ partial
          </span>
          <span>Based on internal testing, March 2026.</span>
          <span>
            <b>Disagree?</b>&nbsp;&nbsp;founders@damyra.ai
          </span>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <div className="subrule" id="cta" style={{ justifyContent: "center", fontStyle: "italic", fontSize: "13px", letterSpacing: "0.04em", textTransform: "none", padding: "18px 56px", borderTop: "2px solid var(--rule)" }}>
        Stop context-switching. Start asking.
      </div>

      <footer className="footer">
        <span>© damyra.ai — 2026</span>
        <span>Set in Source Serif &amp; JetBrains Mono</span>
        <span>founders@damyra.ai</span>
      </footer>
    </>
  );
}
