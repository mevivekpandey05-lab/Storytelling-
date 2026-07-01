/**
 * Adhoori Mohabbat Ka Aakhri Vaada - Cinematic Architecture Engine
 * Core Module: Vanilla JS ES6 + Fluid Canvas Pipeline Animation Ecosystem
 */

document.addEventListener('DOMContentLoaded', () => {

    // Document Structural DOM Selectors
    const timelineIndicator = document.getElementById('story-progress');
    const soundtrackTrigger = document.getElementById('audio-toggle-btn');
    const audioStreamNode = document.getElementById('cinematic-soundtrack');
    const journeyInitBtn = document.getElementById('start-journey-trigger');
    const storyMatrixPipeline = document.getElementById('story-matrix');
    const hospitalTerminalNode = document.getElementById('hospital-typing-node');
    
    let isAudioActive = false;

    // Advanced Dynamic HTML5 Canvas Frame Context Processing
    const particleCanvas = document.getElementById('ambient-particle-canvas');
    const canvasContext = particleCanvas.getContext('2d');
    let structuralParticles = [];
    let globalEcosystemMood = 'romantic';

    function synchronizeCanvasViewport() {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', synchronizeCanvasViewport);
    synchronizeCanvasViewport();

    // Smooth Scroll Navigation Implementation
    journeyInitBtn.addEventListener('click', () => {
        storyMatrixPipeline.scrollIntoView({ behavior: 'smooth' });
        evaluateAudioEcosystem(true);
    });

    // Sound Processing Trigger Configuration
    soundtrackTrigger.addEventListener('click', () => {
        evaluateAudioEcosystem(!isAudioActive);
    });

    function evaluateAudioEcosystem(playSignal) {
        if (playSignal) {
            audioStreamNode.play().then(() => {
                isAudioActive = true;
                soundtrackTrigger.querySelector('.hud-icon').textContent = '⏸️';
                soundtrackTrigger.querySelector('.hud-text').textContent = 'संगीत रोकें';
            }).catch(sandboxError => console.log("Context structural audio stream interaction deferred:", sandboxError));
        } else {
            audioStreamNode.pause();
            isAudioActive = false;
            soundtrackTrigger.querySelector('.hud-icon').textContent = '🎵';
            soundtrackTrigger.querySelector('.hud-text').textContent = 'संगीत शुरू करें';
        }
    }

    // Dynamic Top Linear Flow Scroll Tracker Calculation
    window.addEventListener('scroll', () => {
        const altitudeMax = document.documentElement.scrollHeight - window.innerHeight;
        const currentPercentage = (window.scrollY / altitudeMax) * 100;
        timelineIndicator.style.width = `${currentPercentage}%`;
    });

    // High Reliability Typographical Streamer Module (Typewriter)
    function runTypewriterStream(targetDomElement, rawPayloadString, internalDelay = 25) {
        targetDomElement.textContent = '';
        targetDomElement.style.visibility = 'visible';
        let stringPointer = 0;

        function processCharacterStep() {
            if (stringPointer < rawPayloadString.length) {
                targetDomElement.textContent += rawPayloadString.charAt(stringPointer);
                stringPointer++;
                setTimeout(processCharacterStep, internalDelay);
            }
        }
        processCharacterStep();
    }

    // High Performance Structural Intersection Observer Configuration API
    const contextObserverConfig = {
        root: null,
        threshold: 0.2,
        rootMargin: "0px"
    };

    const cinematicObserverEngine = new IntersectionObserver((monitoredNodes) => {
        monitoredNodes.forEach(activeNode => {
            if (activeNode.isIntersecting) {
                activeNode.target.classList.add('revealed');

                // Read structural context properties to scale system-wide ambient styles
                if (activeNode.target.hasAttribute('data-mood')) {
                    const extractedMood = activeNode.target.getAttribute('data-mood');
                    document.body.setAttribute('data-mood', extractedMood);
                    globalEcosystemMood = extractedMood;
                }

                // Node Action Matrix: Execute Narrative Typewriters
                const narrativeBlock = activeNode.target.querySelector('.story-narrative-block');
                if (narrativeBlock && !narrativeBlock.classList.contains('stream-completed')) {
                    narrativeBlock.classList.add('stream-completed');
                    const textPayload = narrativeBlock.getAttribute('data-text');
                    runTypewriterStream(narrativeBlock, textPayload);
                }

                // Context Exception Handler: Execute Custom ICU Hospital Text Dialogue
                if (activeNode.target.id === 'chap-node-4' && !hospitalTerminalNode.classList.contains('executed')) {
                    hospitalTerminalNode.classList.add('executed');
                    setTimeout(() => {
                        runTypewriterStream(hospitalTerminalNode, "यशोदानंदन: रुचि... रोना मत... मुझे पता है तुम बहुत मजबूत हो...", 45);
                    }, 1200);
                }
            }
        });
    }, contextObserverConfig);

    // Dynamic Registration of Elements to Observer Engine
    document.querySelectorAll('[data-reveal], .timeline-chapter-segment').forEach(uiNode => {
        cinematicObserverEngine.observe(uiNode);
    });

    // ==========================================================================
    // PROCEDURAL PARTICLES QUANTUM CORE LOGIC (CANVAS AMBIENT ENGINE)
    // ==========================================================================
    class EnvironmentalParticle {
        constructor() {
            this.instantiateStructuralBounds();
        }

        instantiateStructuralBounds() {
            this.axisX = Math.random() * particleCanvas.width;
            this.axisY = particleCanvas.height + Math.random() * 100;
            this.unitRadius = Math.random() * 2.8 + 1.2;
            this.momentumX = Math.random() * 0.6 - 0.3;
            this.momentumY = -(Math.random() * 1.0 + 0.4);
            this.alphaDecay = Math.random() * 0.65 + 0.2;
            this.colorString = '';
            this.proceduralGeometryShape = 'circle';
        }

        computeVectorUpdates() {
            this.axisX += this.momentumX;
            this.axisY += this.momentumY;

            // Recalibrate system bounds variables upon off-screen vector paths
            if (this.axisY < 0 || this.alphaDecay <= 0 || this.axisY > particleCanvas.height + 120) {
                this.instantiateStructuralBounds();
            }

            // Real-time environmental contextual parameters translation routing
            if (globalEcosystemMood === 'romantic') {
                this.colorString = `rgba(204, 27, 57, ${this.alphaDecay})`; // Translucent Crimson Floating Hearts
                this.proceduralGeometryShape = 'heart';
            } else if (globalEcosystemMood === 'tragedy') {
                this.colorString = `rgba(235, 104, 47, ${this.alphaDecay})`; // Rapidly Rising Volatile Orange Sparks
                this.momentumY = -(Math.random() * 2.8 + 1.4);
                this.proceduralGeometryShape = 'circle';
            } else if (globalEcosystemMood === 'sad') {
                this.colorString = `rgba(114, 167, 242, ${this.alphaDecay})`; // Vertical Teardrop Downpour Simulation
                this.momentumY = Math.random() * 4.5 + 3.5; 
                if (this.axisY > particleCanvas.height) this.axisY = -20; // Structural inversion vector path
                this.proceduralGeometryShape = 'tear';
            } else if (globalEcosystemMood === 'hope') {
                this.colorString = `rgba(230, 185, 64, ${this.alphaDecay})`; // Smooth Ethereal Golden Micro Dust
                this.momentumY = -(Math.random() * 0.5 + 0.2);
                this.proceduralGeometryShape = 'circle';
            }
        }

        renderGraphicsFrame() {
            canvasContext.fillStyle = this.colorString;
            canvasContext.beginPath();

            if (this.proceduralGeometryShape === 'heart') {
                // High precision mathematical curve mapping to project vector canvas hearts
                let targetApexY = this.axisY - this.unitRadius;
                canvasContext.moveTo(this.axisX, this.axisY);
                canvasContext.bezierCurveTo(this.axisX - this.unitRadius, targetApexY, this.axisX - this.unitRadius * 2, this.axisY - this.unitRadius / 2, this.axisX, this.axisY + this.unitRadius);
                canvasContext.bezierCurveTo(this.axisX + this.unitRadius * 2, this.axisY - this.unitRadius / 2, this.axisX + this.unitRadius, targetApexY, this.axisX, this.axisY);
                canvasContext.fill();
            } else if (this.proceduralGeometryShape === 'tear') {
                canvasContext.ellipse(this.axisX, this.axisY, this.unitRadius * 0.5, this.unitRadius * 2.0, 0, 0, Math.PI * 2);
                canvasContext.fill();
            } else {
                canvasContext.arc(this.axisX, this.axisY, this.unitRadius, 0, Math.PI * 2);
                canvasContext.fill();
            }
        }
    }

    function constructEcosystemMatrix() {
        structuralParticles = [];
        const dynamicDensityScaling = Math.min(window.innerWidth / 12, 85);
        for (let currentIdx = 0; currentIdx < dynamicDensityScaling; currentIdx++) {
            structuralParticles.push(new EnvironmentalParticle());
        }
    }

    function coreRenderEngineLoop() {
        canvasContext.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        structuralParticles.forEach(activeParticle => {
            activeParticle.computeVectorUpdates();
            activeParticle.renderGraphicsFrame();
        });
        requestAnimationFrame(coreRenderEngineLoop);
    }

    // Initialize System Architecture Runtime
    constructEcosystemMatrix();
    coreRenderEngineLoop();
});
