import { describe, it, expect, vi } from 'vitest'
import { fetchChatResponse, fetchImageResponse } from './aiService'

global.fetch = vi.fn()

describe('aiService', () => {
    it('fetchChatResponse returns generated text', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: () => Promise.resolve([{ generated_text: 'Hello world' }]),
        })

        const response = await fetchChatResponse([{ role: 'user', content: 'Hi' }])
        expect(response).toBe('Hello world')
    })

    it('fetchImageResponse returns a blob URL', async () => {
        const mockBlob = new Blob(['image data'], { type: 'image/png' })
        fetch.mockResolvedValue({
            ok: true,
            blob: () => Promise.resolve(mockBlob),
        })

        global.URL.createObjectURL = vi.fn(() => 'blob:abc')

        const response = await fetchImageResponse('a cat')
        expect(response).toBe('blob:abc')
    })

    it('throws error on failed fetch', async () => {
        fetch.mockResolvedValue({ ok: false })
        await expect(fetchChatResponse([{ role: 'user', content: 'Hi' }])).rejects.toThrow()
    })
})
