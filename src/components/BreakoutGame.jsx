import React, { useRef, useEffect, useState } from "react";
import tuhinPortrait from "../assets/tuhin_portrait.jpg";

const GAME_WIDTH = 480;
const GAME_HEIGHT = 360;
const PADDLE_WIDTH = 90;
const PADDLE_HEIGHT = 16;
const BALL_SIZE = 40;
const BRICK_ROWS = 3;
const BRICK_COLS = 7;
const BRICK_WIDTH = 60;
const BRICK_HEIGHT = 24;
const BRICK_GAP = 8;

const BreakoutGame = () => {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(true);
  const [won, setWon] = useState(false);

  // Game state refs
  const paddleX = useRef((GAME_WIDTH - PADDLE_WIDTH) / 2);
  const ball = useRef({
    x: GAME_WIDTH / 2 - BALL_SIZE / 2,
    y: GAME_HEIGHT - 80,
    dx: 3,
    dy: -3,
  });
  const bricks = useRef(
    Array.from({ length: BRICK_ROWS * BRICK_COLS }, (_, i) => ({
      x: (i % BRICK_COLS) * (BRICK_WIDTH + BRICK_GAP) + BRICK_GAP / 2,
      y: Math.floor(i / BRICK_COLS) * (BRICK_HEIGHT + BRICK_GAP) + 40,
      broken: false,
    }))
  );

  // Paddle movement
  useEffect(() => {
    const movePaddle = (e) => {
      let x;
      if (e.type === "mousemove") {
        x = e.clientX - canvasRef.current.getBoundingClientRect().left;
      } else if (e.type === "touchmove") {
        x = e.touches[0].clientX - canvasRef.current.getBoundingClientRect().left;
      }
      paddleX.current = Math.max(
        0,
        Math.min(GAME_WIDTH - PADDLE_WIDTH, x - PADDLE_WIDTH / 2)
      );
    };
    window.addEventListener("mousemove", movePaddle);
    window.addEventListener("touchmove", movePaddle, { passive: false });
    return () => {
      window.removeEventListener("mousemove", movePaddle);
      window.removeEventListener("touchmove", movePaddle);
    };
  }, []);

  // Game loop
  useEffect(() => {
    let animationId;
    const img = new window.Image();
    img.src = tuhinPortrait;

    const draw = (ctx) => {
      // Clear
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      // Draw bricks
      bricks.current.forEach((brick) => {
        if (!brick.broken) {
          ctx.fillStyle = "#222";
          ctx.fillRect(brick.x, brick.y, BRICK_WIDTH, BRICK_HEIGHT);
        }
      });

      // Draw paddle
      ctx.fillStyle = "#8B5C2A";
      ctx.fillRect(paddleX.current, GAME_HEIGHT - PADDLE_HEIGHT - 10, PADDLE_WIDTH, PADDLE_HEIGHT);

      // Draw ball (portrait)
      ctx.save();
      ctx.beginPath();
      ctx.arc(
        ball.current.x + BALL_SIZE / 2,
        ball.current.y + BALL_SIZE / 2,
        BALL_SIZE / 2,
        0,
        Math.PI * 2
      );
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, ball.current.x, ball.current.y, BALL_SIZE, BALL_SIZE);
      ctx.restore();
    };

    const update = () => {
      if (!running) return;

      // Move ball
      ball.current.x += ball.current.dx;
      ball.current.y += ball.current.dy;

      // Wall collision
      if (ball.current.x < 0 || ball.current.x + BALL_SIZE > GAME_WIDTH) {
        ball.current.dx *= -1;
      }
      if (ball.current.y < 0) {
        ball.current.dy *= -1;
      }

      // Paddle collision
      if (
        ball.current.y + BALL_SIZE >= GAME_HEIGHT - PADDLE_HEIGHT - 10 &&
        ball.current.x + BALL_SIZE > paddleX.current &&
        ball.current.x < paddleX.current + PADDLE_WIDTH
      ) {
        ball.current.dy *= -1;
        // Add a little angle based on where it hits the paddle
        const hitPos = (ball.current.x + BALL_SIZE / 2 - (paddleX.current + PADDLE_WIDTH / 2)) / (PADDLE_WIDTH / 2);
        ball.current.dx = 4 * hitPos;
      }

      // Brick collision
      bricks.current.forEach((brick) => {
        if (!brick.broken) {
          if (
            ball.current.x + BALL_SIZE > brick.x &&
            ball.current.x < brick.x + BRICK_WIDTH &&
            ball.current.y + BALL_SIZE > brick.y &&
            ball.current.y < brick.y + BRICK_HEIGHT
          ) {
            brick.broken = true;
            ball.current.dy *= -1;
          }
        }
      });

      // Win condition
      if (bricks.current.every((b) => b.broken)) {
        setWon(true);
        setRunning(false);
      }

      // Lose condition
      if (ball.current.y > GAME_HEIGHT) {
        setRunning(false);
      }
    };

    const loop = () => {
      const ctx = canvasRef.current.getContext("2d");
      update();
      draw(ctx);
      if (running) {
        animationId = requestAnimationFrame(loop);
      }
    };

    img.onload = () => {
      loop();
    };

    return () => cancelAnimationFrame(animationId);
    // eslint-disable-next-line
  }, [running]);

  const restart = () => {
    // Reset game state
    ball.current = {
      x: GAME_WIDTH / 2 - BALL_SIZE / 2,
      y: GAME_HEIGHT - 80,
      dx: 3,
      dy: -3,
    };
    paddleX.current = (GAME_WIDTH - PADDLE_WIDTH) / 2;
    bricks.current = Array.from({ length: BRICK_ROWS * BRICK_COLS }, (_, i) => ({
      x: (i % BRICK_COLS) * (BRICK_WIDTH + BRICK_GAP) + BRICK_GAP / 2,
      y: Math.floor(i / BRICK_COLS) * (BRICK_HEIGHT + BRICK_GAP) + 40,
      broken: false,
    }));
    setWon(false);
    setRunning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-2xl font-bold mb-2">Breakout Game</h2>
      <p className="mb-4 text-muted-foreground text-center">Move your mouse or finger to control the paddle. Break all the bricks with your portrait!</p>
      <div
        style={{
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
          borderRadius: 16,
          overflow: "hidden",
          border: "4px solid #222",
          background: "#f3f4f6",
          position: "relative",
        }}
      >
        <canvas
          ref={canvasRef}
          width={GAME_WIDTH}
          height={GAME_HEIGHT}
          style={{ display: "block", background: "#f3f4f6" }}
        />
        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white z-10">
            <div className="text-2xl font-bold mb-2">{won ? "You Win! 🎉" : "Game Over"}</div>
            <button
              onClick={restart}
              className="mt-2 px-6 py-2 bg-white text-black rounded shadow font-semibold hover:bg-gray-200"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreakoutGame;