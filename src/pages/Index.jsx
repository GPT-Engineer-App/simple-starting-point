import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Welcome to Your Bare-Bones App</CardTitle>
          <CardDescription className="text-center text-lg mt-2">Start building your application here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">Use the navigation bar to explore different sections.</p>
          <div className="flex justify-center">
            <Button>Get Started</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;