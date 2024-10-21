import os
import asyncio
import pyperclip
import pyautogui
from twitchio.ext import commands
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv("ACCESS_TOKEN")
CHANNEL = os.getenv("CHANNEL")

class Bot(commands.Bot):
  def __init__(self):
    super().__init__(
      token="oauth:"+TOKEN,
      prefix='!',
      initial_channels=[CHANNEL]
    )

  async def event_ready(self):
    print(f'Conectado a Twitch como {self.nick}')

  async def event_message(self, message):
    if message.author.name.lower() == CHANNEL.lower():
      pyperclip.copy(message.content)
      pyautogui.hotkey('ctrl', 'v')
      pyautogui.hotkey('enter')
      print(f'{message.content}')

if __name__ == "__main__":
  bot = Bot()
  bot.run()