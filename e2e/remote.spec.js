import { Selector } from 'testcafe'

fixture('Test page')
  .page('http://example.com')
  .afterEach(async t => {
    await t.eval(() => localStorage.clear())
  })

test('Check that page contains correct meta data', async (t) => {
  const bodyText = await Selector('body').textContent
  await t.expect(bodyText).contains('Example Domain')
})
