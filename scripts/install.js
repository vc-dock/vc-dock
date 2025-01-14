import { promises } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

// 复制 .vscode 中的文件，并改名
async function copyAndRenameFile() {
  try {
    await promises.copyFile(
      resolve(cwd(), '.vscode', '_settings.json'),
      resolve(cwd(), '.vscode', 'settings.json'),
    )

    await promises.copyFile(
      resolve(cwd(), '.vscode', '_launch.json'),
      resolve(cwd(), '.vscode', 'launch.json'),
    )
  }
  catch (error) {
    console.error('copy error', error)
  }
}

copyAndRenameFile()
