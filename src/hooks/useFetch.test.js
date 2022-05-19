import { useFetch } from ".";
import { renderHook, act } from "@testing-library/react";

describe("useFetch", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue("foo"),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return data with a successful request", async () => {
    const { result } = renderHook(() => useFetch());

    await act(async () => {
      result.current.setUrl("test.com");
    });

    expect(result.current.data).toBe("foo");
  });
});
