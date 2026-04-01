#!/usr/bin/env python3
import subprocess
import os

os.chdir('c:\\Users\\ss3434\\Downloads\\IndonesiaData')

try:
    # Add changes
    print("Adding changes...")
    subprocess.run(['git', 'add', 'style.css'], check=True, capture_output=True)
    
    # Commit
    print("Committing...")
    result = subprocess.run(['git', 'commit', '-m', 'Mobile responsive fix: Move language selector from fixed to static position on mobile'], 
                           check=True, capture_output=True, text=True)
    print(f"✓ Commit successful: {result.stdout.strip()}")
    
    # Push
    print("Pushing to GitHub...")
    result = subprocess.run(['git', 'push', 'origin', 'main'], check=True, capture_output=True, text=True)
    print(f"✓ Push successful: {result.stdout.strip() if result.stdout else 'Changes deployed'}")
    
except subprocess.CalledProcessError as e:
    print(f"Error: {e.stderr}")
    print(f"Output: {e.stdout}")

print("\nDone!")
