export type DemoRequest = {
  id: string;
  name: string;
  email: string;
  clinicName: string;
  specialty: string;
  monthlyVisits: string;
  notes: string;
  createdAt: string;
};

export function createDemoRequest(
  request: Omit<DemoRequest, "id" | "createdAt">,
): DemoRequest {
  return {
    ...request,
    id: `demo_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
}
