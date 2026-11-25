import { ALL_SR_COMMENT_FINDER } from "src/data/constants";

test("SR comment matcher does not include the preceding line break", () => {
    const comment = "<!--SR:!2024-05-22,1,230!-->";
    const text = `Question\n${comment}\nAnswer`;
    const regex = new RegExp(ALL_SR_COMMENT_FINDER.source, "g");
    const match = regex.exec(text);

    expect(match?.[0]).toBe(comment);
});
