class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}

class Answer {

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int sum;
        int carry = 0;
        int digit;
        ListNode Head = new ListNode(0);
        ListNode current = Head;
        // Example 3: 9999999 + 9999 -> [8,9,9,9,0,0,0,1]

        while (l1 != null || l2 != null || carry > 0) {
            int v1 = (l1 != null) ? l1.val : 0;
            int v2 = (l2 != null) ? l2.val : 0;

            sum = v1 + v2 + carry;
            digit = sum % 10;
            carry = sum / 10;
            current.next = new ListNode(digit);
            current = current.next;

            if (l1 != null)
                l1 = l1.next;

            if (l2 != null)
                l2 = l2.next;

        }
        return Head.next;
    }

    public static void main(String[] args) {
        Answer solution = new Answer();

        // Example 1: 342 + 465 = 807 -> [7,0,8]
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        ListNode result = solution.addTwoNumbers(l1, l2);
        System.out.print("Example 1: ");
        printList(result); // expected: [7,0,8]

        // Example 2: 0 + 0 = 0 -> [0]
        ListNode l3 = new ListNode(0);
        ListNode l4 = new ListNode(0);
        result = solution.addTwoNumbers(l3, l4);
        System.out.print("Example 2: ");
        printList(result); // expected: [0]

        // Example 3: 9999999 + 9999 -> [8,9,9,9,0,0,0,1]
        ListNode l5 = new ListNode(9);
        l5.next = new ListNode(9);
        l5.next.next = new ListNode(9);
        l5.next.next.next = new ListNode(9);
        l5.next.next.next.next = new ListNode(9);
        l5.next.next.next.next.next = new ListNode(9);
        l5.next.next.next.next.next.next = new ListNode(9);

        ListNode l6 = new ListNode(9);
        l6.next = new ListNode(9);
        l6.next.next = new ListNode(9);
        l6.next.next.next = new ListNode(9);

        result = solution.addTwoNumbers(l5, l6);
        System.out.print("Example 3: ");
        printList(result); // expected: [8,9,9,9,0,0,0,1]
    }

    static void printList(ListNode node) {
        System.out.print("[");
        while (node != null) {
            System.out.print(node.val);
            if (node.next != null)
                System.out.print(",");
            node = node.next;
        }
        System.out.println("]");
    }
}
