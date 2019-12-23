#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int n = atoi(argv[1]);

    int i, j;
    for (i = n; i > 0; i--)
    {
        for (j = 0; j < i; j++)
        {
            printf("%d", n - i + 1);
        }
        if (i > 1)
        {
            printf("\n");
        }
    }

    return 0;
}