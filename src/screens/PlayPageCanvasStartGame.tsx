// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-1"?: () => void;
  };

}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions }: PlayPageCanvasStartGameProps) {
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE">
          {/* Header / Info Bar (Non-actionable) */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
                C
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">Canvas Game</span>
            </div>
      
            <div className="flex items-center space-x-8">
              {/* High Score Status Observable */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-slate-400 font-medium">High Score:</span>
                <div className="font-bold text-emerald-400 min-w-[1rem] tracking-wide" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE"></div>
              </div>
      
              {/* Game Status Observable */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-slate-400 font-medium">Status:</span>
                <div className="font-medium text-indigo-400 tracking-wide" data-setfarm-element-ref="E000003" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE">Ready to play</div>
              </div>
            </div>
          </header>
      
          {/* Main Game Area */}
          <main className="flex-1 max-w-6xl w-full mx-auto p-8 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center space-y-6">
              {/* Canvas Container */}
              <div data-surface-id="SURF_GAME_CANVAS" className="w-full aspect-video max-w-4xl bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden shadow-2xl flex flex-col items-center justify-center" data-setfarm-element-ref="E000004">
                {/* Decorative Canvas Grid & Visuals */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-indigo-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-semibold text-white">Press Start to Begin</p>
                    <p className="text-sm text-slate-400 max-w-sm">Launch your session and set a new high score on the arena board.</p>
                  </div>
                </div>
              </div>
      
              {/* Action Control Panel */}
              <div className="flex items-center justify-center pt-2">
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-600/30 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_START_BUTTON_STATE" data-action-id="start-1" onClick={actions?.["start-1"]}>Start</button>
              </div>
            </div>
          </main>
      
          {/* Footer Chrome (Non-actionable) */}
          <footer className="border-t border-slate-800/80 py-4 px-8 text-center text-xs text-slate-500">
            <span>Canvas Game Workspace © 2025</span>
          </footer>
        </div>
    </>
  );
}
