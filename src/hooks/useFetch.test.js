
import { useFetch } from '.';
import "whatwg-fetch";
import { renderHook,act } from "@testing-library/react";
import fetchMock from "fetch-mock";
// import { act } from "react-test-renderer";

describe("useFetch", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => useFetch());
    fetchMock.mock("test.com", {
      returnedData: "foo"
    });
    await act(async () => {
      result.current.setUrl("test.com");
    });

    expect(result.current.data).toBe({
      returnedData: "foo"
    });
  });
});