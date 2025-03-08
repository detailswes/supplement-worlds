import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impact Whey</CardTitle>
        <CardDescription>
          Ein gut lösliches Protein mit fruchtigen Geschmäckern und hohem
          Proteingehalt.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img src="https://storage.googleapis.com/product-images-supplement-worlds/10530911-5884889444360331.jpg" />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
