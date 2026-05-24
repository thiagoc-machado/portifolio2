import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, initial, whileInView, animate, transition, ...props }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

import Contact from "./Contact";

describe("Contact", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("submits the form and shows a success message", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ message: "Message sent successfully." }),
    });

    vi.stubGlobal("fetch", fetchMock);

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Thiago" },
    });
    fireEvent.change(screen.getByLabelText(/mail/i), {
      target: { value: "thiago@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await screen.findByText(/message sent successfully/i);

    expect(fetchMock).toHaveBeenCalledWith(
      "/.netlify/functions/send-contact",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    );
  });

  it("shows an error message when the server rejects the request", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue({ message: "Failed to send email." }),
    });

    vi.stubGlobal("fetch", fetchMock);

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Thiago" },
    });
    fireEvent.change(screen.getByLabelText(/mail/i), {
      target: { value: "thiago@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/failed to send email/i)).toBeInTheDocument();
    });
  });
});
