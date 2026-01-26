#!/usr/bin/env python3
"""
Transcribe video file to text with timestamps using OpenAI Whisper.
"""

import whisper
import sys
from pathlib import Path


def format_timestamp(seconds):
    """Convert seconds to HH:MM:SS format."""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"


def transcribe_video(video_path, output_path, model_name="small"):
    """
    Transcribe video file and save transcript with timestamps.

    Args:
        video_path: Path to input video file
        output_path: Path to output transcript file
        model_name: Whisper model to use (tiny, base, small, medium, large)
    """
    print(f"Loading Whisper model '{model_name}'...")
    model = whisper.load_model(model_name)

    print(f"\nTranscribing: {video_path}")
    print("This may take several minutes depending on video length and hardware...")

    # Transcribe with word-level timestamps
    result = model.transcribe(
        str(video_path),
        verbose=True,
        word_timestamps=False  # Use segment-level timestamps for readability
    )

    print(f"\nWriting transcript to: {output_path}")

    # Write transcript with timestamps
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"Transcript: {video_path.name}\n")
        f.write("=" * 80 + "\n\n")

        for segment in result['segments']:
            timestamp = format_timestamp(segment['start'])
            text = segment['text'].strip()
            f.write(f"[{timestamp}] {text}\n")

        f.write("\n" + "=" * 80 + "\n")
        f.write(f"Total duration: {format_timestamp(result['segments'][-1]['end'])}\n")

    print(f"\n✓ Transcript saved successfully!")
    print(f"  Segments: {len(result['segments'])}")
    print(f"  Duration: {format_timestamp(result['segments'][-1]['end'])}")


def main():
    # Define paths
    video_path = Path("./content/Gemini CLI Podcast.mp4")
    output_path = Path("./content/Gemini CLI Podcast Transcript.txt")

    # Check if video file exists
    if not video_path.exists():
        print(f"Error: Video file not found: {video_path}")
        sys.exit(1)

    # Create output directory if needed
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Run transcription
    transcribe_video(video_path, output_path, model_name="small")


if __name__ == "__main__":
    main()
