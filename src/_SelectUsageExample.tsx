import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/lib/components/select";

export function SelectUsageExample() {
    const handleSelectChange = (value: string) => {
        console.log('Selected value is', value);
    };

    return <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
    </Select>
}
